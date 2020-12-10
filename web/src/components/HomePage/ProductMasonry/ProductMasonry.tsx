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

import PageTitle from '../../MultiSurfacePage/PageTitle'

// ___________________________________________________________________

const HandSanitizer = () => {
  return (
    <S.HandSanitizer>
      <S.Decorator>
        <Shine />
      </S.Decorator>

      <Flex className="panel__figure">
        <Box width={1} className="figure">
          <ImgMatch src="hero-handcan.png" altText="eOn Hand Sanitizer can" />
        </Box>
      </Flex>

      <Flex className="panel__inner">
        <Box position="relative" style={{ zIndex: 9 }}>
          <Text className="text--base">{data.title}</Text>
        </Box>

        <Flex className="panel__features">
          <Flex className="cta">
            <Link
              to={`/`}
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
    <S.HandSanitizer>
      <Flex className="panel__inner">
        <Box position="relative" style={{ zIndex: 9 }}>
          <Text className="text--base">multi-surface</Text>
        </Box>

        <Flex className="panel__figure  panel__figure--inline">
          <Box className="figure--small">
            <ImgMatch
              src="can-multi-surface-eon-mist.png"
              altText="eOn Hand Sanitizer can"
            />
          </Box>
        </Flex>

        <Flex className="panel__features">
          <Heading as="h4">
            Clean, disinfect and deodorize your environment, on the go.
          </Heading>

          <Flex className="cta">
            <Link
              to={`/`}
              onClick={() => {
                gtag.event({
                  category: 'homepage masonry',
                  action: 'Click',
                  label: 'hand sanitizer - shop now'
                })
              }}
            >
              Find in store
              <Icon name="arrow" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </S.HandSanitizer>
  )
}

const ProductMasonry = () => {
  return (
    <S.ProductMasonry>
      <Flex className="panel-group">
        <Link to={`/`} className="panel  panel--hand-sanitizer">
          <HandSanitizer />
        </Link>

        <Link to={`/`} className="panel  panel--multi-surface">
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
