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
      <Section bg="background" pt={[7, 9]}>
        <S.HowTo>
          <HowTo />
        </S.HowTo>
      </Section>
      <S.Specs bg="white" overflow="hidden">
        <Flex className="spec__block">
          <Box width={[1, 8 / 10]}>
            <Heading as="h3" mb={[4, 5]} className="text--xxl">
              Works on contact: Immediate action against bacteria, fungi, and
              viruses.
            </Heading>
          </Box>
          <Flex width={[1, 2 / 10]} justifyContent="flex-end">
            <Box width={['15%', '30%']}>
              <FeatureStack />
            </Box>
          </Flex>
        </Flex>

        <Flex className="spec__block">
          <Box width={[1, 8 / 10]}>
            <Heading as="h3" mb={[4, 5]} className="text--xxl">
              Child-safe{' '}
              <span>
                <Lock />
              </span>{' '}
              , zero-propellant, continuous spray{' '}
              <span className="rotation">
                <Rotation />
              </span>{' '}
              action.
            </Heading>
          </Box>
          <Flex width={[1, 2 / 10]} justifyContent="flex-end">
            <Box width={['30%', '80%']}>
              <AbstractSpray />
            </Box>
          </Flex>
        </Flex>

        <Flex className="spec__block">
          <Box width={[1, 8 / 10]}>
            <Heading as="h3" mb={[4, 5]} className="text--xxl">
              Fine mist, wide angle{' '}
              <span>
                <Spray />
              </span>{' '}
              aerosol covers hands in one quick spray{' '}
              <span>
                <Hand />
              </span>{' '}
              .
            </Heading>
          </Box>
          <Flex width={[1, 2 / 10]} justifyContent="flex-end">
            <Box
              width={1}
              style={{
                position: 'relative',
                // right: `-${theme.space[10]}`
                maxHeight: '200px'
              }}
            >
              <Box
                as="img"
                width={['70%', '200%']}
                src={sprayMist}
                alt="spray mist"
              />
            </Box>
          </Flex>
        </Flex>

        <Flex className="spec__block">
          <Box width={[1, 8 / 10]}>
            <Heading as="h3" mb={[4, 5]} className="text--xxl">
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
          <Flex width={[1, 2 / 10]} justifyContent="flex-end">
            <Box
              width={1}
              style={{
                position: 'relative',
                top: `calc(${theme.space[7]} * 5)`,
                // right: `-${theme.space[10]}`,
                maxHeight: '200px'
              }}
            >
              <Box
                as="img"
                width={['75%', '150%']}
                src={hch}
                alt="spray mist"
              />
            </Box>
          </Flex>
        </Flex>

        <Flex className="spec__block">
          <Box width={[1, 8 / 10]}>
            <Heading as="h3" mb={[4, 5]} className="text--xxl">
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
          <Flex width={[1, 2 / 10]} justifyContent="flex-end">
            <Box width="30%"/>
          </Flex>
        </Flex>
        <Box width={theme.space[12]} mt={12}>
          <WeRefreshHands />
        </Box>
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
