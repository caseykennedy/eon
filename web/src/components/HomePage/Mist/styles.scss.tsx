// Mist Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

import { Parallax } from 'react-scroll-parallax'

// ___________________________________________________________________

export const Mist = styled(Section)`
  border-radius: 0 0 ${theme.space[7]} 0;

  @media ${theme.mq.tablet} {
    border-radius: 0 0 ${theme.space[9]} 0;
  }

  .how {
    &__figure {
      position: relative;

      @media ${theme.mq.tablet} {
      }
    }

    &__decorators {
      align-items: flex-start;

      .icon {
        position: relative;
        width: ${theme.space[7]};

        &__germs {
          top: -8rem;
        }

        &__refresh {
          top: -5rem;
          left: -1.5rem;
          width: calc(${theme.space[7]} * 1.15);
        }

        &__alcohol {
          top: -4rem;
          left: 1rem;
          width: 10rem;

          @media ${theme.mq.tablet} {
            left: 1rem;
            width: 9rem;
          }

          @media ${theme.mq.desktop} {
            left: 5rem;
            width: 10rem;
          }
        }
      }
    }
  }
`

export const ParallaxBox = styled(Parallax)`
  @media ${theme.mq.tablet} {
  }
`
