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
      <Text as="p" mb={[5, 7]}>
        eOn sanitizing mist&trade; brand
        <br />
        is available at these fine retailers:
      </Text>
      <ImgMatch src="retailers.png" altText="Fine retailers" />
    </S.Retailers>
  )
}

export default Retailers

// ___________________________________________________________________

const defaultProps = {}

Retailers.defaultProps = defaultProps
