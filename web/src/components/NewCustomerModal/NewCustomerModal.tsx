// New Customer Modal:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

// utils
import * as gtag from '../../utils/gtag'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import { Input } from 'theme-ui'

// Components
import Icon from '../Icons'
import Modal from '../Modal'

// ___________________________________________________________________

const NewCustomerModal = () => {
  const [active, setActive] = useState(false)
  const [cookie, setCookie, removeCookie] = useCookies(['new_user_modal'])

  const createCookie = () => {
    setCookie('new_user_modal', 'true', { path: '/' })
  }

  const destroyCookie = () => {
    removeCookie('new_user_modal', { path: '/' })
  }

  useEffect(() => {
    !cookie.new_user_modal &&
      setTimeout(() => {
        setActive(true)
      }, 7500)
  }, [cookie])
  return (
    <>
      {active && (
        <Modal active={true}>
          <S.Modal>
            <h4>
              Get 10% off
              <br />
              your first order!
            </h4>
            <form
              name="Popup modal new customer signup form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="Popup modal new customer signup form"
              />

              <label htmlFor="email" style={{ display: 'none' }}>
                Email address:
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required={true}
                className="form-control"
                onClick={e => {
                  // e.preventDefault()
                  gtag.event({
                    category: 'Submit form',
                    action: 'Click',
                    label: 'Footer newsletter sign up'
                  })
                }}
              />

              <button type="submit" value="Submit form" onClick={createCookie}>
                subscribe
                {/* <Icon name="arrow" color="white" /> */}
              </button>
            </form>
          </S.Modal>
        </Modal>
      )}
    </>
  )
}

export default NewCustomerModal
