// Retailers Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

import { Parallax } from 'react-scroll-parallax'

// ___________________________________________________________________

export const Retailers = styled(Section)`
  @media ${theme.mq.tablet} {
  }

  .retailers-grid {
    align-items: center;
    justify-content: center;

    &__cell {    
      /* justify-content: center; */
      height: auto;
      width: 100%;
      /* height: 40px; */

      div {
        max-width: 130px;
        width: 100%;
      }
    }
  }
`
