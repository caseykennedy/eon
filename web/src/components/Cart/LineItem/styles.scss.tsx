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

      input[type='number'] {
        appearance: textfield;
      }
      input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      input {
        margin-right: ${theme.space[2]};
        width: ${theme.space[6]};
      }

      .utilities {
        align-items: center;
        justify-content: space-between;

        .btn-remove {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: ${theme.border};
          border-radius: 999px;
          cursor: pointer;
          outline: none;
          padding: ${theme.space[1]};

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
