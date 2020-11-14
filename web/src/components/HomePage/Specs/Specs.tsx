// Specs Section:

// ___________________________________________________________________

import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// Theme + ui
import { Box, Flex, Heading, Text } from '../../ui'

// Components
import Section from '../../Section'

// SVG
import Lock from '../../Lock'
import Rotation from '../../Rotation'
import Spray from '../../Spray'
import Hand from '../../Hand'
import CornCob from '../../CornCob'
import Atom from '../../Atom'
import Beaker from '../../Beaker'
import HandFemale from '../../HandFemale'
import CapTwist from '../../CapTwist'
import SprayHand from '../../SprayHand'
import HappyHands from '../../HappyHands'
import FeatureStack from '../../FeatureStack'
import AbstractSpray from '../../AbstractSpray'
import WeRefreshHands from '../../WeRefreshHands'

import sprayMist from './svg/spray.svg'
import hch from './svg/hch.svg'

// ___________________________________________________________________

const HowTo = () => (
  <>
    {data.map((item, idx) => (
      <Box className="figure" key={idx}>
        {item.figure}
        <Flex as="span" className="figure-spec">
          {item.spec}
        </Flex>
      </Box>
    ))}
  </>
)

const Specs = () => {
  return (
    <>
      <Section bg="background" pt={[7, 9, 10]}>
        <S.HowTo>
          <HowTo />
        </S.HowTo>
      </Section>
      <S.Specs bg="white" overflow="hidden">
        <Flex className="spec__block" flexDirection={['row', 'row-reverse']}>
          <Flex width={[1, 1 / 3, 1 / 2]} className="decorator">
            <Box
              width={['50px', '70px', '80px']}
              className="decorator--features"
            >
              <FeatureStack />
            </Box>
          </Flex>
          <Box width={[8 / 10, 2 / 3, 1 / 2]} pr={[5, 0]}>
            <Heading as="h3" mb={[4, 5]}>
              <Text as="span" color="primary">
                Works on contact;
              </Text>{' '}
              Immediate action against 99.99% of common germs.
            </Heading>
          </Box>
        </Flex>

        <Flex className="spec__block" flexDirection={['row', 'row-reverse']}>
          <Flex width={[1, 3 / 10, 4 / 10]} className="decorator">
            <Box
              width={['75px', '125px', '150px']}
              className="decorator--abstract"
            >
              <AbstractSpray />
            </Box>
          </Flex>
          <Box width={[1, 7 / 10, 6 / 10]} pr={[6, 0]}>
            <Heading as="h3" mb={[4, 5]}>
              Child-safe{' '}
              <span>
                <Lock />
              </span>{' '}
              , <span style={{ whiteSpace: 'nowrap' }}>zero-propellant,</span>{' '}
              continuous spray{' '}
              <span className="rotation">
                <Rotation />
              </span>{' '}
              action.
            </Heading>
          </Box>
        </Flex>

        <Flex className="spec__block" flexDirection={['row', 'row-reverse']}>
          <Flex width={[1, 3 / 10, 4 / 10]} className="decorator">
            <Box
              width={['200px', '300px', '375px']}
              className="decorator--spray"
            >
              <Box as="img" src={sprayMist} alt="spray mist" />
            </Box>
          </Flex>
          <Box width={[1, 7 / 10, 6 / 10]} pr={[6, 0]}>
            <Heading as="h3" mb={[4, 5]}>
              Fine, wide angle{' '}
              <span>
                <Spray />
              </span>{' '}
              mist covers hands in one quick spray{' '}
              <span>
                <Hand />
              </span>{' '}
              .
            </Heading>
          </Box>
        </Flex>

        <Flex className="spec__block">
          <Box width={[1, 7 / 10, 6 / 10]} pr={[5, 0]}>
            <Heading as="h3" mb={[4, 5]}>
              190 proof, plant-based{' '}
              <span>
                <CornCob />,
              </span>{' '}
              Food Chemical Codex approved, Ethyl Alcohol solution{' '}
              <span>
                <Atom />
              </span>{' '}
              .
            </Heading>
          </Box>

          <Flex width={[1, 3 / 10, 4 / 10]} className="decorator">
            <Box width={['175px', '200px', '225px']} className="decorator--hch">
              <Box as="img" src={hch} alt="spray mist" />
            </Box>
          </Flex>
        </Flex>

        <Flex className="spec__block">
          <Box width={[1, 7 / 10, 8 / 10]} pr={[5, 0]}>
            <Heading as="h3" mb={[4, 5]}>
              Lab tested, high performance{' '}
              <span>
                <Beaker />
              </span>{' '}
              formulation doesn’t dry or leave hands sticky{' '}
              <span>
                <HandFemale />
              </span>{' '}
              .
            </Heading>
          </Box>
        </Flex>
        <Flex width={1} mt={6} justifyContent="center">
          <Box width={['60%', '30%']}>
            <WeRefreshHands />
          </Box>
        </Flex>
      </S.Specs>
    </>
  )
}

export default Specs

// ___________________________________________________________________

const data = [
  {
    spec: 'TWIST to UNLOCK',
    figure: <CapTwist />
  },
  {
    spec: 'SPRAY LIGHTLY',
    figure: <SprayHand />
  },
  {
    spec: 'RUB until DRY',
    figure: <HappyHands />
  }
]
