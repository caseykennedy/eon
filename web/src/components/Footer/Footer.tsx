// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link, withPrefix } from 'gatsby'

// utils
import * as gtag from '../../utils/gtag'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import { Input } from 'theme-ui'

// Components
import Icon from '../Icons'
import CanMulti from '../SVG/CanMulti'
import CanHand from '../SVG/CanHand'
import SocialLinks from '../SocialLinks'

// ___________________________________________________________________

const PreFoot = () => {
  const isBrowser = typeof window !== 'undefined'
  const isMultiPage =
    isBrowser &&
    location.pathname === withPrefix('/products/eon-multi-surface-disinfectant')
  return (
    <S.PreFoot>
      <Box className="prefoot-panel  prefoot-panel__newsletter">
        <Text as="p" mb={5}>
          Sign up for exclusive offers, spam free.
        </Text>
        <Box
          as="form"
          name="eOn Newsletter Signup Form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="form-name"
            value="eOn Newsletter Signup Form"
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
          />

          <button
            type="submit"
            value="Submit form"
            onClick={() => {
              gtag.event({
                category: 'Submit form',
                action: 'Click',
                label: 'Footer newsletter sign up'
              })
            }}
          >
            submit
          </button>
        </Box>
      </Box>
      {!isMultiPage ? (
        <Link
          to={`/products/eon-multi-surface-disinfectant`}
          className="prefoot-panel  prefoot-panel__cta"
          onClick={() => {
            gtag.event({
              category: 'Footer eon callout',
              action: 'Click',
              label: 'eon multi surface'
            })
          }}
        >
          <Box mb={4}>
            <CanMulti />
          </Box>
          <Text as="p" textAlign="center">
            eOn mist&trade; multi-surface disinfectant{' '}
            <span>
              <Icon name="arrow" />
            </span>
          </Text>
        </Link>
      ) : (
        <Link
          to={`/products/eon-continuous-spray-hand-sanitizer-80`}
          className="prefoot-panel  prefoot-panel__cta  prefoot-panel__cta--hand-sanitizer"
          onClick={() => {
            gtag.event({
              category: 'Footer eon callout',
              action: 'Click',
              label: 'eon ethyl alcohol'
            })
          }}
        >
          <Box mb={4}>
            <CanHand />
          </Box>
          <Text as="p" textAlign="center">
            eOn mist™ hand sanitizer{' '}
            <span>
              <Icon name="arrow" />
            </span>
          </Text>
        </Link>
      )}
    </S.PreFoot>
  )
}

const Footer: React.FC = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <>
      <SocialLinks />
      <PreFoot />
      <S.Footer as="footer">
        <div className="footer__links">
          <Flex as="nav">
            <Link to={`/privacy`} className="link">
              privacy
            </Link>
            <Link to={`/terms`} className="link">
              terms
            </Link>
            <Link to={`/returns`} className="link">
              returns
            </Link>
            <Link to={`/news`} className="link">
              news
            </Link>
          </Flex>
          <a
            className="footer__button"
            href="mailto:hello@eonmist.com?subject=Contact from eonmist.com"
            onClick={() => {
              gtag.event({
                category: 'footer links',
                action: 'Click',
                label: 'footer contact'
              })
            }}
          >
            Contact us
          </a>
        </div>
        <Flex className="footer__copyright">
          &copy;{getYear()} eOn mist&trade;
        </Flex>
      </S.Footer>
    </>
  )
}

export default Footer
