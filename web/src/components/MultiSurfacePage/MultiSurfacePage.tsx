// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'
import Iframe from 'react-iframe'

// Theme
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from '../ui'

// Sections
import PageTitle from './PageTitle'
import Trademarks from './Trademarks'

// Components
import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Retailers from '../Retailers'
import StoreLocator from '../StoreLocator'
import Reviews from '../../templates/HandSanitizer/Reviews'

import hclMark from './assets/hocl.svg'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <PageTitle />

      <Section border={true}>
        <StoreLocator />
      </Section>

      <Trademarks />

      <Section maxWidth={theme.maxWidth}>
        <Flex
          flexWrap="wrap"
          flexDirection={['column', 'row-reverse', 'row-reverse']}
        >
          <Box width="100%" flex={1} pl={[0, 11, 11]} pr={[12, 0, 0]}>
            <img src={hclMark} width="100%" alt="HOCl" />
          </Box>

          <Box flex={2} width={[1, 1 / 2]}>
            <Text as="h4">Hypochlorous Acid (HOCl)</Text>
            <Heading as="h3" color={theme.colors.primary}>
              eOn is an EPA registered (List N) personal protection disinfectant
              which rapidly neutralizes transmissable pathogens.
            </Heading>

            <Text as="p" className="text--md">
              For general, nursery, clinic, food, retail, athletic or industrial
              facility use. On an airplane, at a hotel, or at the grocery
              store—make it eOn, on the go disinfection.
            </Text>
          </Box>
        </Flex>
        <Flex
          width={[1, 1, 2 / 3]}
          flexDirection={['column', 'row', 'row']}
          flexWrap="wrap"
          // alignItems="flex-start"
          mt={[6, 6, 7]}
        >
          <Box
            flex={1}
            width={1}
            bg={theme.colors.black}
            color={theme.colors.white}
            p={[4]}
            mr={[0, 4, 4]}
            style={{
              borderRadius: theme.borderRadius
            }}
          >
            <Text as="p">
              Continuous mist, ready to spray broad spectrum disinfectant.
            </Text>
          </Box>
          <Box
            flex={1}
            width={1}
            // bg={theme.colors.lightgray}
            p={[4]}
            mt={[4, 0, 0]}
            style={{
              position: 'relative',
              // top: theme.space[4],
              border: theme.border,
              borderRadius: theme.borderRadius
            }}
          >
            <Text as="p">
              Derived from naturally occurring salt minerals and water.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section maxWidth={theme.maxWidth}>
        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          flexWrap="wrap"
          mb={5}
        >
          <Box flex={3}>
            <Text as="h3" className="text--xl">
              Cleans stains, dirt, fingerprints, food residue, grease, mold,
              soil, pet odor, rust, and more. Designed for use on a variety of
              surfaces—from porcelain to glass—plastic, cloth, sponges, dishes,
              pots, utensils, sinks, coolers, counter tops, desk tops, tables,
              shelves, appliances, door knobs, faucets and more.{' '}
            </Text>
          </Box>
        </Flex>

        <Text as="p" className="text--lg">
          Ideal for use on the go, in restaurants, schools, colleges, offices,
          retail, industrial, commercial facilities, recreational facilities,
          kitchens, playgrounds, autos, and homes. Leaves no residue. No wiping
          required.{' '}
        </Text>

        <Text as="p" className="text--lg">
          The convenient way to disinfect.
        </Text>

        <Flex
          bg={theme.colors.primary}
          color="white"
          flexDirection={['column', 'row', 'row']}
          alignItems="center"
          mt={7}
          p={[4, 6]}
          width={1}
          style={{
            borderRadius: theme.borderRadius
          }}
        >
          <Flex flex={1}>
            <Box width={1}>
              <Box as="ul" mb={0}>
                <li>
                  This product was tested for efficacy standards for hospital
                  disinfection using AOAC testing methods.
                </li>
                <li>Meets OSHA[s] Bloodborne Pathogen Guidelines</li>
                <li>One step germicide</li>
                <li>Non-greasy formula</li>
                <li>Contains no phosphates</li>
              </Box>
            </Box>
          </Flex>

          <Flex
            flex={2}
            flexDirection={['column', 'row', 'row']}
            mt={[6, 0]}
            ml={[0, 7]}
            width={1}
          >
            <Text as="p" mb={0} className="t--small">
              <strong>Active Ingredient:</strong>
              <br />
              Hypochlorous Acid..............0.046%
              <br />
              <strong>Other Ingredients:</strong>...........99.954%
              <br />
              <strong>Total:</strong>
              .......................................100.000%
            </Text>
            <Text as="p" fontWeight={500} mt={[4, 0, 0]} ml={[0, 6, 7]}>
              Contains
              <br />
              500ppm Free
              <br />
              Available Chlorine
            </Text>
          </Flex>
        </Flex>
      </Section>

      <Box mt={7}>
        <Reviews />
      </Box>

      <Section bg="" border={true} maxWidth={theme.maxWidth}>
        <Text as="p" color={theme.colors.tertiary}>
          * Do not use on steel, aluminum, silver, or chipped enamel. Prolonged
          contact with metal may cause pitting or discoloration. First test in
          an inconspicuous place for color washout or contact incompatibility.
        </Text>
        <Text as="p" color={theme.colors.tertiary}>
          <strong>WARNING:</strong> DO NOT SPRAY ON ELECTRONIC DEVICES. AVOID
          SPRAYING IN EYES, IN CASE OF CONTACT WITH EYES, FLUSH THOROUGHLY WITH
          WATER. CONTENTS UNDER PRESSURE. DO NOT PUNCTURE OR INCINERATE. DO NOT
          EXPOSE TO HEAT OR STORE AT TEMPERATURES ABOVE 120°F/50°C OR IN
          ENCLOSED PLACES THAT COULD OVERHEAT. KEEP OUT OF REACH OF CHILDREN. DO
          NOT INGEST. USE ONLY AS DIRECTED.
        </Text>
      </Section>
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
