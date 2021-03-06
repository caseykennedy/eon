// Specs Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'
import { Grid, Cell } from 'styled-css-grid'

// ___________________________________________________________________

export const Specs = styled(Section)`
  .spec {
    &__wrapper {
      margin: 0 auto;
      max-width: 1200px;
    }

    &__block {
      flex-wrap: wrap;
      justify-content: space-between;

      

      .decorator {
        justify-content: flex-end;
        overflow: visible;
        height: ${theme.space[5]};

        &--features {
          justify-content: flex-end;
          overflow: visible;
          height: 0;

          img {
            position: relative;
            top: calc(${theme.space[6]} * -2);

            @media ${theme.mq.tablet} {
              top: 0;
            }
          }
        }

        &--abstract {
          justify-content: flex-end;
          overflow: visible;
          height: 0;

          img {
            position: relative;
            top: calc(${theme.space[6]});
            
            @media ${theme.mq.tablet} {
              top: 0;
            }
          }
        }

        &--spray {
          justify-content: flex-end;
          overflow: visible;
          height: 0;

          img {
            position: relative;
            top: calc(${theme.space[6]} * -2);
            right: calc(${theme.space[6]} * -2);

            @media ${theme.mq.tablet} {
              right: calc(${theme.space[6]} * -2);
            }

            @media ${theme.mq.desktop} {
              right: calc(${theme.space[6]} * -4);
            }
          }
        }

        &--hch {
          justify-content: flex-end;
          overflow: visible;
          height: 0;

          img {
            position: relative;
            right: calc(${theme.space[6]} * -1);
            right: calc(${theme.space[6]} * -2);

            @media ${theme.mq.tablet} {
              top: calc(${theme.space[7]} * 2);
              right: calc(${theme.space[6]} * -2);
            }
          }
        }
      }
    }
  }

  .deco-feature-icons {
    justify-content: flex-end;
    flex-wrap: wrap;
    position: absolute;
    top: ${theme.space[0]};
    right: ${theme.space[5]};
    width: ${theme.space[6]};

    @media ${theme.mq.tablet} {
      width: ${theme.space[10]};
    }

    &__spray {
      position: absolute;
      top: calc(${theme.space[10]} * 2);
      right: ${theme.space[5]};
      width: ${theme.space[6]};

      @media ${theme.mq.tablet} {
        width: ${theme.space[10]};
      }
    }
  }

  h3 {
    /* font-size: calc(${theme.fontSizes[3]} * 1);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[4]} * 1.15);
    } */

    span {
      svg {
        height: calc(${theme.space[4]} / 1.25);
        position: relative;
        top: 8px;

        @media ${theme.mq.tablet} {
          height: calc(${theme.space[4]} / 1.15);
        }
      }
    }
  }
`

export const Gradient = styled(Box)`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    176deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 43%,
    rgba(220, 237, 255, 1) 100%
  );
  border-radius: 0 0 ${theme.space[6]} 0;

  @media ${theme.mq.tablet} {
    border-radius: 0 0 ${theme.space[7]} 0;
  }
`

export const Features = styled(Box)`
  .feature {
    margin-bottom: ${theme.space[4]};
    width: 100%;
  }
`

export const HowTo = styled(Flex)`
  justify-content: center;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
    flex-wrap: nowrap;
  }

  .figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 ${theme.space[5]} ${theme.space[5]};

    flex: 1 1 280px;
    max-width: 300px;

    @media ${theme.mq.tablet} {
      margin: 0 ${theme.space[3]} 0;
      max-width: 400px;
    }

    svg {
      height: 150px;
      width: 100%;

      @media ${theme.mq.tablet} {
        height: 140px;
      }

      @media ${theme.mq.desktop} {
        height: 200px;
      }
    }

    &__spec {
      width: 100%;
      align-items: center;
      justify-content: center;

      font-size: calc(${theme.fontSizes[2]} * 1.15);
      font-weight: 500;
      line-height: 1.75;

      background: ${theme.colors.white};
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      margin-top: ${theme.space[4]};
      padding: ${theme.space[1]} 0;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.15);
      }

      @media ${theme.mq.desktop} {
        font-size: calc(${theme.fontSizes[2]} * 1.5);
      }

      &__block {
        width: 100%;
      }
    }

    &__caption {
      margin: ${theme.space[3]} 0 0 0;
      text-align: center;
    }
  }
`
