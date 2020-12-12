// Mist Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

import { Parallax } from 'react-scroll-parallax'

// ___________________________________________________________________

export const Mist = styled(Section)`
  background: ${theme.colors.babyblue};
  border-radius: 0 0 ${theme.space[6]} 0;

  @media ${theme.mq.tablet} {
    border-radius: 0 0 ${theme.space[7]} 0;
  }

  .mist {
    &__video {
      position: relative;

      &::before {
        background: rgb(146, 198, 246);
        background: radial-gradient(
          circle,
          rgba(146, 198, 246, 0.7) 20%,
          rgba(255, 255, 255, 0) 60%
        );
        content: '';
        overflow: visible;
        position: absolute;
        top: calc(${theme.space[7]} * -1.5);
        right: 0;
        bottom: 0;
        left: calc(${theme.space[7]} * -1);
        z-index: 0;

        @media ${theme.mq.desktop} {
          transform: scale(1.25);
        }
      }
    }
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
