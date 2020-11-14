// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { Box, Flex, Heading } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

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
  max-width: ${theme.siteWidth};
  width: ${theme.siteWidth};
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
            font-size: calc(${theme.fontSizes[2]} * 1.25);
            font-weight: 500;
            letter-spacing: 0.5px;
            line-height: 0.5;
            text-transform: capitalize;

            background: ${theme.colors.primary};
            border: none;
            box-shadow: none;
            border-radius: ${theme.borderRadius};
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
        cursor: pointer;

        @media ${theme.mq.tablet} {
          border-top: none;
          border-left: ${theme.border};
        }

        &:hover {
          background: ${theme.colors.babyblue};
        }

        p {
          color: ${theme.colors.text};
        }

        svg {
          width: 56px;
        }
      }
    }
  }
`

export const Footer = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  position: relative;
  width: 100%;
  z-index: 0;

  background: ${theme.colors.white};
  border-top: ${theme.border};
  padding: ${theme.space[4]};

  @media ${theme.mq.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: ${theme.space[4]} ${theme.space[7]};
  }

  .footer {    
    &__links {
      align-items: center;
      justify-content: center;
      margin-bottom: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        justify-content: flex-end;
        margin-bottom: 0;
      }

      a {
        color: ${theme.colors.black};
        margin-left: ${theme.space[4]};
        /* display: none; */

        @media ${theme.mq.tablet} {
          display: inherit;
        }
      }
    }

    &__copyright {
      align-items: center;
      justify-content: center;
    }

    &__contact {
      background-color: ${theme.colors.quinary};
      border: ${theme.border};
      border-radius: ${theme.space[6]};
      
      cursor: pointer;
      outline: none;
      margin-left: ${theme.space[4]};
      padding: calc(${theme.space[1]} * 1.5) ${theme.space[3]};

      font-weight: 500;
      text-transform: capitalize;
      transition: background-color ${theme.transition.global};
      white-space: nowrap;

      @media ${theme.mq.tablet} {
        padding: calc(${theme.space[1]} * 1.5) ${theme.space[4]};
      }

      &:hover {
        background: ${darken(0, theme.colors.cta)};
        color: ${theme.colors.white};
        border-color: ${theme.colors.cta};
      }

      &:active {
        background: ${theme.colors.black};
        color: ${theme.colors.white};
        border-color: ${theme.colors.black};
      }

      &.header--stuck {
        background: ${theme.colors.cta};
        border-color: ${theme.colors.cta};
        color: ${theme.colors.white};

        &:hover {
          background: ${darken(0.08, theme.colors.cta)};
          /* color: ${theme.colors.white}; */
        }

        &:active {
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          border-color: ${theme.colors.black};
        }
      }
    }
  }
`
