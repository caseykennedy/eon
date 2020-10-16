// Retailers Section:

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

const Retailers: React.FC<Props> = () => {
  return (
    <S.Retailers bg="white" border={true}>
      <Heading as="h3">retailers</Heading>
      <ImgMatch src="retailers.png" altText="Fine retailers" />
    </S.Retailers>
  )
}

export default Retailers

// ___________________________________________________________________

const defaultProps = {}

Retailers.defaultProps = defaultProps
