// Retailers Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

import { Parallax } from 'react-scroll-parallax'

// ___________________________________________________________________

export const InstagramFeed = styled(Box)`
  border-top: ${theme.border};
  padding: ${theme.space[6]} ${theme.space[0]} ${theme.space[0]};

  @media ${theme.mq.desktop} {
    padding-top: ${theme.space[7]};
  }

  .ig-feed-grid {
    align-items: center;
    justify-content: center;

    &__cell {
      /* justify-content: center; */
      height: auto;
      width: 100%;
      /* height: 40px; */

      div {
        width: 100%;
      }
    }
  }
`
