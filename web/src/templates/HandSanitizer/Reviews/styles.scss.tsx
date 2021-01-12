// Reviews Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'
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
        padding: ${theme.space[5]};
      }

      svg {
        path {
        fill: ${theme.colors.goldenrod} !important;
      }
      }

      .quote {
        font-size: calc(${theme.fontSizes[3]} / 1.5);

        

        @media ${theme.mq.desktop} {
          font-size: calc(${theme.fontSizes[3]});
        }
      }

      .lead {
        color: ${theme.colors.primary};
        margin-bottom: 0;
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
    padding-bottom: ${theme.space[6]};

    @media ${theme.mq.tablet} {
      padding-bottom: ${theme.space[8]};
    }

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};
        height: 100% !important;

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
