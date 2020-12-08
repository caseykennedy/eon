// Product Masonry Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const ProductMasonry = styled(Flex)`
  .panel-group {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;

    @media ${theme.mq.desktop} {
      flex-direction: row;
    }

    .multi-surface {
      padding-top: ${theme.space[6]};

      &:hover {
        background: ${theme.colors.white};
      }
    }

    .hand-sanitizer {
      border-bottom: ${theme.border};
      padding: 0 ${theme.space[4]} ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[5]} ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        border-bottom: 0;
        border-right: ${theme.border};
        padding: 0;
      }
    }
  }
`

export const HandSanitizer = styled(Flex)`
  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    176deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 43%,
    rgba(220, 237, 255, 0.3) 100%
  ); */
  height: 768px;
  min-height: 400px;
  padding-top: calc(${theme.space[2]});
  padding-bottom: ${theme.space[5]};
  position: relative;
  overflow: hidden;
  margin-top: ${theme.headerHeight};

  transition: background-color 0.222s ease-in 0s;

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

  /* &:hover {
    background: ${theme.colors.babyblue};
  } */

  .hero {
    &__inner {
      flex-direction: column;
      justify-content: flex-end;
      margin: 0 auto;
      width: 100%;

      @media ${theme.mq.tablet} {
        justify-content: space-between;
      }
    }

    &__figure {
      justify-content: center;
      position: absolute;
      margin-right: auto;

      max-height: 100%;
      width: 100%;
      z-index: 0;

      @media ${theme.mq.tablet} {
        align-self: center;
        margin: 0 auto;
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
  width: calc(${theme.space[7]} / 1.15);

  @media ${theme.mq.tablet} {
    top: ${theme.space[5]};
    right: calc(${theme.space[5]});
    width: calc(${theme.space[7]} / 1);
  }
`
