// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'
import Iframe from 'react-iframe'

import { Box, Text } from '../ui'
import Button from '../ui/Button'
import Section from '../Section'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import PageHero from './PageHero'
import Retailers from './Retailers'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <PageHero />
      <Section>
        <Iframe
          url="//destinilocators.com/eonmist/site/locator.php?RFR=http://eonmist.com&&MM=panel2"
          width="100%"
          // height="100%"
          id="store-locator"
          className="locator__iframe"
          position="relative"
          frameBorder={0}
        />
        {/* <script src="//destinilocators.com/eonmist/site/install/?MM=panel2" /> */}
      </Section>
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
