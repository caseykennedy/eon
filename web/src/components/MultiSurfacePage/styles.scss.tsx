// MultiSurfacePage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'
import Section from '../Section'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const MultiSurfacePage = styled(Box)`
  @media ${theme.mq.tablet} {
  }

  .split {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;

    @media ${theme.mq.desktop} {
      flex-direction: row;
    }

    &__content {
    }

    &__map {
      padding: 0 ${theme.space[4]} ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[5]} ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: 0;
      }
    }
  }
`
