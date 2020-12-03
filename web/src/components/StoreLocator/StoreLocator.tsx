// StoreLocatorPage:

// ___________________________________________________________________

import React from 'react'
import Iframe from 'react-iframe'

// Theme + UI
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import Section from '../Section'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.StoreLocator>
      <Iframe
        url="//destinilocators.com/eonmist/site/locator.php?RFR=http://eonmist.com&&MM=panel2"
        width="100%"
        height="100%"
        id="store-locator"
        className="locator__iframe"
        position="relative"
        // frameBorder={0}
      />
    </S.StoreLocator>
  )
}

export default MultiSurfacePage
