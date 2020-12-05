// Page Title Component:

// ___________________________________________________________________

import React from 'react'
import { motion } from 'framer-motion'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

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
              as="h2"
              mb={[3, 4]}
              className="text--base"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <Text
              as="h1"
              className="text--md"
              dangerouslySetInnerHTML={{ __html: data.headline }}
            />
          </Box>
          <Flex width={[1]} className="hero__can">
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="decorator"
            >
              <img src={spray} alt="eOn multi surface disinfectant" />
            </motion.div>
            <Box className="figure">
              <ImgMatch
                src="can-multi-surface-eon-mist.png"
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
                  dangerouslySetInnerHTML={{ __html: data.featureA }}
                />
                <Text
                  as="p"
                  mt={6}
                  className="t--small"
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
  title: 'eOn multi-surface',
  headline: 'Eliminates<br />99.9% of bacteria<br />and viruses.',
  featureA: 'Clean, deodorize, and disinfect<br />your environment, on the go.',
  featureC:
    'Derived from naturally occuring salt minerals and water. Effective on <mark>99.9%</mark> of bacteria and viruses.',
  note: 'Available in stores only.'
}
