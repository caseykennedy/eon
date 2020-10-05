// Specs Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'
import theme from '../../../../config/theme'

import { Grid, Cell } from 'styled-css-grid'

import Section from '../../Section'

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

// ___________________________________________________________________

type Props = {}

const HowTo = () => (
  <>
    {data.map((item, idx) => (
      <Cell className="figure" key={idx}>
        {item.figure}
        <Flex as="span">{item.spec}</Flex>
      </Cell>
    ))}
  </>
)

const Specs: React.FC<Props> = () => {
  return (
    <>
      <Section bg="background" pt={12} pb={10}>
        <S.HowTo
          columns={`repeat(auto-fit, minmax(280px, 1fr))`}
          gap={theme.space[7]}
        >
          <HowTo />
        </S.HowTo>
      </Section>
      <S.Specs bg="white">
        <Box width={[1, 8 / 10]}>
          <Heading as="h3" mb={4} className="text--xxl">
            Works on contact: Immediate action against bacteria, fungi, and
            viruses.
          </Heading>
          <Heading as="h3" mb={4} className="text--xxl">
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
          <Heading as="h3" mb={4} className="text--xxl">
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
          <Heading as="h3" mb={4} className="text--xxl">
            190 proof, plant-based,{' '}
            <span>
              <CornCob />
            </span>{' '}
            Food Chemical Codex approved, Ethyl Alcohol solution.{' '}
            <span>
              <Atom />
            </span>
          </Heading>
          <Heading as="h3" mb={4} className="text--xxl">
            Lab tested, high performance{' '}
            <span>
              <Beaker />
            </span>{' '}
            formulation doesn’t dry or leave hands sticky.{' '}
            <span>
              <HandFemale />
            </span>
          </Heading>
        </Box>
      </S.Specs>
    </>
  )
}

export default Specs

// ___________________________________________________________________

const defaultProps = {}

Specs.defaultProps = defaultProps

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
