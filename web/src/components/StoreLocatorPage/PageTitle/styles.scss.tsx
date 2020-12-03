// PageTitle Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const PageTitle = styled(Flex)`
  min-height: 580px;
  padding-top: ${theme.space[6]};
  padding-bottom: ${theme.space[5]};
  position: relative;
  overflow: hidden;

  @media ${theme.mq.tablet} {
    /* height: calc(
      100vh - calc(${theme.headerHeight} * 1) - ${theme.trademarksHeight}
    ); */
    /* max-height: 900px; */
    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[6]};
  }

  @media ${theme.mq.desktop} {
    /* max-height: 800px; */
  }

  .hero {
    &__inner {
      flex-direction: row-reverse;
      flex-wrap: wrap;
      width: 100%;

      @media ${theme.mq.tablet} {
      }
    }

    &__message {
      flex-direction: column;
      justify-content: flex-end;

      @media ${theme.mq.tablet} {
        justify-content: space-between;
      }
    }

    &__figure {
      align-items: flex-start;
      justify-content: center;
      margin-bottom: ${theme.space[6]};
      position: relative;

      @media ${theme.mq.tablet} {
        margin-top: calc(${theme.space[5]} * -1);
        margin-bottom: 0;
        padding-top: ${theme.space[4]};
        padding-bottom: ${theme.space[4]};
      }

      .decorator {
        position: absolute;
        top: ${theme.space[7]};
        width: 250px;

        @media ${theme.mq.tablet} {
          top: calc(${theme.space[7]} * 1.25);
          width: 275px;
        }

        @media ${theme.mq.desktop} {
          top: ${theme.space[9]};
          width: 425px;
        }
      }

      .figure {
        width: 110px;

        @media ${theme.mq.tablet} {
          width: 150px;
        }

        @media ${theme.mq.desktop} {
          width: 185px;
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
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;

      width: 100%;
      position: relative;

      @media ${theme.mq.tablet} {
        flex-direction: row-reverse;
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
  top: ${theme.space[4]};
  right: calc(${theme.space[4]});
  margin-left: auto;
  width: ${theme.space[8]};

  @media ${theme.mq.tablet} {
    top: ${theme.space[5]};
    right: calc(${theme.space[6]} + 14px);
    width: calc(${theme.space[9]} * 3);
  }
`
