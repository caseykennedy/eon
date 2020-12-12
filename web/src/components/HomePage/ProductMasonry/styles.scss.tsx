// Product Masonry Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const ProductMasonry = styled(Flex)`
  min-height: 333px;

  @media ${theme.mq.tablet} {
    height: calc(
      100vh - calc(${theme.headerHeight} * 2) - ${theme.trademarksHeight}
    );
    max-height: 1024px;
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
        padding: ${theme.space[6]};
      }

      &:hover {
        background: ${lighten(0, theme.colors.white)};
      }

      &--multi-surface {
        flex: 1;
      }

      &--hand-sanitizer {
        flex: 1;
        border-bottom: ${theme.border};

        @media ${theme.mq.desktop} {
          flex: 2;
          border-bottom: none;
          border-right: ${theme.border};
        }
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
  height: 100%;
  overflow: visible;
  position: relative;
  transition: background-color 0.222s ease-in 0s;

  /* &:hover {
    background: ${theme.colors.babyblue};
  } */

  .decorator {
    position: absolute;
    top: 0;
    right: 0;

    margin-left: auto;
    width: calc(${theme.space[7]} / 1.15);

    @media ${theme.mq.tablet} {
      top: calc(${theme.space[4]} * -1);
      right: calc(${theme.space[4]} * -1);
      width: calc(${theme.space[7]} * 1.25);
    }
  }

  .panel {
    &__inner {
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      overflow: visible;
      position: relative;
      width: 100%;

      @media ${theme.mq.tablet} {
        justify-content: space-between;
      }
    }

    &__figure {

      .figure {

        @media ${theme.mq.tablet} {
          width: 15%;
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
      align-items: flex-end;
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

        a {
          color: ${theme.colors.text};
          position: relative;

          &::before {
            content: '';
            background: ${theme.colors.secondary};
            width: 0;
            height: 1px;

            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            z-index: 0;

            transition: width 0.222s ease-in-out;
          }

          &:hover {
            &::before {
              width: 100%;
            }
          }
        }

        svg {
          margin-left: ${theme.space[3]};
          width: ${theme.arrowWidth};
        }
      }
    }
  }
`

export const Disinfectant = styled(Flex)`
  height: 100%;
  overflow: visible;
  position: relative;
  transition: background-color 0.222s ease-in 0s;

  .decorator {
    position: absolute;
    top: 0;
    right: 0;

    margin-left: auto;
    width: calc(${theme.space[7]} / 1.15);

    @media ${theme.mq.tablet} {
      top: calc(${theme.space[4]} * -1);
      right: calc(${theme.space[4]} * -1);
      width: calc(${theme.space[6]} / 1.15);
    }
  }

  .panel {
    &__inner {
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      overflow: visible;
      position: relative;
      width: 100%;

      @media ${theme.mq.tablet} {
        justify-content: space-between;
      }
    }

    &__figure {
      .figure {
        @media ${theme.mq.tablet} {
          /* width: 15%; */
        }

        @media ${theme.mq.desktop} {
          /* width: 25%; */
        }
      }
    }

    &__features {
      align-items: flex-end;
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

        a {
          color: ${theme.colors.text};
          position: relative;

          &::before {
            content: '';
            background: ${theme.colors.secondary};
            width: 0;
            height: 1px;

            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            z-index: 0;

            transition: width 0.222s ease-in-out;
          }

          &:hover {
            &::before {
              width: 100%;
            }
          }
        }

        svg {
          margin-left: ${theme.space[3]};
          width: ${theme.arrowWidth};
        }
      }
    }
  }
`

export const Decorator = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  margin-left: auto;
  width: calc(${theme.space[7]} / 1.15);

  @media ${theme.mq.tablet} {
    top: calc(${theme.space[4]} * -1);
    right: calc(${theme.space[4]} * -1);
    width: calc(${theme.space[7]} * 1.25);
  }
`
