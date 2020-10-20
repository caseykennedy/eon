// How Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

import { Parallax } from 'react-scroll-parallax'

// ___________________________________________________________________

export const How = styled(Section)`
  background: ${transparentize(0.05, theme.colors.quinary)};
  border-radius: 0 0 ${theme.space[7]} 0;
  /* backdrop-filter: blur(9px); */
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
        }
        &__alcohol {
          top: -4rem;
          left: 1rem;
          width: 8rem;

          @media ${theme.mq.tablet} {
            left: 2rem;
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
