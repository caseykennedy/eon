// Mist Section:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'

// Components
import ImgMatch from '../../../components/ImgMatch'
import Gauge from '../../../components/SVG/Gauge'
import Germs from '../../../components/SVG/Germs'
import Alcohol from '../../../components/SVG/Alcohol'
import Video from '../../../components/Video'

import borderFrame from './assets/border.svg'

// utils
import * as gtag from '../../../utils/gtag'

// ___________________________________________________________________

const VideoProps = {
  src: 'https://www.youtube.com/embed/D1PTc5BshA4',
  title: 'Placeholder'
}

const Mist = () => {
  return (
    <S.Mist pt={[5, 7]}>
      <Flex
        flexDirection={['column', 'column', 'row']}
        maxWidth={theme.maxWidth}
        margin={'0 auto'}
      >
        <Box
          flex={[1, 1, 4]}
          mb={[6, 6, 0]}
          pr={[4, 7, 7]}
          pl={[4, 7, 0]}
          className="mist__video"
          onClick={() => {
            gtag.event({
              category: 'Youtube embed',
              action: 'Click',
              label: 'No mess, just mist'
            })
          }}
        >
          <Video {...VideoProps} />

          <Flex
            justifyContent="center"
            mt={4}
            style={{ position: 'relative', zIndex: 9 }}
          >
            <Flex
              // bg="white"
              alignItems="center"
              py={2}
              px={3}
              mx="auto"
              // style={{ border: theme.border, borderRadius: theme.borderRadius }}
            >
              <Box
                width={[
                  theme.space[5],
                  theme.space[5],
                  `calc(${theme.space[5]} * 1.15)`
                ]}
                mr={3}
              >
                <Gauge />
              </Box>
              <Text fontSize={[`calc(${theme.fontSizes[1]} / 1.25)`, 2, 2]}>
                <strong>Maximum strength solution</strong>
                <br />
                Food Chemicals Codex approved
              </Text>
            </Flex>
          </Flex>
          <Box width={1} mt={4}>
            <img src={borderFrame} width="100%" alt="frame" />
          </Box>
        </Box>
        <Box flex={[1, 1, 4]}>
          <Heading mb={4} className="text--md">
            No messy gels, just mist
          </Heading>
          <Heading as="h2" className="text--xl">
            eOn mist's hand sanitizer packs high performance germ fighting power
            into easy, effective, everyday protection.
          </Heading>
        </Box>
      </Flex>
    </S.Mist>
  )
}

export default Mist

// ___________________________________________________________________

const defaultProps = {}

Mist.defaultProps = defaultProps
