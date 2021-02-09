// Hero Product Component:

// ___________________________________________________________________

import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// utils
import * as gtag from '../../../utils/gtag'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text, Heading } from '../../../components/ui'
import Button from '../../../components/ui/Button'
import ArrowLink from '../../../components/ui/ArrowLink'

// Compoonents
import ImgMatch from '../../../components/ImgMatch'
import Icon from '../../../components/Icons'
import Shine from '../../../components/SVG/Shine'
import Stars from '../../../components/SVG/Stars'

import dropBolt from './assets/drop-bolt.svg'

// ___________________________________________________________________

const Hero = () => {
  return (
    <>
      <S.Hero>
        <S.Decorator>
          <img src={dropBolt} width="100%" alt="eOn multi-surface badge" />
        </S.Decorator>

        <Flex width={1}>
          <Flex className="hero__inner">
            <Flex className="hero__message">
              <Box>
                <Text as="h5" color="tertiary">
                  {data.vendor}
                </Text>
                <Text
                  as="h1"
                  className="text--md"
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />

                <div className="rating">
                  <AnchorLink href={`#ratings`} offset={theme.scrollOffset}>
                    <Stars />
                    <span>3 ratings</span>
                  </AnchorLink>
                </div>
              </Box>

              <Box>
                <Heading
                  as="h3"
                  dangerouslySetInnerHTML={{ __html: data.headline }}
                />
                <Text as="p">
                  Ideal for use on the go, in restaurants, schools, offices,
                  retail, kitchens, etc. Leaves no residue. No wiping required.
                </Text>
                <AnchorLink href={`#learn-more`} offset={theme.scrollOffset}>
                  <ArrowLink>
                    Learn more <Icon name="arrow" />
                  </ArrowLink>
                </AnchorLink>
              </Box>
            </Flex>

            <Flex width={[1]} className="hero__can">
              <Box width={1} className="figure">
                <ImgMatch
                  src="hero-multi-surface-shadow-fresh.jpg"
                  altText="eOn Hand Sanitizer can"
                />
              </Box>
            </Flex>

            <Flex className="hero__details">
              <Text
                as="p"
                color="tertiary"
                dangerouslySetInnerHTML={{ __html: data.note }}
              />
              <AnchorLink href={`#store-locator`} offset={theme.scrollOffset}>
                <Button
                  bg={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={() => {
                    gtag.event({
                      category: 'Button',
                      action: 'Click',
                      label: 'find in store - multi-surface hero'
                    })
                  }}
                >
                  Find in-store <span>$4.49</span>
                </Button>
              </AnchorLink>
            </Flex>
          </Flex>
        </Flex>
      </S.Hero>
    </>
  )
}

export default Hero

// ___________________________________________________________________

const data = {
  vendor: 'eOn mist™',
  title: 'multi-surface disinfectant',
  headline: 'Eliminates<br />99.9% of bacteria<br />and viruses.',
  statement:
    'Clean, disinfect, and deodorize<br />your environment, on the go.',
  note: 'Available in stores only.',
  tagline: 'For everyone.'
}
