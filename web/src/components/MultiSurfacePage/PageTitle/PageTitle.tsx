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

import spray from './assets/multi-spray.svg'
import dropBolt from './assets/drop-bolt.svg'

// ___________________________________________________________________

const PageTitle = () => {
  return (
    <>
      <S.PageTitle>
        <S.Decorator>
          <img src={dropBolt} alt="eOn multi-surface badge" />
        </S.Decorator>
        <Flex px={[4, 5, 6]} className="hero__inner">
          <Box>
            <Text
              as="h1"
              mb={[3, 4]}
              className="text--md"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <Heading as="h3" mb={0} dangerouslySetInnerHTML={{ __html: data.headline }} />
          </Box>
          <Flex width={[1]} className="hero__can">
            <Box width={1} className="figure">
              <ImgMatch
                src="hero-multi-surface-shadow.jpg"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
          </Flex>

          <Flex width={[1]} className="hero__message">
            <Box>
              {/* <Text
                as="h2"
                mb={[3, 4]}
                className="text--base"
                dangerouslySetInnerHTML={{ __html: data.title }}
              /> */}
            </Box>

            <Flex className="hero__features">
              <Box>
                <Text
                  as="p"
                  dangerouslySetInnerHTML={{ __html: data.note }}
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </S.PageTitle>
    </>
  )
}

export default PageTitle

const data = {
  title: 'multi-surface disinfectant',
  headline: 'Eliminates<br />99.9% of bacteria<br />and viruses.',
  tagline: 'Clean, disinfect, and deodorize<br />your environment, on the go.',
  featureC:
    'Derived from naturally occuring salt minerals and water. Effective on <mark>99.9%</mark> of bacteria and viruses.',
  note: 'Available in stores only.'
}
