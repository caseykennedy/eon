// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'
import { lighten } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from '../../components/ui'

// Sections
import Hero from './Hero'
import Trademarks from './Trademarks'

// Components
import ImgMatch from '../../components/ImgMatch'
import Section from '../../components/Section'
import Retailers from '../../components/Retailers'
import StoreLocator from '../../components/StoreLocator'
import Reviews from '../../components/Reviews'
import HowTo from '../../components/HowTo'
import Accordion from '../../components/Accordion'

import hclMark from './assets/hocl.svg'
import shelf from './assets/shelf.svg'
import trustShield from './assets/trustShield.svg'

import disinfect from './assets/disinfect.svg'
import safe from './assets/safe.svg'
import virus from './assets/virus.svg'
import trust from './assets/trusttt.svg'
import steps from './assets/steps.svg'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <Hero />
      <Trademarks />

      <Section>
        <StoreLocator />
      </Section>

      <Section
        border={true}
        maxWidth={theme.maxWidth}
        id="learn-more"
        overflow="hidden"
      >
        <Flex
          flexWrap="wrap"
          flexDirection={['column-reverse', 'row-reverse', 'row-reverse']}
        >
          <Box flex={1}>
            <Box width={1}>
              <img src={shelf} width="100%" />
            </Box>
          </Box>

          <Box flex={2}>
            <Text as="p" color="primary">
              Pro-grade sanitation
            </Text>

            <Heading as="h3">
              eOn Sanitizing Mist™ is an EPA-registered (List N) personal
              protection disinfectant which rapidly neutralizes 99.9% of
              transmissible pathogens.
            </Heading>

            {/* <Text as="p">
              eOn multi-surface is an EPA registered (List N) personal
              protection disinfectant which rapidly neutralizes transmissible
              pathogens.
            </Text>

            <Text as="p">
              Hypochlorous acid (HOCI) is one of the most effective known
              biocides produced by the human immune system. HOCI is now used in
              healthcare, food safety, water treatment, and general sanitation
              world-wide. HOCI’s chlorine based odor does not linger and rapidly
              dissipates.
            </Text> */}

            <Text as="p" />

            <Flex
              width={[1]}
              flexDirection={['column', 'row', 'row']}
              flexWrap="wrap"
              // alignItems="flex-start"
              my={[6]}
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
                <Text as="p" fontSize={3} fontWeight={600} mb={0}>
                  eOn multi-surface
                </Text>
                <Text as="p">
                  eOn multi-surface is zero-mess, zero-propellant, wide-angle
                  continuous spray, broad spectrum disinfection.
                </Text>
              </Box>
              <Box
                flex={1}
                width={1}
                bg={theme.colors.lightgray}
                p={[4]}
                mt={[4, 0, 0]}
                style={{
                  position: 'relative',
                  // top: theme.space[4],
                  border: theme.border,
                  borderRadius: theme.borderRadius
                }}
              >
                <Text as="p" fontSize={3} fontWeight={600} mb={0}>
                  Hypochlorous Acid (HOCI)
                </Text>
                <Text as="p">
                  Hypochlorous Acid (HOCI) is one of the most effective known
                  biocides, also produced in the human immune system. HOCI is
                  used in healthcare, food safety, water treatment and general
                  sanitation world-wide.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Section>

      <Section border={true} maxWidth={theme.maxWidth}>
        <Text className="text--xl" textAlign="center">
          Over 14 million sold
        </Text>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          flexDirection={['column', 'row-reverse', 'row-reverse']}
        >
          <Box flex={1} ml={[0, 6, 7]}>
            <img src={disinfect} width="100%" />
          </Box>

          <Box flex={2}>
            <Text as="p" color="primary">
              Smarter, to-go
            </Text>

            <Heading as="h3">The convenient way to disinfect.</Heading>

            <Text as="p">
              Perfect for general, nursery, clinical, food, retail athletic or
              industrial facility use. Use on an airplane, at a hotel, at the
              grocery store, or at home. Perfect versatility. Wherever you go,
              eOn’s got you covered.
            </Text>
          </Box>
        </Flex>

        <Flex
          mt={7}
          flexWrap="wrap"
          alignItems="center"
          flexDirection={['column', 'row', 'row']}
        >
          <Box flex={1} mr={[0, 6, 7]}>
            <img src={safe} width="100%" alt="HOCl" />
          </Box>

          <Box flex={2}>
            <Heading as="h3">Safe on just about any surface.</Heading>

            <Text as="p">
              Designed for use on a variety of surfaces, from porcelain to
              glass, plastic, cloth, sponges, dishes, pots, utensils, sinks,
              coolers, counter tops, desk tops, tables, shelves, appliances,
              door knobs, faucets and more! Cleans stains, dirt, fingerprints,
              food residue, grease, mold, soil, pet odor, rust, and more.
            </Text>
          </Box>
        </Flex>

        <Flex
          mt={7}
          flexWrap="wrap"
          flexDirection={['column', 'row-reverse', 'row-reverse']}
        >
          <Box flex={1} pl={[0, 11, 11]} pr={[12, 0, 0]} />

          <Box flex={3}>
            <Text as="p" color="tertiary">
              Do not use on steel, aluminum, silver, or chipped enamel.
              Prolonged contact with metal may cause pitting or discoloration.
              First test in an inconspicuous place for color washout or contact
              incompatibility.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section
        // bg={`${lighten(0.0, theme.colors.babyblue)}`}
        border={true}
        maxWidth={theme.maxWidth}
      >
        <Text className="text--xl" textAlign="center" mb={5}>
          How to use
        </Text>

        <HowTo />
      </Section>

      <Section border={true} maxWidth={theme.maxWidth}>
        <Flex
          flexWrap="wrap"
          flexDirection={['column-reverse', 'row-reverse', 'row-reverse']}
        >
          <Box width="100%" flex={1} ml={[0, 6, 7]}>
            <img src={virus} width="100%" alt="HOCl" />
          </Box>

          <Box flex={2}>
            <Text as="p" color="primary">
              How does it work?
            </Text>

            <Heading as="h3">
              eOn's Hypochlorous Acid multi-surface disinfectant breaks down
              microbe and virus cell walls, destroying or inactivating 99.9% of
              bacteria and viruses through protein degradation and inhibition of
              protein synthesis.
            </Heading>

            <Box as="ul">
              <li>Derived from naturally occurring salt minerals and water.</li>
              <li>One step, broad spectrum germicide</li>
              <li>Zero propellant, bag-on-valve spray action</li>
              <li>Convenient, TSA friendly, personal size</li>
              <li>Premium-grade recyclable aluminum</li>
            </Box>
          </Box>
        </Flex>

        <Flex
          mt={[5, 6, 7]}
          flexWrap="wrap"
          alignItems="center"
          flexDirection={['column-reverse', 'row', 'row']}
        >
          <Box width="100%" flex={1} mr={[0, 6, 7]}>
            <img src={steps} width="100%" alt="HOCl" />
          </Box>

          <Box flex={2} mb={[5, 0]}>
            <Text as="p">
              *Kills over 99.9% of household germs, specifically: Influenza A
              virus, H1N1, Rhinovirus type 37, Staphylococcus aureus, Salmonella
              enterica, Pseudomonas aeruginosa and Escherichia coli on hard
              nonporous surfaces.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section bg="lightgray" border={true} maxWidth={theme.maxWidth}>
        <Flex flexWrap="wrap" flexDirection={['column', 'row', 'row']}>
          <Box flex={1}>
            <Text as="p" color="primary">
              Everyday sanitation
            </Text>

            <Heading as="h3">Tested and approved, for everyone.</Heading>

            <Box as="ul">
              <li>
                This product was tested for efficacy standards for hospital
                disinfection using AOAC testing methods.
              </li>
              <li>Meets OSHA[s] Bloodborne Pathogen Guidelines</li>
              <li>One step germicide</li>
              <li>Gel free, non-greasy formula</li>
              <li>Contains no phosphates</li>
              <li>Contains 500ppm Free Available Chlorine</li>
              <li>HOCI's light, chlorine odor rapidly dissipates</li>
            </Box>
          </Box>

          <Box width={1} flex={1}>
            <Box className="shield">
              <img src={trustShield} alt="" width="100%" />
            </Box>
          </Box>
        </Flex>
      </Section>

      <Section border={true} maxWidth={`1024px`}>
        <Text as="p" color="primary">
          Frequently asked questions
        </Text>

        <Box className="faqs">
          {data.map((faq, idx) => (
            <Accordion title={faq.question} active={false} key={idx}>
              <Box py={[4, 5]}>
                <p>{faq.answer}</p>
                {faq.note && <p>{faq.note}</p>}
              </Box>
            </Accordion>
          ))}
        </Box>
      </Section>

      <Section bg="white" border={true} overflow="hidden" id="ratings">
        <Reviews reviews={reviews} />
      </Section>

      <Section bg="lightgray" border={true} maxWidth={theme.readingWidth}>
        <Text as="p" color={theme.colors.tertiary} className="text--small">
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

// ___________________________________________________________________

const reviews = [
  {
    lead: 'Fast service!',
    author: 'Satisfied Customer',
    review:
      'I bought a defective product and you replied and replaced my purchase the fastest I’ve ever experienced. I would be happy to purchase more products in the future.'
  },
  {
    lead: 'Strong, even mist.',
    author: 'John',
    review:
      'The strength of the continuous spray surprised me, as well as the even mist it leaves on surfaces.'
  },
  {
    lead: 'Good stuff!',
    author: 'Alex Persing',
    review:
      "I love the fact that it's so safe, effective and portable. Good stuff!"
  }
]

const data = [
  {
    question: 'How do I spray my eOn sanitizing mist? ',
    answer:
      'Twist to unlock the cap, after you hear a click, the circular opening should line up with the spray actuator. Next, place your finger on the top of the cap and locate the small groove near the back-end of the spray button. With your finger there—press down firmly to mist. Press and hold for a continuous spray. ',
    note: 'Sprays from any angle. Requires no shaking, uses no propellant.'
  },
  {
    question: 'Does eOn sanitizing mist have an odor? ',
    answer:
      'eOn multi-surface disinfectant is an odorless substance, though some natural variation in concentration may lead a light, harmless scent of chlorine that disappears after drying. ',
    note:
      'eOn hand sanitizer is 80%, 190 proof ethyl alcohol and carries the sharp, fresh scent of alcohol.'
  },
  {
    question: 'How long does an eOn can last? ',
    answer:
      'Each 2oz. can of eOn sanitizing mist™ carries just over 65 seconds of continuous spray, which roughly translates to over 60 quality sprays per can. ',
    note: ''
  },
  {
    question: 'Can I travel with eOn sanitizing mist? ',
    answer:
      'Yes! At 2 fluid ounces, our personal size DOT 2Q aluminum cans are fully TSA compliant. Spray it on your seat or tray table, wait until dry. ',
    note:
      'Current TSA guidelines allow for up to 3.4oz of liquid. At the airport? Find eOn multi-surface at your terminal’s Hudson News retailer. '
  }
]
