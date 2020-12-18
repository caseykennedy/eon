// Product Masonry Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

// utils
import * as gtag from '../../../utils/gtag'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text, Heading, Button } from '../../ui'

// Compoonents
import Icon from '../../Icons'
import ImgMatch from '../../ImgMatch'
import Shine from '../../SVG/Shine'
import CanSpray from '../../SVG/CanSpray'
import AddToCart from '../../AddToCart'
import Trademarks from '../../Trademarks'

import dropBolt from './assets/drop-bolt.svg'

// ___________________________________________________________________

const HandSanitizer = () => {
  return (
    <S.HeroPanel>
      <Box className="decorator">
        <Shine />
      </Box>

      <Flex className="panel__inner">
        <Box className="panel__tagline">
          <Text
            className="statement  text--base"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </Box>

        <Flex className="panel__figure">
          <Box width={1} className="figure">
            <ImgMatch src="eon-hero-3d.jpg" altText="eOn Hand Sanitizer can" />
          </Box>
        </Flex>

        <Box className="panel__message">
          <Heading
            as="h3"
            mb={1}
            dangerouslySetInnerHTML={{ __html: data.headline }}
          />

          <Link
            to={`/products/eon-continuous-spray-hand-sanitizer-80`}
            onClick={() => {
              gtag.event({
                category: 'homepage masonry',
                action: 'Click',
                label: 'hand sanitizer - shop now'
              })
            }}
          >
            <a className="btn">
              Shop now
              <Icon name="arrow" />
            </a>
          </Link>
        </Box>
      </Flex>
    </S.HeroPanel>
  )
}

const MultiSurface = () => {
  return (
    <S.HeroPanel>
      <Box className="decorator  decorator--multi">
        <img src={dropBolt} alt="eon bolt" />
      </Box>

      <Flex className="panel__inner">
        <Box className="panel__tagline">
          <Text className="statement  text--base">
            Clean, disinfect and
            <br />
            deodorize—on the go.
          </Text>
        </Box>

        <Flex className="panel__figure">
          <Box width={1} className="figure">
            <ImgMatch
              src="hero-multi-surface--wide.jpg"
              altText="eOn multi-surface disinfectant can"
            />
          </Box>
        </Flex>

        <Box className="panel__message">
          <Heading as="h3" mb={1}>
            multi-surface disinfectant
          </Heading>
          <Link
            to={`/eon-multi-surface`}
            onClick={() => {
              gtag.event({
                category: 'homepage masonry',
                action: 'Click',
                label: 'multi-surface disinfectant - find in store'
              })
            }}
          >
            <a className="btn">
              Find in store
              <Icon name="arrow" />
            </a>
          </Link>
        </Box>
      </Flex>
    </S.HeroPanel>
  )
}

const ProductMasonry = () => {
  return (
    <S.ProductMasonry>
      <Flex className="panel-group">
        <Link
          to={`/products/eon-continuous-spray-hand-sanitizer-80`}
          onClick={() => {
            gtag.event({
              category: 'homepage masonry',
              action: 'Click',
              label: 'hand sanitizer - panel'
            })
          }}
          className="panel  panel--hand-sanitizer"
        >
          <HandSanitizer />
        </Link>

        <Link
          to={`/eon-multi-surface`}
          onClick={() => {
            gtag.event({
              category: 'homepage masonry',
              action: 'Click',
              label: 'multi-surface disinfectant - panel'
            })
          }}
          className="panel  panel--multi-surface"
        >
          <MultiSurface />
        </Link>
      </Flex>
    </S.ProductMasonry>
  )
}

export default ProductMasonry

// ___________________________________________________________________

const data = {
  title: 'Germ-free hands<br />in one quick mist.',
  headline: 'eOn hand sanitizer',
  featureA: 'Effective on<br /><mark>99.99%</mark> of<br />common germs',
  featureB: 'personal size<br />germ protection<br />on the go'
}
