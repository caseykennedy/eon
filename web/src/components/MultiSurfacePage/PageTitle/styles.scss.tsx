// PageHero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const PageTitle = styled(Flex)`
  /* min-height: 580px; */
  height: 100%;
  padding-top: ${theme.space[5]};
  padding-bottom: ${theme.space[5]};
  position: relative;
  overflow: hidden;

  @media ${theme.mq.tablet} {
    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[6]};
  }

  .hero {
    &__inner {
      flex-direction: column;
      flex-wrap: wrap;
      /* justify-content: space-between; */
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }
    }

    &__message {
      flex-direction: column;
      justify-content: flex-end;
    }

    &__can {
      
      align-items: flex-start;
      justify-content: center;
      margin-bottom: ${theme.space[6]};
      position: relative;

      @media ${theme.mq.tablet} {
        /* margin-top: calc(${theme.space[5]} * -1); */
        margin-bottom: 0;
        padding-top: ${theme.space[4]};
        padding-bottom: ${theme.space[4]};
      }

      .decorator {
        position: absolute;
        top: ${theme.space[7]};
        width: 250px;

        @media ${theme.mq.tablet} {
          top: calc(${theme.space[7]} * 1.35);
          width: 275px;
        }
      }

      .figure {
        max-width: 250px;
        width: 100%;

        @media ${theme.mq.tablet} {
          max-width: 333px;
        }

        @media ${theme.mq.desktop} {
          max-width: 400px;
        }
      }

      .spray {
        position: absolute;
        top: 125px;
        right: -175px;
        width: 225px;

        @media ${theme.mq.tablet} {
          top: 125px;
          right: -190px;
          width: 275px;
        }

        @media ${theme.mq.desktop} {
          top: 175px;
          right: -250px;
          width: 375px;
        }
      }
    }

    &__features {
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;

      width: 100%;
      position: relative;

      @media ${theme.mq.tablet} {
      }

      .feature-set {
        margin-top: ${theme.space[4]};
        width: 100%;
      }

      .cta {
        justify-content: flex-end;
        margin-top: ${theme.space[5]};
        width: 100%;

        @media ${theme.mq.tablet} {
          margin-top: 0;
          width: 50%;
        }

        @media ${theme.mq.desktop} {
          width: 33.333%;
        }
      }
    }
  }
`

export const Decorator = styled.div`
  position: absolute;
  top: ${theme.space[5]};
  right: calc(${theme.space[4]});
  margin-left: auto;
  width: ${theme.space[6]};

  @media ${theme.mq.tablet} {
    right: calc(${theme.space[5]});
    width: calc(${theme.space[6]});
  }
`
