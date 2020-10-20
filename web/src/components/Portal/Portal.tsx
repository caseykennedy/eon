// Portal:

// https://timcchang.com/blog/building-an-accessible-modal-using-hooks-and-higher-ordered-components/

// TODO: https://upmostly.com/tutorials/modal-components-react-custom-hooks

// ___________________________________________________________________

import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
  scrollRef: React.RefObject<HTMLDivElement>
  exitRef: React.RefObject<HTMLDivElement>
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
  className,
  scrollRef,
  exitRef
}) => {
  const [hasUpdated, forceUpdate] = React.useState(false)

  const exitButton = exitRef
  const portal = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    portal.current = document.createElement('div')
    portal.current.id = id

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

    const capturePosition = () => {
      const cachedPosition = window.pageYOffset
      return {
        freeze: () => {
          // document.body.style.overflow = 'hidden'
          if (null !== mainRef.current) {
            mainRef.current.style = `top: ${cachedPosition * -1}px;`
          }
        },
        unfreeze: () => {
          // document.body.style.overflow = 'unset'
          // if (mainRef.current) {
          //   mainRef.current.classList.remove('body-lock')
          // }
          // mainRef.current.removeAttribute('style')
          // window.scrollTo({
          //   top: cachedPosition
          // })
          if (null !== mainRef.current) {
            mainRef.current.removeAttribute('style')
            window.scrollTo({
              top: cachedPosition
            })
          }
        }
      }
    }

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
      const focusableElements: NodeListOf<Element> = container.querySelectorAll(
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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleExit()
      }
    }

    const handleClickOutside = (e: any) => {
      if (mainRef && mainRef.current && mainRef.current.contains(e.target)) {
        handleExit()
      }
    }

    const { freeze, unfreeze } = capturePosition()

    if (isOpen) {
      // if (modalContainer) {
      //   toggleTabIndex('on', modalContainer)
      //   console.log('tabs on')
      //   // console.log(rootContainer)
      //   // console.log(modalContainer)
      //   // console.log(scrollRef)
      // }
      // if (rootContainer) toggleTabIndex('off', rootContainer)
      if (exitButton.current) {
        exitButton.current.focus()
      }

      // console.log(exitButton)

      window.addEventListener('keydown', handleKeyDown)
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      if (null !== scrollRef.current) {
        disableBodyScroll(scrollRef.current)
      }
      // freeze()
    } else {
      // if (modalContainer) {
      //   toggleTabIndex('off', modalContainer)
      //   console.log('tabs off')
      // }
      // if (rootContainer) toggleTabIndex('on', rootContainer)
      window.removeEventListener('keydown', handleKeyDown)

      if (null !== scrollRef.current) {
        enableBodyScroll(scrollRef.current)
      }
      // unfreeze()

      if (focusAfterExit) focusAfterExit.focus()

      if (!initialRender.current) {
        initialRender.current = true
        setTimeout(() => {
          if (modalContainer) {
            toggleTabIndex('off', modalContainer)
          }
        }, 0)
      }
    }

    return () => {
      if (isOpen) {
        window.removeEventListener('keydown', handleKeyDown)
        clearAllBodyScrollLocks()
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
