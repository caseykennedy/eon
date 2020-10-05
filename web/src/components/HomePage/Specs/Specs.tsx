// Specs Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'
import theme from '../../../../config/theme'

import Lock from '../../Lock'
import Rotation from '../../Rotation'
import Spray from '../../Spray'
import Hand from '../../Hand'
import CornCob from '../../CornCob'
import Atom from '../../Atom'
import Beaker from '../../Beaker'
import HandFemale from '../../HandFemale'

// ___________________________________________________________________

type Props = {}

const Specs: React.FC<Props> = () => {
  return (
    <S.Specs bg="white">
      <Box width={[1, 2 / 3, 1 / 2]}>
        <Heading as="h3" mb={4}>
          Works on contact: Immediate action against bacteria, fungi, and
          viruses.
        </Heading>
        <Heading as="h3" mb={4}>
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
        <Heading as="h3" mb={4}>
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
        <Heading as="h3" mb={4}>
          190 proof, plant-based,{' '}
          <span>
            <CornCob />
          </span>{' '}
          Food Chemical Codex approved, Ethyl Alcohol solution.{' '}
          <span>
            <Atom />
          </span>
        </Heading>
        <Heading as="h3" mb={4}>
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
  )
}

export default Specs

// ___________________________________________________________________

const defaultProps = {}

Specs.defaultProps = defaultProps

const data = [
  {
    spec:
      'Works on contact: Immediate action against bacteria, fungi, and viruses.',
    figure: 'img.jpg'
  },
  {
    spec: 'Child-safe, zero-propellant, continuous spray actuator.',
    figure: ''
  },
  {
    spec: 'Fine mist, wide angle aerosol covers hands in one quick spray.',
    figure: ''
  },
  {
    spec:
      '190 proof, plant-based, Food Chemical Codex approved, Ethyl Alcohol solution.',
    figure: ''
  },
  {
    spec:
      'Lab tested, high performance formulation doesn’t dry or leave hands sticky.',
    figure: ''
  }
]
