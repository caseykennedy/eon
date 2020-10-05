// Portal:

// https://timcchang.com/blog/building-an-accessible-modal-using-hooks-and-higher-ordered-components/

// TODO: https://upmostly.com/tutorials/modal-components-react-custom-hooks

// ___________________________________________________________________

import React from 'react'
import ReactDOM from 'react-dom'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
  className?: string
  children: React.ReactNode
  root?: string
  id?: string
  isOpen: boolean
  handleExit: () => any
  focusAfterExit?: HTMLElement
}

// ___________________________________________________________________

const Portal: React.FC<Props> = ({
  children,
  id,
  root,
  isOpen,
  handleExit,
  focusAfterExit,
  mainRef,
  className
}) => {
  const [hasUpdated, forceUpdate] = React.useState(false)

  const exitButton = React.useRef<HTMLButtonElement>(null)
  const portal = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    portal.current = document.createElement('div')
    // portal.current.id = id

    if (!document.body.querySelector(`#${id}`)) {
      document.body.prepend(portal.current)
    }

    if (!hasUpdated) forceUpdate(true)

    return () => {
      if (portal.current) document.body.removeChild(portal.current)
    }
  }, [])

  const initialRender = React.useRef(false)

  React.useEffect(() => {
    const rootContainer = document.querySelector(`#${root}`)
    const modalContainer = document.querySelector(`#${id}`)

    // const capturePosition = () => {
    //   const cachedPosition = window.pageYOffset
    //   return {
    //     freeze: () => {
    //       mainRef.current.style = `position: relative; top: ${cachedPosition *
    //         -1}px; width: 100%;`
    //     },
    //     unfreeze: () => {
    //       mainRef.current.removeAttribute('style')
    //       window.scrollTo({
    //         top: cachedPosition
    //       })
    //     }
    //   }
    // }

    const toggleTabIndex = (type: 'on' | 'off', container: Element) => {
      const focusableElements = container.querySelectorAll(
        'button, a, input, textarea, select'
      )
      focusableElements.forEach((element: Element) => {
        if (type === 'on') {
          element.removeAttribute('tabindex')
        } else {
          element.setAttribute('tabindex', '-1')
        }
      })
    }

    const handleKeyDown = (e: any) => {
      if (e.key === 'Escape') {
        handleExit()
      }
    }

    function handleClickOutside(e: any) {
      if (mainRef.current && mainRef.current.contains(e.target)) {
        handleExit()
      }
    }

    // const { freeze, unfreeze } = capturePosition()

    if (isOpen) {
      if (exitButton.current) exitButton.current.focus()
      if (modalContainer) toggleTabIndex('on', modalContainer)
      if (rootContainer) toggleTabIndex('off', rootContainer)
      window.addEventListener('keydown', handleKeyDown)
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      // freeze()
    } else {
      if (modalContainer) toggleTabIndex('off', modalContainer)
      if (rootContainer) toggleTabIndex('on', rootContainer)
      window.removeEventListener('keydown', handleKeyDown)
      // unfreeze()
      if (focusAfterExit) focusAfterExit.focus()

      if (!initialRender.current) {
        initialRender.current = true
        setTimeout(() => {
          if (modalContainer) toggleTabIndex('off', modalContainer)
        }, 0)
      }
    }

    return () => {
      if (isOpen) {
        window.removeEventListener('keydown', handleKeyDown)
        // unfreeze()
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  if (portal.current) {
    return ReactDOM.createPortal(
      <S.Portal className={className}>{children}</S.Portal>,
      portal.current
    )
  }
  return null
}

export default Portal

// ___________________________________________________________________
