// Page Title Component:

// ___________________________________________________________________

import React from 'react'
import { motion } from 'framer-motion'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text, Heading } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'
import Shine from '../../SVG/Shine'
import Stars from '../../../components/SVG/Stars'

import spray from './assets/multi-spray.svg'
import dropBolt from './assets/drop-bolt.svg'

// ___________________________________________________________________

const PageTitle = () => {
  return (
    <>
      <S.PageTitle>
        <S.Decorator>
          <img src={dropBolt} width="100%" alt="eOn multi-surface badge" />
        </S.Decorator>

        <Flex px={theme.gutter.axis} className="hero__inner">
          <Flex className="hero__message">
            <Box>
              <Text
                as="h1"
                className="text--md"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />

              <div className="rating">
                <Stars />
                <span>( 7 ratings )</span>
              </div>

              <Heading
                as="h3"
                dangerouslySetInnerHTML={{ __html: data.headline }}
              />
            </Box>

            <Box>
              <Text as="p">
                Ideal for use on the go, in restaurants, schools, offices,
                retail, kitchens, etc. Leaves no residue. No wiping required.
              </Text>
              <Text as="p">Learn more →</Text>
            </Box>
          </Flex>

          <Flex width={[1]} className="hero__can">
            <Box width={1} className="figure">
              <ImgMatch
                src="hero-multi-surface-shadow-fresh.jpg"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
          </Flex>

          <Flex className="hero__details">
            <Text
              as="p"
              color="tertiary"
              dangerouslySetInnerHTML={{ __html: data.note }}
            />
            <S.Button>
              Find in-store <span>$4.49</span>
            </S.Button>
          </Flex>
        </Flex>
      </S.PageTitle>
    </>
  )
}

export default PageTitle

const data = {
  title: 'eOn multi-surface disinfectant',
  headline: 'Eliminates<br />99.9% of bacteria<br />and viruses.',
  statement:
    'Clean, disinfect, and deodorize<br />your environment, on the go.',
  note: 'Available in stores only.',
  tagline: 'For everyone.'
}
