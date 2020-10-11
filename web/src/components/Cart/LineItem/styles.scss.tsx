// Line Item Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'

export const LineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: ${theme.space[4]} 0;

  .line-item {
    &__utilities {
      display: flex;
      justify-content: space-between;
      margin: ${theme.space[4]} 0;

      input {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
        margin-right: ${theme.space[2]};
        padding: ${theme.space[1]} ${theme.space[2]};
        width: ${theme.space[6]};

        @media ${theme.mq.tablet} {
          width: ${theme.space[7]};
        }
      }

      .utilities {
        align-items: center;
        justify-content: space-between;

        .btn-update {
          background: transparent;
          border: ${theme.border};
          border-radius: ${theme.borderRadius};
          outline: none;
          padding: ${theme.space[1]} calc(${theme.space[3]});
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

          height: calc(${theme.space[3]} * 2.15);
          width: calc(${theme.space[3]} * 2.15);

          transition: background-color 0.222s ease-in-out;

          &:hover {
            background: ${theme.colors.quinary};
          }

          svg {
            transform: rotate(45deg);
            height: calc(${theme.space[3]} * 1.5);
            width: calc(${theme.space[3]} * 1.5);
          }
        }
      }
    }
  }
`
