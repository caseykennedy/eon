// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link, withPrefix } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import { Input } from 'theme-ui'

// Components
import Icon from '../Icons'
import CanMulti from '../SVG/CanMulti'
import SocialLinks from '../SocialLinks'

// ___________________________________________________________________

const PreFoot = () => {
  const isBrowser = typeof window !== 'undefined'
  const isMultiPage =
    isBrowser && location.pathname === withPrefix('/eon-multi-surface')
  return (
    <S.PreFoot>
      <Box className="prefoot-panel  prefoot-panel__newsletter">
        <Text as="p" color="primary">
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
            onClick={e => {
              // e.preventDefault()
              trackCustomEvent({
                category: 'Submit form',
                action: 'Click',
                label: 'Footer newsletter sign up'
              })
            }}
          />

          <button type="submit" value="Submit form">
            <Icon name="arrow" color="white" />
          </button>
        </Box>
      </Box>
      {!isMultiPage ? (
        <Link
          to={`/eon-multi-surface`}
          className="prefoot-panel  prefoot-panel__cta"
          onClick={e => {
            // e.preventDefault()
            trackCustomEvent({
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
          to={`/`}
          className="prefoot-panel  prefoot-panel__cta prefoot-panel__cta--hand-sanitizer"
          onClick={e => {
            // e.preventDefault()
            trackCustomEvent({
              category: 'Footer eon callout',
              action: 'Click',
              label: 'eon ethyl alcohol'
            })
          }}
        >
          <Box mb={4}>
            <CanMulti />
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
        <Flex className="footer__links" flexWrap="wrap">
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
            <a
              href="mailto:hello@eonmist.com?subject=Contact from eonmist.com"
              className="link"
            >
              contact
            </a>
          </Flex>
          <Link
            className="footer__button"
            to={`/eon-multi-surface`}
            onClick={e => {
              // e.preventDefault()
              trackCustomEvent({
                category: 'Store locator button',
                action: 'Click',
                label: 'footer'
              })
            }}
          >
            Store locator
          </Link>
        </Flex>
        <Flex className="footer__copyright">
          &copy;{getYear()} eOn mist&trade;
        </Flex>
      </S.Footer>
    </>
  )
}

export default Footer
