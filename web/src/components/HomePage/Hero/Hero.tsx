// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'
import Shine from '../../Shine'
import CanSpray from '../../CanSpray'
import AddToCart from '../../AddToCart'
import Trademarks from '../../Trademarks'

// ___________________________________________________________________

const Hero = () => {
  return (
    <>
      <S.Hero py={[4, 5]}>
        <S.Decorator>
          <Shine />
        </S.Decorator>

        <Flex className="hero__figure">
          <Box position="relative">
            <Box
              ml={[0, 0, 5]}
              mr={[5, 6, 7]}
              width={[
                `calc(${theme.space[7]} * 2.25)`,
                `calc(${theme.space[7]} * 3)`,
                `calc(${theme.space[9]} * 2)`
              ]}
              className="figure"
            >
              <ImgMatch
                src="hero-handcan.png"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
            <Box className="spray">
              <CanSpray />
            </Box>
          </Box>
        </Flex>

        <Flex px={theme.gutter.axis} width={1} className="hero__inner">
          <Box position="relative" style={{ zIndex: 9 }}>
            <Text as="h4" my={[3, 4]}>
              eOn makes it simple.
            </Text>
            <h1 className="text--xl">
              Pro-grade
              <br />
              hand sanitation
              <br />
              for everyone.
            </h1>
          </Box>

          <Flex
            className="hero__features"
            flexDirection={['row', 'row-reverse']}
          >
            <Flex width={[1, 1 / 2, 1 / 3]} justifyContent="flex-end">
              <AddToCart />
            </Flex>

            <Flex width={[1, 1 / 2, 2 / 3]} mt={[4, 0, 0]}>
              <Text as="p" mr={5} mb={0}>
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
          </Flex>
        </Flex>
      </S.Hero>
      <Trademarks />
    </>
  )
}

export default Hero
