// Specs Section:

// ___________________________________________________________________

import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// Theme + ui
import { Box, Flex, Heading } from '../../ui'

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

import SpraySystem from './svg/deco.svg'

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
      <Section bg="background" pt={[7, 9]}>
        <S.HowTo>
          <HowTo />
        </S.HowTo>
      </Section>
      <S.Specs bg="white">
        <Box width={[1, 8 / 10]}>
          <Heading as="h3" mb={[7, 5]} className="text--xxl">
            Works on contact: Immediate action against bacteria, fungi, and
            viruses.
          </Heading>
          <Heading as="h3" mb={[7, 5]} className="text--xxl">
            Child-safe{' '}
            <span>
              <Lock />
            </span>
            , zero-propellant, continuous spray{' '}
            <span>
              <Rotation />
            </span>{' '}
            actuator.
          </Heading>
          <Heading as="h3" mb={[7, 5]} className="text--xxl">
            Fine mist, wide angle{' '}
            <span>
              <Spray />
            </span>{' '}
            aerosol covers hands in one quick spray{' '}
            <span>
              <Hand />
            </span>
            .
          </Heading>
          <Heading as="h3" mb={[7, 5]} className="text--xxl">
            190 proof, plant-based{' '}
            <span>
              <CornCob />,
            </span>{' '}
            Food Chemical Codex approved, Ethyl Alcohol solution{' '}
            <span>
              <Atom />
            </span>
            .
          </Heading>
          <Heading as="h3" mb={[7, 5]} className="text--xxl">
            Lab tested, high performance{' '}
            <span>
              <Beaker />
            </span>{' '}
            formulation doesn’t dry or leave hands sticky{' '}
            <span>
              <HandFemale />
            </span>
            .
          </Heading>
          <Box width={theme.space[12]} mt={12}>
            <WeRefreshHands />
          </Box>
        </Box>
        <Flex className="deco-feature-icons">
          <Box width="60%">
            <FeatureStack />
          </Box>
          <Box width="100%" mt={7}>
            <AbstractSpray />
          </Box>
          <Box width="160%" mt={7}>
            <img src={SpraySystem} />
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
