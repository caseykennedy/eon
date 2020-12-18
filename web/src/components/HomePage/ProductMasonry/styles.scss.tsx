// Product Masonry Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const ProductMasonry = styled(Flex)`
  min-height: 750px;

  @media ${theme.mq.tablet} {
    height: calc(
      100vh - calc(${theme.headerHeight} * 2) - ${theme.trademarksHeight}
    );
    max-height: 1024px;
    min-height: 500px;
  }

  .panel-group {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    @media ${theme.mq.desktop} {
      flex-direction: row;
    }

    .panel {
      color: ${theme.colors.text};
      padding: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: ${theme.space[5]} ${theme.space[6]};
      }

      &:hover {
        .statement {
          color: ${theme.colors.primary};
        }
      }

      &--multi-surface {
        flex: 1;
        width: 100%;
      }

      &--hand-sanitizer {
        /* background: rgb(255, 255, 255);
        background: linear-gradient(
          176deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 43%,
          rgba(220, 237, 255, 1) 100%
        ); */
        flex: 1;
        border-bottom: ${theme.border};

        @media ${theme.mq.desktop} {
          flex: 2;
          border-bottom: none;
          border-right: ${theme.border};
          width: 100%;
        }
      }
    }
  }
`

export const HeroPanel = styled(Flex)`
  height: 100%;
  overflow: visible;
  transition: background-color ${theme.transition.global};

  &:hover {
  }

  .decorator {
    position: absolute;
    top: calc(${theme.space[4]} * 1);
    right: calc(${theme.space[4]} * 1);

    margin-left: auto;
    width: calc(${theme.space[7]} / 1.15);
    z-index: 999;

    @media ${theme.mq.tablet} {
      width: calc(${theme.space[7]} * 1.25);
    }

    &--multi {
      position: absolute;
      top: ${theme.space[4]};
      right: ${theme.space[4]};

      margin-left: auto;
      width: calc(${theme.space[6]} / 1.15);
      z-index: 999;
    }
  }

  .panel {
    position: relative;

    &__inner {
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      overflow: visible;
      width: 100%;

      @media ${theme.mq.tablet} {
        justify-content: space-between;
      }
    }

    &__figure {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;

      .figure {
        @media ${theme.mq.tablet} {
          /* width: 15%; */
        }

        @media ${theme.mq.desktop} {
          /* width: 25%; */
        }

        img {
        }

        &--small {
          width: calc(${theme.space[7]} * 2.25);

          @media ${theme.mq.tablet} {
            width: calc(${theme.space[7]} * 3);
          }

          @media ${theme.mq.desktop} {
            width: calc(${theme.space[7]} * 1.5);
          }
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
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;

      width: 100%;
      position: relative;
      z-index: 9;

      @media ${theme.mq.tablet} {
        display: block;
      }

      .feature-set {
        display: flex;

        position: relative;
        margin-top: ${theme.space[4]};
        width: 100%;
        z-index: 9;

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
        white-space: nowrap;

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
