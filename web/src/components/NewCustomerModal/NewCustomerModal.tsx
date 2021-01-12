// New Customer Modal:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

// utils
import * as gtag from '../../utils/gtag'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text } from '../ui'
import { Input } from 'theme-ui'

// Components
import Modal from '../Modal'

import signupDecorator from './assets/signup.svg'

// ___________________________________________________________________

const NewCustomerModal = () => {
  const [active, setActive] = useState(false)
  const [cookie, setCookie, removeCookie] = useCookies(['new_user_modal'])

  const createCookie = () => {
    setCookie('new_user_modal', 'true', { path: '/', maxAge: 333333333 })
    gtag.event({
      category: 'Submit form',
      action: 'Click',
      label: 'Popup modal new customer signup form'
    })
  }

  useEffect(() => {
    !cookie.new_user_modal &&
      setTimeout(() => {
        setActive(true)
      }, 8000)
  }, [cookie])
  return (
    <>
      {active && (
        <Modal active={true}>
          <S.Modal>
            <Box mb={0} className="text--lg">
              Sign up to get
              <br />
              <strong>10% off</strong> your
              <br />
              first order.
            </Box>

            <div className="decorator">
              <span>
                <img src={signupDecorator}  width="100%" alt="eOn new customer signup" />
              </span>
            </div>

            <p>
              <strong>Hey!</strong> We're talking exclusive offers and
              announcements—<em>never spam</em>.
            </p>

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
                placeholder="enter your email"
                required={true}
                className="form-control"
              />

              <button type="submit" value="Submit form" onClick={createCookie}>
                subscribe
              </button>
            </form>
          </S.Modal>
        </Modal>
      )}
    </>
  )
}

export default NewCustomerModal
