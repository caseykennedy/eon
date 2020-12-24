// Mission Page:

// ___________________________________________________________________

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'

import { Box, Flex, Heading, Text } from '../ui'

import Section from '../Section'

// Hooks
import useLegal from '../../hooks/useLegal'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Components
import BlockContent from '../BlockContent'
import PageTitle from '../PageTitle'
import Logo from '../SVG/Logo'
import AbstractSpray from '../SVG/AbstractSpray'
import ImgMatch from '../ImgMatch'
import Icon from '../Icons'

// ___________________________________________________________________

const MissionPage = () => {
  return (
    <>
      <PageTitle
        message="Our mission"
        image="pt-mission-eon-spray.jpg"
        altText="eOn hand holding a can"
      />
      <S.MissionPage>
        <Section maxWidth={theme.maxWidth}>
          <Box width={1} mb={[6, 7]} pb={[6, 7]}>
            <Box width={[1, 2 / 3]}>
              <Heading as="h2" mb={0}>
                Creating expert, integral and sustainable disinfectants &amp;
                sanitizers for all walks of life—protecting what matters
                most—one disinfection at a time.
              </Heading>
            </Box>
          </Box>

          <Flex
            flexDirection={['column', 'row', 'row']}
            flexWrap="wrap"
            width={1}
          >
            <Flex flex={1} mb={6} mr={7} className="decorators">
              <Box width={['', '', 2 / 3]}>
                <AbstractSpray />
              </Box>
              <Box className="image-clip">
                <Box width={1}>
                  <ImgMatch
                    src="eon-in-target.jpg"
                    altText="eOn on the shelf at Target"
                  />
                </Box>
              </Box>
            </Flex>

            <Box flex={2} pl={[0, 4, 7]}>
              <p className="text--lg">
                That's why we work to ensure the chemicals and materials we use
                are 100% safe and effective, mindfully sourced, fully recyclable
                and manufactured under the most stringent health, safety and
                environmental practices—from the ground up.
              </p>
              <p className="text--lg">
                Taking pride in this responsibility while learning and improving
                how our products are used in day-to-day life (and their impact
                as a whole), is our #1 goal.
              </p>
              <p className="text--lg">
                We're committed to fostering and promoting hygienic lifestyles,
                innovative research and development, and ecological
                responsibility, in our mission to stand for best-in-class
                disinfection you can trust.
              </p>
              <p className="text--lg">
                From on-the-go to at home, factory or daycare—eOn is about
                helping to create a healthy, clean environment—for everyone.
              </p>
              <Heading
                as="h3"
                color={theme.colors.primary}
                pt={4}
                style={{ borderTop: theme.border }}
              >
                Everyday, professional-grade
                <br />
                hygienics for a cleaner world.
              </Heading>
              <p>
                <strong>eOn</strong> branded products are America’s premiere,
                TSA friendly, continuous spray packaged goods for on-the-go
                protection from common germs. Our products are available to
                promote well-being throughout your life.
              </p>
            </Box>
          </Flex>
        </Section>
      </S.MissionPage>
    </>
  )
}

export default MissionPage
