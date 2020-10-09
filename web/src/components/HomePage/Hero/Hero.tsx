// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'
import Shine from '../../Shine'
import BuyButton from '../../BuyButton'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  return (
    <S.Hero pt={4}>
      <S.Decorator>
        <Shine />
      </S.Decorator>
      <div className="hero__inner">
        <Flex width={1} className="hero__figure">
          <Box width={[`27%`, `25%`, `20%`]} className="figure">
            <ImgMatch src="can.png" altText="eOn Hand Sanitizer can" />
          </Box>
        </Flex>

        <Box mt={['55%', '42%']} position="relative" style={{ zIndex: 9 }}>
          <h1>
            eOn is pro-grade hand sanitation made easy. One quick spray is all
            it takes to know your hands are clean.
          </h1>
        </Box>
        <div className="hero__features">
          <Flex width={[1 / 2, 1 / 2, 2 / 3]} flexWrap="wrap">
            <Text as="p" mr={5} mb={[2, 0]}>
              Effective on
              <br />
              <mark>99.99%</mark> of
              <br />
              common germs
            </Text>

            <Text as="p" color="primary" mr={5}>
              personal size
              <br />
              germ protection
              <br />
              on the go
            </Text>
          </Flex>

          <Flex
            width={[1 / 2, 1 / 2, 1 / 3]}
            mt={[5, 6, 0]}
            justifyContent="flex-end"
          >
            <BuyButton>Buy Now</BuyButton>
          </Flex>
        </div>
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
