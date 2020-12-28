// PageHero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'
import Section from '../../../components/Section'

// ___________________________________________________________________

export const Hero = styled(Section)`
  div {
    position: relative;
  }

  .hero {
    &__inner {
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;

      margin: 0 auto;
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }

      .feature-set {
        display: none;

        @media ${theme.mq.tablet} {
          display: flex;
        }

        &--mobile {
          margin-top: ${theme.space[4]};

          @media ${theme.mq.tablet} {
            display: none;
          }
        }
      }
    }

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100%;

      @media ${theme.mq.tablet} {
        flex: 1;
        height: 100%;
      }

      h1 {
        margin-bottom: 0;
      }

      .rating {
        display: flex;
        align-items: center;
        margin-top: ${theme.space[1]};
        margin-bottom: ${theme.space[4]};

        @media ${theme.mq.tablet} {
          margin-bottom: ${theme.space[5]};
        }

        @media ${theme.mq.desktop} {
          margin-bottom: ${theme.space[6]};
        }

        span {
          font-size: ${theme.fontSizes[1]};
          margin-left: ${theme.space[2]};
        }

        svg {
          width: calc(${theme.space[7]} / 1.25);
        }
      }
    }

    &__can {
      flex: 1;
      align-items: flex-start;
      justify-content: center;
      position: relative;

      @media ${theme.mq.tablet} {
        margin-bottom: 0;
      }

      .figure {
        max-width: 250px;
        width: 100%;

        @media ${theme.mq.tablet} {
          max-width: 290px;
        }

        @media ${theme.mq.desktop} {
          max-width: 325px;
        }
      }
    }

    &__details {
      flex-direction: column;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex: 1;
      height: 100%;
      width: 100%;

      div {
        width: 100%;

        @media ${theme.mq.tablet} {
          width: initial;
        }
      }

      img {
        width: ${theme.space[5]};

        @media ${theme.mq.tablet} {
          left: calc(${theme.space[6]});
          width: calc(${theme.space[6]} / 1.25);
        }
      }
    }
  }
`

export const Decorator = styled.span`
  position: absolute;
  top: 0;
  right: ${theme.space[4]};
  /* margin-left: auto; */
  width: ${theme.space[6]};

  @media ${theme.mq.tablet} {
    right: ${theme.space[5]};
    width: calc(${theme.space[6]} * 1.5);
  }

  @media ${theme.mq.desktop} {
    right: ${theme.space[6]};
    width: calc(${theme.space[6]} * 1.75);
  }
`
