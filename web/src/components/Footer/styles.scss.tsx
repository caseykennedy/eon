// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { Box, Flex, Heading } from '../ui'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Terms = styled.div`
  background: ${theme.colors.lightgray};
  border-top: ${theme.border};
  color: ${theme.colors.gray};
  padding: ${theme.space[6]} ${theme.space[4]};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[6]} ${theme.space[7]};
  }
`

export const PreFoot = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: ${theme.colors.background};
  border-top: ${theme.border};
  position: relative;
  z-index: 9;

  .prefoot {
    &-panel {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: ${theme.space[4]};
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: column;
        padding: ${theme.space[6]} ${theme.space[7]};
        width: 50%;
      }

      &__newsletter {
        align-items: baseline;

        form {
          display: flex;
          width: 100%;

          input {
            flex: 1;
            margin-right: ${theme.space[2]};
            padding: ${theme.space[1]} ${theme.space[3]};

            font-size: calc(${theme.fontSizes[2]} * 1.25);

            @media ${theme.mq.desktop} {
              font-size: calc(${theme.fontSizes[2]} * 1.5);
            }
          }

          button {
            display: flex;
            justify-content: center;

            padding: calc(${theme.space[2]} / 1) ${theme.space[4]};

            font-family: ${theme.fonts.heading};
            font-size: calc(${theme.fontSizes[2]} * 1.5);
            font-weight: 500;
            letter-spacing: 0.5px;
            line-height: 0.5;
            text-transform: capitalize;

            background: ${theme.colors.primary};
            border: none;
            box-shadow: none;
            border-radius: 6px;
            outline: none;
            cursor: pointer;

            @media ${theme.mq.desktop} {
              font-size: ${theme.fontSizes[3]};
              transition: ${theme.transition.all};
            }

            svg {
              width: 42px;
            }

            &:hover {
              background: ${darken(0.05, theme.colors.cta)};
            }

            &:active {
              background: ${theme.colors.black};
              color: ${theme.colors.white};
              border-color: ${theme.colors.black};
            }
          }
        }
      }

      &__usa {

        svg {
          width: 56px;
        }

        @media ${theme.mq.tablet} {
          border-left: ${theme.border};
        }
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  border-top: ${theme.border};
  padding: ${theme.space[4]} ${theme.space[4]};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[4]} ${theme.space[7]};
  }
`
