// Q1 Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Button from '../ui/Button'
import PageTitle from '../PageTitle'
import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Icon from '../Icons'
import Logo from '../SVG/Logo'
import Germs from '../SVG/Germs'
import FlagUsa from '../SVG/FlagUsa'

import bolt from './assets/bolt.svg'

// ___________________________________________________________________

const padding = [6, 7, 8]

const Q1Page = () => {
  return (
    <>
      <PageTitle
        message="Q3 2021"
        image="pt-q1.jpg"
        altText="eOn hand holding a can"
      />
      <S.Q1Page>
        <Section bg={theme.colors.cosmicblue} maxWidth={theme.maxWidth}>
          <Box width={[1, 2 / 3]}>
            <Heading as="h2" mb={0}>
              New pro-grade disinfection options for everyone—welcome to the
              future of eOn brand.
            </Heading>
          </Box>
        </Section>

        <Section maxWidth={theme.readingWidth} pt={padding}>
          <Box width={1} textAlign="center">
            <Heading as="h3">Clean to-go, just got bigger.</Heading>
          </Box>
        </Section>

        <Section maxWidth={`600px`} overflow="hidden" pb={7}>
          <Box width={1} className="figure-stack" px={6}>
            <Box position="relative">
              <Box className="burst">
                <ImgMatch src="radial-burst.png" altText="radial burst" />
              </Box>

              <Box className="cans">
                <ImgMatch src="can-stack-q1.png" altText="radial burst" />
              </Box>
            </Box>

            <Box className="hand-left">
              <ImgMatch src="hand-left.png" altText="thumbs up" />
            </Box>
          </Box>
        </Section>

        <S.Features>
          <Flex className="inner">
            <Flex alignItems="center" flexDirection={['column']} mb={6}>
              <Box width={`50px`}>
                <Germs />
              </Box>
              <Box>Multi-surface disinfection</Box>
            </Flex>

            <Flex alignItems="center" flexDirection={['column']} mb={6}>
              <Box width={`50px`}>
                <img src={bolt} alt="bolt" />
              </Box>
              <Box>Kills germs fast</Box>
            </Flex>

            <Flex alignItems="center" flexDirection={['column']}>
              <Box width={`50px`}>
                <FlagUsa />
              </Box>
              <Box>Proudly made in the USA</Box>
            </Flex>
          </Flex>
        </S.Features>

        <Section maxWidth={theme.readingWidth} pt={padding} pb={padding}>
          <Box width={1} textAlign="center">
            <Text as="p" className="text--md" mb={0}>
              Introducing new eOn sanitizing mist in 8oz and 14oz options. The
              perfect compliment to our revolutionary, travel-friendly, 2oz
              personal size multi-surface disinfectant. Sanitize your
              environment freely. Continuous spray disinfection never looked so
              good.
            </Text>
          </Box>
        </Section>

        <Section maxWidth={theme.readingWidth} pb={padding}>
          <Box width={1} textAlign="center">
            <Heading as="h3">Side by side:</Heading>
          </Box>

          <Box>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>eOn multi-surface disinfectant</th>
                  <th>Other leading brand disinfectants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cleans, disinfects and deodorizes</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Broad spectrum germicide</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Environmentally safe (EPA approved)</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Suitable for industrial grade use</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Contains no phosphates</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Made in USA</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Slim, portable form factor</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="plus" className="plus" />
                  </td>
                </tr>
                <tr>
                  <td>Continuous spray mist (patented bag-on-valve) system</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="plus" className="plus" />
                  </td>
                </tr>
                <tr>
                  <td>Zero-propellant spray mechanism</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="plus" className="plus" />
                  </td>
                </tr>
                <tr>
                  <td>Child-safe locking cap</td>
                  <td>
                    <Icon name="check" className="check" />
                  </td>
                  <td>
                    <Icon name="plus" className="plus" />
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Section>

        <Section maxWidth={theme.readingWidth} pt={padding} pb={0}>
          <Box width={1} textAlign="center">
            <Heading as="h3" mb={0}>
              Disinfecting wipes for pros.
            </Heading>
          </Box>
        </Section>

        <S.Wipes py={[4, 6, 7]}>
          <Box width={1} className="countertop">
            <ImgMatch src="countertop.jpg" altText="countertop" />
          </Box>

          <Box className="inner">
            <Box width={1} className="wipes">
              <ImgMatch src="wipes.png" altText="radial burst" />
            </Box>

            <Box width={1} className="thumbs-up">
              <ImgMatch src="hand-right.png" altText="thumbs up" />
            </Box>
          </Box>
        </S.Wipes>

        <Section maxWidth={theme.readingWidth} pt={padding} pb={padding}>
          <Box width={1} textAlign="center">
            <Text as="p" className="text--md" mb={0}>
              Clean down a variety of surfaces with eOn’s new, durable, extra
              large disinfecting wipes. Suitable for any space, from hospitals
              to nurseries—look no further than eOn disinfecting wipes to clean,
              disinfect and deodorize. Coming early 2021.
            </Text>
          </Box>
        </Section>

        <Section maxWidth={theme.readingWidth} pt={2} pb={padding}>
          <Flex width={1} alignItems="center" flexDirection="column">
            <Text as="p" textAlign="center">
              Interested in learning about new and future products?
            </Text>
            <Box>
              <Button
                as="a"
                href="mailto:hello@eonmist.com?subject=Contact from eonmist.com/Q3"
                bg={theme.colors.primary}
                color={theme.colors.white}
              >
                Reach out <Icon name="envelope" />
              </Button>
            </Box>
          </Flex>
          <Flex justifyContent="center" mt={padding}>
            <Box width="90px">
              <Logo fill={theme.colors.primary} />
            </Box>
          </Flex>
        </Section>
      </S.Q1Page>
    </>
  )
}

export default Q1Page
