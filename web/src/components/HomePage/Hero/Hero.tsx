// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import Button from '../../ui/Button'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'
import Shine from '../../Shine'
import TradeMarks from '../../Trademarks'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  return (
    <S.Hero pt={4}>
      <S.Decorator>
        <Shine />
      </S.Decorator>
      <div className="hero-inner">
        <Flex width={1} justifyContent="center">
          <Box
            margin="0 auto"
            width={[`27%`, `25%`, `20%`]}
            style={{
              position: 'fixed'
            }}
          >
            <ImgMatch src="can.png" altText="eOn Hand Sanitizer can" />
          </Box>
        </Flex>

        <Box
          mt={['55%', '40%']}
          position="relative"
          style={{ zIndex: 9 }}
        >
          <h1>
            eOn is professional-grade hand sanitation made easy. One quick spray
            is all it takes to know your hands are 100% clean.
          </h1>
        </Box>
        <Flex className="hero-inner__meta">
          <Flex width={[1 / 2, 1 / 2, 2 / 3]} flexWrap="wrap">
            <Text as="p" mr={5}>
              Effective on
              <br />
              99.99% of <br />
              common germs
            </Text>

            <Text as="p" color="primary" mr={5}>
              personal size
              <br />
              germ protection
              <br />
              on the go
            </Text>
            <Box mt={4}>
              <TradeMarks />
            </Box>
          </Flex>

          <Flex
            width={[1 / 2, 1 / 2, 1 / 3]}
            mt={[5, 6, 0]}
            justifyContent="flex-end"
          >
            <Button to="/">Buy Now</Button>
          </Flex>
        </Flex>
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
