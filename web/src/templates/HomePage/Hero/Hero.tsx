// Hero Component:

// ___________________________________________________________________

import React from 'react'

// utils
import * as gtag from '../../../utils/gtag'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text, Heading } from '../../../components/ui'

// Compoonents
import Icon from '../../../components/Icons'
import ImgMatch from '../../../components/ImgMatch'
import Shine from '../../../components/SVG/Shine'
import dropBolt from './assets/drop-bolt.svg'

// ___________________________________________________________________

const HandSanitizer = () => {
  return (
    <Flex width={[1, 1, 2 / 3]} className="card billboard">
      <Box
        as="a"
        href={data.hand.slug}
        onClick={() => {
          gtag.event({
            category: 'homepage masonry',
            action: 'Click',
            label: 'hand sanitizer - card'
          })
        }}
        className="link"
      >
        <Box className="decorator">
          <Shine />
        </Box>

        <Flex className="card__inner">
          <Box className="card__tagline">
            <Text
              className="statement  text--base"
              dangerouslySetInnerHTML={{ __html: data.hand.title }}
            />
          </Box>

          <Flex className="card__figure">
            <Box className="figure">
              <ImgMatch
                src="eon-hero-3d.jpg"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
          </Flex>

          <Box className="card__message">
            <Heading
              as="h3"
              mb={1}
              dangerouslySetInnerHTML={{ __html: data.hand.tagline }}
            />

            <div className="btn">
              {data.hand.cta}
              <Icon name="arrow" />
            </div>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

const MultiSurface = () => {
  const BoltBadge = () => <img src={dropBolt} width="100%" alt="eon bolt" />
  return (
    <Flex width={[1, 1, 1 / 3]} className="card sideboard">
      <Box
        as="a"
        href={data.multi.slug}
        onClick={() => {
          gtag.event({
            category: 'homepage masonry',
            action: 'Click',
            label: 'multi-surface disinfectant - card'
          })
        }}
        className="link"
      >
        <Box className="decorator  decorator--multi">
          <BoltBadge />
        </Box>

        <Flex className="card__inner">
          <Box className="card__tagline">
            <Text
              as="h1"
              className="statement  text--base"
              dangerouslySetInnerHTML={{ __html: data.multi.title }}
            />
          </Box>

          <Flex className="card__figure">
            <Box className="figure">
              <ImgMatch
                src="hero-multi-surface--wide.jpg"
                altText="eOn multi-surface disinfectant can"
              />
            </Box>
          </Flex>

          <Box className="card__message">
            <Heading
              as="h3"
              mb={1}
              dangerouslySetInnerHTML={{ __html: data.multi.tagline }}
            />

            <div className="btn">
              {data.multi.cta}
              <Icon name="arrow" />
            </div>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

const Hero = () => {
  return (
    <S.Hero>
      <HandSanitizer />
      <MultiSurface />
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const data = {
  hand: {
    title: 'eOn hand sanitizer',
    tagline: 'Germ-free hands<br />in one quick mist.',
    cta: 'Shop now',
    slug: '/products/eon-continuous-spray-hand-sanitizer-80'
  },
  multi: {
    title: 'eOn multi-surface disinfectant',
    tagline: 'Clean, disinfect and <br />deodorize—on the go.',
    cta: 'Find in store',
    slug: '/products/eon-multi-surface-disinfectant'
  }
}
