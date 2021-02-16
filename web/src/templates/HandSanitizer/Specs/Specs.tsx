// Specs Section:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import { Box, Flex, Heading, Text } from '../../../components/ui'
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Section from '../../../components/Section'

// SVG
import Lock from '../../../components/SVG/Lock'
import Rotation from '../../../components/SVG/Rotation'
import Spray from '../../../components/SVG/Spray'
import Hand from '../../../components/SVG/Hand'
import CornCob from '../../../components/SVG/CornCob'
import Atom from '../../../components/SVG/Atom'
import Beaker from '../../../components/SVG/Beaker'
import HandFemale from '../../../components/SVG/HandFemale'
import CapTwist from '../../../components/SVG/CapTwist'
import SprayHand from '../../../components/SVG/SprayHand'
import HappyHands from '../../../components/SVG/HappyHands'
import FeatureStack from '../../../components/SVG/FeatureStack'

// ___________________________________________________________________

const HowTo = () => (
  <>
    {data.map((item, idx) => (
      <Box className="figure" key={idx}>
        {item.figure}
        <Flex as="span" className="figure__spec">
          {item.spec}
        </Flex>
        <Text fontSize={2} className="figure__caption">
          {item.caption}
        </Text>
      </Box>
    ))}
  </>
)

const Specs = () => {
  return (
    <S.Gradient>
      <Section bg="transparent">
        <Text className="text--xl" textAlign="center" mb={5}>
          How to use
        </Text>
        <S.HowTo>
          <HowTo />
        </S.HowTo>
      </Section>
      <S.Specs overflow="hidden">
        <Box maxWidth={theme.maxWidth} margin={'0 auto'}>
          <Flex className="spec__block" flexDirection={['row', 'row-reverse']}>
            <Flex width={[1, 1 / 3, 1 / 3]} className="decorator">
              <Box
                width={['50px', '110px', '115px']}
                className="decorator--features"
              >
                <FeatureStack />
              </Box>
            </Flex>
            <Box width={[8 / 10, 2 / 3, 2 / 3]}>
              <Heading as="h3" className="text--xl" mb={[4, 5]}>
                Immediate action against 99.99% of common germs.
              </Heading>
            </Box>
          </Flex>

          <Flex className="spec__block">
            <Box width={[1, 7 / 10, 8 / 10]} pr={[5, 4, 11]}>
              <Heading as="h3" className="text--xl" mb={[4, 5]}>
                Lab tested{' '}
                <span>
                  <Beaker />
                </span>{' '}
                formulation doesn’t dry or leave hands sticky{' '}
                <span>
                  <HandFemale />
                </span>
                .
              </Heading>
            </Box>
          </Flex>

          <Flex className="spec__block">
            {/* <Flex width={[1, 3 / 10, 4 / 10]} className="decorator">
            <Box
              width={['75px', '125px', '150px']}
              className="decorator--abstract"
            >
              <AbstractSpray />
            </Box>
          </Flex> */}
            <Box width={[1, 7 / 10, 2 / 3]} pr={[6, 0]}>
              <Heading as="h3" className="text--xl" mb={[4, 5]}>
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

          <Flex className="spec__block">
            {/* <Flex width={[1, 3 / 10, 4 / 10]} className="decorator">
            <Box
              width={['200px', '300px', '375px']}
              className="decorator--spray"
            >
              <Box as="img" src={sprayMist} alt="spray mist" />
            </Box>
          </Flex> */}
            <Box width={[1, 7 / 10, 2 / 3]} pr={[6, 0]}>
              <Heading as="h3" className="text--xl" mb={[4, 5]}>
                Wide angle{' '}
                <span>
                  <Spray />
                </span>{' '}
                mist covers hands
                <span>
                  <Hand />
                </span>{' '}
                in one quick spray.
              </Heading>
            </Box>
          </Flex>

          <Flex className="spec__block" mt={[5, 0, 0]}>
            <Box width={[1, 7 / 10, 2 / 3]} pr={[2, 0, 7]}>
              <Heading as="h3" className="text--xl" mb={0}>
                190 proof, plant-based{' '}
                <span>
                  <CornCob />
                </span>{' '}
                80% Ethyl Alcohol solution{' '}
                <span>
                  <Atom />.
                </span>
              </Heading>
            </Box>

            {/* <Flex width={[1, 3 / 10, 4 / 10]} className="decorator">
            <Box width={['175px', '200px', '225px']} className="decorator--hch">
              <Box as="img" src={hch} alt="spray mist" />
            </Box>
          </Flex> */}
          </Flex>
        </Box>
      </S.Specs>
    </S.Gradient>
  )
}

export default Specs

// ___________________________________________________________________

const data = [
  {
    spec: 'TWIST to UNLOCK',
    figure: <CapTwist />,
    caption: 'Press down on cap end'
  },
  {
    spec: 'SPRAY LIGHTLY',
    figure: <SprayHand />,
    caption: '1—2 sec from 6—8" away'
  },
  {
    spec: 'RUB until DRY',
    figure: <HappyHands />,
    caption: "You're good to go"
  }
]
