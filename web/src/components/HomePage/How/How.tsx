// How Section:

// ___________________________________________________________________

import React from 'react'
import { Parallax } from 'react-scroll-parallax'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'

// Components
import ImgMatch from '../../ImgMatch'
import SymbolBadge from '../../SymbolBadge'
import Germs from '../../Germs'

// ___________________________________________________________________

type Props = {}

const How: React.FC<Props> = () => {
  return (
    <S.How>
      <Flex alignItems="center" flexWrap="wrap">
        <Box
          width={[1, 1, 1 / 2]}
          position="relative"
          pr={[7, 13, 10]}
          style={{ maxWidth: '600px' }}
        >
          <ImgMatch
            src="hand-can.png"
            altText="Hand holding eOn Hand Sanitizer can."
          />

          <Flex position="relative" mt={-10} ml={-5}>
            <Box width={[`150px`]}>
              <S.ParallaxBox y={[-110, -180]}>
                <Germs />
              </S.ParallaxBox>
            </Box>
            <Box
              width={[`150px`]}
              position="relative"
              style={{ left: '-40px' }}
            >
              <S.ParallaxBox y={[-40, -180]}>
                <SymbolBadge />
              </S.ParallaxBox>
            </Box>
          </Flex>
        </Box>
        <Box width={[1, 8 / 10, 1 / 2]}>
          <Heading as="h4" mb={5}>
            No mess, just mist
          </Heading>
          <Heading as="h2" className="text--xxl">
            eOn hand sanitizer packs high performance germ fighting power into
            easy, effective, zero mess protection.
          </Heading>
        </Box>
      </Flex>
    </S.How>
  )
}

export default How

// ___________________________________________________________________

const defaultProps = {}

How.defaultProps = defaultProps
