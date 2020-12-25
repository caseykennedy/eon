// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  /* height: 768px; */
  min-height: 400px;
  padding-top: calc(${theme.space[4]});
  padding-bottom: ${theme.space[5]};
  position: relative;
  overflow: hidden;

  @media ${theme.mq.tablet} {
    height: calc(
      100vh - calc(${theme.headerHeight} * 2) - ${theme.trademarksHeight}
    );
    max-height: 750px;
    min-height: 500px;
    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[6]};
  }

  @media ${theme.mq.desktop} {
    max-height: 800px;
  }

  .hero {
    &__inner {
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;

      @media ${theme.mq.tablet} {
        justify-content: space-between;
      }
    }

    &__figure {
      justify-content: center;

      max-height: 325px;
      width: 100%;
      z-index: 0;

      @media ${theme.mq.tablet} {
        align-self: center;
        margin: 0 auto;
        position: absolute;
      }

      .figure {
        margin-right: ${theme.space[5]};
        margin-left: 0;
        width: calc(${theme.space[7]} * 2.25);

        @media ${theme.mq.tablet} {
          margin-right: ${theme.space[6]};
          margin-left: 0;
          width: calc(${theme.space[7]} * 3);
        }

        @media ${theme.mq.desktop} {
          margin-right: ${theme.space[7]};
          margin-left: ${theme.space[5]};
          width: calc(${theme.space[9]} * 1.75);
        }
      }

      .spray {
        position: absolute;
        top: 50px;
        right: -125px;
        width: 225px;

        @media ${theme.mq.tablet} {
          top: 60px;
          right: -145px;
          width: 275px;
        }

        @media ${theme.mq.desktop} {
          top: 75px;
          right: -160px;
          width: 350px;
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

        @media ${theme.mq.tablet} {
          margin-top: 0;
          width: 50%;
        }

        @media ${theme.mq.desktop} {
          width: 66.666%;
        }
      }

      .cta {
        /* justify-content: flex-end; */
        flex-direction: column;
        margin-top: ${theme.space[5]};
        width: 100%;

        @media ${theme.mq.tablet} {
          align-items: flex-end;
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
  width: calc(${theme.space[7]} / 1.15);

  @media ${theme.mq.tablet} {
    top: ${theme.space[5]};
    right: calc(${theme.space[6]} + 14px);
    width: calc(${theme.space[9]} / 1.25);
  }
`
