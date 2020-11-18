// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import { Box, Flex, Text } from '../ui'
import { Input } from 'theme-ui'

// Components
import Icon from '../Icons'
import CanMulti from '../CanMulti'

// ___________________________________________________________________

const PreFoot = () => (
  <S.PreFoot>
    <Box className="prefoot-panel  prefoot-panel__newsletter">
      <Text as="p" color="primary">
        Sign up for updates and giveaways!
      </Text>
      <Box as="form" action="/">
        <label htmlFor="email" style={{ display: 'none' }}>
          Email address:
        </label>
        <Input
          placeholder="email here"
          type="email"
          className="form-control"
          id="email"
        />
        <button type="submit">
          <Icon name="arrow" color="white" />
        </button>
      </Box>
    </Box>
    <Link to={`/eon-multi-surface`} className="prefoot-panel  prefoot-panel__usa">
      <Box mb={4}>
        <CanMulti />
      </Box>
      <Text as="p" textAlign="center">
        Looking for eOn multi-surface disinfectant?
      </Text>
    </Link>
  </S.PreFoot>
)

const Terms = () => (
  <S.Terms>
    <p>
      <small>
        eOn® Advanced Hand Sanitizer is America’s #1 hand sanitizer, and kills
        99.99% of most common germs that can make you sick. We offer the
        germ-killing power of eOn® products in several different formats and
        dispensing options, so you can promote well-being throughout your
        facility – and your home.
      </small>
    </p>
    <p>
      <small>
        eOn® products are available in luxurious foam, refreshing gel,
        convenient spray and durable wipes. That means no matter where you are,
        you’re never far from hand hygiene.
      </small>
    </p>
  </S.Terms>
)

const Footer: React.FC = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <>
      <PreFoot />
      <Terms />
      <S.Footer as="footer">
        <Flex className="footer__links">
          <Link to={`/privacy`}>privacy</Link>
          <Link to={`/terms`}>terms</Link>
          <Link to={`/returns`}>returns</Link>
          <Flex
            as="a"
            className="footer__contact"
            href="mailto:hello@eonmist.com?subject=Contact from eonmist.com"
          >
            <small>Contact Us</small>
          </Flex>
        </Flex>
        <Flex className="footer__copyright">&copy;{getYear()} eOn Mist</Flex>
      </S.Footer>
    </>
  )
}

export default Footer
