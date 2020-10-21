// Reviews Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'
import { Grid, Cell } from 'styled-css-grid'

// ___________________________________________________________________

export const Reviews = styled(Section)`
  .review {
    &__card {
      /* background: ${theme.colors.quinary}; */
      border: ${theme.border};
      padding: ${theme.space[4]};
      border-radius: ${theme.borderRadius};

      @media ${theme.mq.tablet} {
        padding: ${theme.space[6]};
      }

      svg {
        path {
        fill: ${theme.colors.goldenrod} !important;
      }
      }

      h3 {
        font-size: calc(${theme.fontSizes[4]} / 1.5);

        @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[4]} / 1.35);
        }
      }

      .lead {
        color: ${theme.colors.primary};
        margin-bottom: 0;
        font-size: calc(${theme.fontSizes[3]} / 1.5);

        @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[3]} / 1.35);
        }
      }
    }

    &__rating {
      margin: ${theme.space[2]} 0 ${theme.space[4]};

      svg {
        width:calc(${theme.space[7]} * 1.25);
      }
    }
  }

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[9]};

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};

        &:hover {
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      bottom: -${theme.space[7]};
      

      @media ${theme.mq.tablet} {
        display: inherit;
      }

      &.swiper-pagination-bullets {
        span {
          cursor: pointer;
          background: ${theme.colors.primary};
          padding: ${theme.space[2]};
          border-radius: 999px;

          @media ${theme.mq.tablet} {
            padding: ${theme.space[3]};
          }
        }
      }
    }
  }
`
