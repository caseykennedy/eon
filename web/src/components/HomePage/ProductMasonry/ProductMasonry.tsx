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
import { Box, Flex, Text, Heading } from '../../ui'

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
    <S.HandSanitizer>
      <Box className="decorator">
        <Shine />
      </Box>

      <Flex className="panel__inner">
        <Box position="relative" style={{ zIndex: 9 }}>
          <Text className="text--base">{data.title}</Text>
        </Box>

        <Flex className="panel__figure">
          <Box width={1} className="figure">
            <ImgMatch src="eon-hero-3d.png" altText="eOn Hand Sanitizer can" />
          </Box>
        </Flex>

        <Flex className="panel__features">
          <Flex className="cta">
            <Link
              to={`/eon-continuous-spray-hand-sanitizer-80`}
              onClick={() => {
                gtag.event({
                  category: 'homepage masonry',
                  action: 'Click',
                  label: 'hand sanitizer - shop now'
                })
              }}
            >
              Shop now
              <Icon name="arrow" />
            </Link>
          </Flex>

          <Flex className="feature-set">
            <Heading
              as="h1"
              className="text--xl"
              mb={0}
              dangerouslySetInnerHTML={{ __html: data.headline }}
            />
          </Flex>
        </Flex>
      </Flex>
    </S.HandSanitizer>
  )
}

const MultiSurface = () => {
  return (
    <S.Disinfectant>
      <Box className="decorator">
        <img src={dropBolt} alt="eon bolt" />
      </Box>

      <Flex className="panel__inner">
        <Box position="relative" style={{ zIndex: 9 }}>
          <Text className="text--base">multi-surface</Text>
        </Box>

        {/* <Flex className="panel__figure  panel__figure--inline">
          <Box className="figure--small">
            <ImgMatch
              src="can-multi-surface-eon-mist.png"
              altText="eOn Hand Sanitizer can"
            />
          </Box>
        </Flex> */}

        <Flex className="panel__figure">
          <Box width={1} className="figure">
            <ImgMatch
              src="hero-multi-surface--wide.jpg"
              altText="eOn Hand Sanitizer can"
            />
          </Box>
        </Flex>

        <Flex className="panel__features">
          <Flex className="cta">
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
              Find in store
              <Icon name="arrow" />
            </Link>
          </Flex>

          <Flex className="feature-set">
            <Heading as="h2" fontSize={3}>
              Clean, disinfect and deodorize your environment, on the go.
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </S.Disinfectant>
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
  title: 'hand sanitizer',
  headline: 'Germ-free hands<br />in one quick mist.',
  featureA: 'Effective on<br /><mark>99.99%</mark> of<br />common germs',
  featureB: 'personal size<br />germ protection<br />on the go'
}
