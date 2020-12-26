// Line Item Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

export const LineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: ${theme.space[1]} 0 ${theme.space[4]};

  .line-item {
    &__utilities {
      display: flex;
      justify-content: space-between;
      margin: ${theme.space[3]} 0 0;

      @media ${theme.mq.tablet} {
        margin: ${theme.space[4]} 0 0;
      }

      input {
        background: ${theme.colors.white};
        border: ${theme.border};
        border-radius: ${theme.borderRadius};

        font-size: calc(${theme.fontSizes[2]} * 1.15);
        line-height: 1.25;
        /* text-align: center; */

        margin-right: ${theme.space[1]};
        padding: ${theme.space[1]} ${theme.space[2]};
        width: calc(${theme.space[6]} + 0.5rem);
        touch-action: none;
      }

      .utilities {
        align-items: center;
        justify-content: space-between;

        .btn-update {
          background: ${theme.colors.white};
          border: ${theme.border};
          border-radius: ${theme.borderRadius};

          font-size: ${theme.fontSizes[2]};
          outline: none;
          padding: ${theme.space[1]} ${theme.space[2]};
          cursor: pointer;

          transition: ${theme.transition.all};

          &:active,
          &:hover {
            background: ${theme.colors.quinary};
          }

          &:disabled {
            background: ${theme.colors.white};
            border-color: ${theme.colors.darkgray};
            color: ${theme.colors.darkgray};
          }
        }

        .btn-remove {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: ${theme.border};
          border-radius: 999px;
          cursor: pointer;
          outline: none;
          padding: calc(${theme.space[1]});

          height: calc(${theme.space[3]} * 2.5);
          width: calc(${theme.space[3]} * 2.5);

          transition: background-color ${theme.transition.global};

          div {
            background: ${theme.colors.gray};
            position: relative;
          }

          span {
            transform: rotate(45deg);
            height: calc(${theme.space[3]} * 1.5);
            width: calc(${theme.space[3]} * 1.5);
          }

          &:hover {
            background: ${theme.colors.tertiary};

            svg {
              /* fill: ${theme.colors.white}; */
            }
          }
        }
      }
    }
  }
`
