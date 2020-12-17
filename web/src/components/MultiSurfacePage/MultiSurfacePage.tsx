// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'
import Iframe from 'react-iframe'

// Theme
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from '../ui'
import Button from '../ui/Button'

// Sections
import PageTitle from './PageTitle'
import Trademarks from './Trademarks'

// Components
import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Retailers from '../Retailers'
import StoreLocator from '../StoreLocator'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <Flex width={1} className="split">
        <Box flex={1} className="split__content">
          <PageTitle />
        </Box>

        <Box flex={2} className="split__map">
          <StoreLocator />
        </Box>
      </Flex>
      <Trademarks />
      <Section bg="lightgray" maxWidth={theme.maxWidth}>
        <Flex
          flexDirection={['column', 'row', 'row']}
          justifyContent="space-between"
          width={1}
        >
          <Box width={[1, 2 / 3, 1 / 2]}>
            <Heading as="h2">
            Hypochlorous Acid (HOCl)
            </Heading>
            <Text as="p">Effective on 99.9%
of bacteria and viruses. Derived from naturally occurring salt
              minerals and water.</Text>

            <Text as="p">
              For general, nursery, clinic, food, retail, athletic or industrial
              facility use. On an airplane, at a hotel, or at the grocery
              store—make it eOn, on the go disinfection.
            </Text>

            <Text as="p">
              Cleans stains, dirt, fingerprints, food residue, grease, mold,
              soil, pet odor, rust, and more. Designed for use on a variety of
              surfaces—from porcelain to glass—plastic, cloth, sponges, dishes,
              pots, utensils, sinks, coolers, counter tops, desk tops, tables,
              shelves, appliances, door knobs, faucets and more.{' '}
            </Text>

            <Text as="p">
              Ideal for use on the go, in restaurants, schools, colleges,
              offices, retail, industrial, commercial facilities, recreational
              facilities, kitchens, playgrounds, autos, and homes. Leaves no
              residue. No wiping required.{' '}
            </Text>

            <Text as="p">The convenient way to disinfect. </Text>
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          flexDirection={['column', 'row', 'row']}
          width={1}
          my={[4]}
        >
          <Box width={[1, 2 / 3, 1 / 2]}/>
        </Flex>

        <Flex
          flexDirection={['column', 'row', 'row']}
          justifyContent="space-between"
          alignItems="flex-end"
          width={1}
        >
          <Flex mt={4} flexDirection={['column', 'row', 'row']}>
            <Text as="p" mb={0} className="t--small">
              <strong>Active Ingredient:</strong>
              <br />
              Hypochlorous Acid..............0.046%
              <br />
              <strong>Other Ingredients:</strong>...........99.954%
              <br />
              <strong>Total:</strong>
              ......................................100.000%
            </Text>
            <Text as="p" color="primary" mt={[4, 0, 0]} ml={[0, 6, 7]}>
              Contains
              <br />
              500ppm Free
              <br />
              Available Chlorine
            </Text>
          </Flex>
        </Flex>
        {/* <Box className="hand">
          <ImgMatch
            src="eOn-Multi-HandSpray.png"
            altText="Hand holding eOn Hand Sanitizer can."
          />
        </Box> */}
      </Section>
      <Section bg="lightgray" maxWidth={theme.maxWidth}>
        <Text as="p" color={theme.colors.tertiary} fontSize={1}>
          This product was tested for efficacy standards for hospital
          disinfection using AOAC testing methods • Meets OSHA[s] Bloodborne
          Pathogen Guidelines • One step germicide • Non-greasy formula •
          Contains no phosphates
        </Text>
        <Text as="p" color={theme.colors.tertiary} fontSize={1}>
          *Do not use on steel, aluminum, silver, or chipped enamel. Prolonged
          contact with metal may cause pitting or discoloration. First test in
          an inconspicuous place for color washout or contact incompatibility.
        </Text>
        <Text as="p" color={theme.colors.tertiary} fontSize={1}>
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
