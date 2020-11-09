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

import borderFrame from './assets/border.svg'

// ___________________________________________________________________

const VideoProps = {
  src: 'https://www.youtube.com/embed/twqKOKxIfPo',
  title: 'Placeholder'
}

const How = () => {
  return (
    <S.Mist bg={theme.colors.babyblue} pt={[6, 7, 9]} pb={[6, 7, 9]}>
      <Flex
        flexDirection={['column', 'column', 'row']}
        maxWidth={theme.maxWidth}
        margin={'0 auto'}
      >
        <Box flex={[1, 1, 4]} mb={[6, 6, 0]} pr={[4, 12, 7]} pl={[4, 0, 0]}>
          <Video {...VideoProps} />

          <Text
            bg="white"
            fontSize={2}
            fontWeight={600}
            p={[2, 3, 4]}
            mt={4}
            mx={[4]}
            textAlign="center"
            style={{ border: theme.border, borderRadius: theme.borderRadius }}
          >
            Maximum strength 80% ethyl alcohol continuous spray action.
          </Text>
          {/* <Box width={1} mt={4}>
            <img src={borderFrame} alt="frame" />
          </Box> */}
        </Box>
        <Box flex={[1, 1, 4]}>
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
