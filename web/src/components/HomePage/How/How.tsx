// How Section:

// ___________________________________________________________________

import React from 'react'
import { Parallax } from 'react-scroll-parallax'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'

// Components
import ImgMatch from '../../ImgMatch'
import SymbolBadge from '../../SymbolBadge'
import Germs from '../../Germs'
import Alcohol from '../../Alcohol'

// ___________________________________________________________________

type Props = {}

const How: React.FC<Props> = () => {
  return (
    <S.How>
      <Flex flexWrap="wrap" alignItems="center">
        <Box width={[1, 4 / 10, 4 / 10]} pr={[4, 6, '14%']}>
          <Flex mx={['10%', 0, 0]} className="how__figure">
            <Box width={1}>
              <ImgMatch
                src="hand-can.png"
                altText="Hand holding eOn Hand Sanitizer can."
              />
            </Box>
          </Flex>

          <Flex className="how__decorators">
            <Box className="icon  icon__germs">
              <Germs />
            </Box>
            <Box className="icon  icon__refresh">
              <SymbolBadge />
            </Box>
            <Box className="icon  icon__alcohol">
              <Alcohol />
            </Box>
          </Flex>
        </Box>

        <Box width={[1, 6 / 10, 6 / 10]}>
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
