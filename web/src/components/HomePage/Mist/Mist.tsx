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
import Video from '../../Video'

// ___________________________________________________________________

const VideoProps = {
  src: 'https://youtu.be/twqKOKxIfPo',
  title: 'Placeholder'
}

const How = () => {
  return (
    <S.Mist bg={theme.colors.babyblue}>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box flex={[1, 1, 3]} mb={[6, 6, 0]}>
          <Video {...VideoProps} />
        </Box>
        <Box flex={[1, 1, 2]} ml={[0, 0, 6]}>
          <Heading as="h4" mb={4}>
            No mess, just mist.
          </Heading>
          <Heading as="h2" className="text--xl">
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
