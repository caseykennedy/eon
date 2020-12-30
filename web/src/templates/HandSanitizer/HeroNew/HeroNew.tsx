// Hero Product Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// utils
import * as gtag from '../../../utils/gtag'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text, Heading } from '../../../components/ui'

// Compoonents
import AddToCart from '../../../components/AddToCart'
import ImgMatch from '../../../components/ImgMatch'
import Shine from '../../../components/SVG/Shine'
import Stars from '../../../components/SVG/Stars'
import AnchorLink from '../../../components/ui/AnchorLink'
import Icon from '../../../components/Icons'

// ___________________________________________________________________

const Hero = () => {
  return (
    <>
      <S.Hero maxWidth={theme.maxWidth}>
        <S.Decorator>
          <Shine />
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
                  <Link to={`#ratings`}>
                    <Stars />
                    <span>7 ratings</span>
                  </Link>
                </div>
              </Box>

              <Box>
                <Heading
                  as="h3"
                  dangerouslySetInnerHTML={{ __html: data.headline }}
                />
                <Flex className="feature-set">
                  <Text
                    as="p"
                    mr={[4, 5, 5]}
                    mb={0}
                    dangerouslySetInnerHTML={{ __html: data.featureA }}
                  />

                  <Text
                    as="p"
                    color="primary"
                    dangerouslySetInnerHTML={{ __html: data.featureB }}
                  />
                </Flex>
                {/* <AnchorLink>
                  Learn more <Icon name="arrow" />
                </AnchorLink> */}
              </Box>
            </Flex>

            <Flex width={[1]} className="hero__can">
              <Box width={1} className="figure">
                <ImgMatch
                  src="hero-hand-san.png"
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

              <Box
                onClick={() => {
                  gtag.event({
                    category: 'Button',
                    action: 'Click',
                    label: 'add to cart - hand sanitizer hero'
                  })
                }}
              >
                <AddToCart />
              </Box>
              <Flex className="feature-set--mobile">
                <Text
                  as="p"
                  mr={[4, 5, 5]}
                  mb={0}
                  dangerouslySetInnerHTML={{ __html: data.featureA }}
                />

                <Text
                  as="p"
                  color="primary"
                  mb={0}
                  dangerouslySetInnerHTML={{ __html: data.featureB }}
                />
              </Flex>
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
  title: 'hand sanitizer',
  headline: 'Pro-grade<br />hand sanitation<br />made simple.',
  statement:
    'Clean, disinfect, and deodorize<br />your environment, on the go.',
  note: 'For everyone.',
  tagline: 'For everyone.',
  featureA: 'Effective on<br /><mark>99.99%</mark> of<br />common germs',
  featureB: 'personal size<br />germ protection<br />on the go'
}
