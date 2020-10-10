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
  padding: ${theme.space[6]};
  position: relative;
  z-index: 1;

  p {
    color: ${theme.colors.darkgray};
    font-weight: 400;
  }

  @media ${theme.mq.tablet} {
    padding: ${theme.space[6]} ${theme.space[10]};
  }
`

export const PreFoot = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: ${theme.colors.background};
  border-top: ${theme.border};
  position: relative;
  z-index: 1;

  .prefoot {
    &-panel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: ${theme.space[6]} ${theme.space[4]};
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

            border: ${theme.border};
            border-radius: ${theme.borderRadius};
            font-size: calc(${theme.fontSizes[2]} * 1.25);
            margin-right: ${theme.space[2]};
            padding: ${theme.space[1]} ${theme.space[3]};
            min-width: 200px;

            @media ${theme.mq.desktop} {
              font-size: calc(${theme.fontSizes[2]} * 1.5);
            }
          }

          button {
            display: flex;
            justify-content: center;

            padding: calc(${theme.space[2]} / 1) ${theme.space[3]};

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
        border-top: ${theme.border};

        @media ${theme.mq.tablet} {
          border-top: none;
          border-left: ${theme.border};
        }

        svg {
          width: 56px;
        }
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 0;

  border-top: ${theme.border};
  padding: ${theme.space[4]} ${theme.space[4]};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[4]} ${theme.space[7]};
  }

  .footer {
    &__links {
      align-items: center;

      .link {
        color: ${theme.colors.black};
        margin-left: ${theme.space[4]};
      }
    }

    &__contact {
      background: ${theme.colors.quinary};
      border: 1px solid ${lighten(0.15, theme.colors.primary)};
      border-radius: 999px;
      color: ${lighten(0.15, theme.colors.primary)};
      cursor: pointer;
      font-weight: 500;
      margin-left: ${theme.space[4]};
      padding: ${theme.space[1]} ${theme.space[3]};

      &:hover,
      &:active {
        background: ${darken(0.05, theme.colors.quinary)};
        color: ${darken(0.15, theme.colors.primary)};
      }
    }
  }
`
