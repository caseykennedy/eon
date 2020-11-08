// How Section:

// ___________________________________________________________________

import React from 'react'

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
    <S.Mist bg={theme.colors.babyblue}>
      <Flex flexWrap="wrap" alignItems="center">
        <Box width={[1, 6 / 10, 6 / 10]}>
          <Heading as="h4" mb={5}>
            No mess, just mist.
          </Heading>
          <Heading as="h2" className="text--xxl">
            eOn mist's hand sanitizer packs high performance germ fighting power
            into easy, effective, zero mess protection.
          </Heading>
        </Box>
      </Flex>
    </S.Mist>
  )
}

export default How

// ___________________________________________________________________

const defaultProps = {}

How.defaultProps = defaultProps
