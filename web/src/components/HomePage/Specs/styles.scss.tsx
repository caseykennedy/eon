// Specs Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'
import { Grid, Cell } from 'styled-css-grid'

// ___________________________________________________________________

export const Specs = styled(Section)`

  .spec {
    &__block {
      flex-wrap: wrap;
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

  .figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 ${theme.space[6]} ${theme.space[7]};

    flex: 1 1 300px;
    max-width: 500px;

    @media ${theme.mq.tablet} {
      margin: 0 ${theme.space[5]} ${theme.space[7]};
    }

    svg {
      height: 200px;
      width: 100%;

      @media ${theme.mq.tablet} {
        height: 280px;
      }
    }

    &-spec {
      width: 100%;
      align-items: center;
      justify-content: center;

      font-size: calc(${theme.fontSizes[2]} * 1.25);
      font-weight: 500;
      line-height: 1.75;

      background: ${theme.colors.white};
      border: ${theme.border};
      /* border-radius: ${theme.space[9]}; */
      margin-top: ${theme.space[4]};
      padding: ${theme.space[1]} 0;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.5);
      }
    }
  }
`
