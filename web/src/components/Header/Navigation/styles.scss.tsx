// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'
import { Box, Flex, Text } from '../../ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: flex;

  @media ${theme.mq.desktop} {
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${theme.headerHeight};
    cursor: pointer;
    transition: ${theme.transition.all};

    &:hover {
      .sub-nav {
        display: flex;
        opacity: 1;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 ${theme.space[3]};
      height: 100%;

      &:last-child {
      }

      &.active,
      &:hover {
        color: ${theme.colors.primary};

        /* &::before {
          width: 100%;
        } */
      }
    }

    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${theme.headerHeight};
      padding: 0 ${theme.space[3]};
      position: relative;
      color: ${theme.colors.text};
      transition: ${theme.transition.all};

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          transform: rotate(90deg);
          width: 6px;
          margin-top: -${theme.space[1]};
          margin-left: ${theme.space[2]};
          transition: ${theme.transition.all};
        }
      }

      &:hover {
        /* color: ${theme.colors.tertiary}; */
        svg {
          margin-top: ${theme.space[2]};
        }
      }
    }

    .sub-nav {
      align-items: center;
      /* justify-content: center; */

      background: ${lighten(0, theme.colors.lightgray)};
      border-top: ${theme.border};
      border-bottom: ${theme.border};

      position: absolute;
      top: calc(${theme.headerHeight} - 2px);
      left: 0;

      height: calc(${theme.headerHeight} * 4);
      width: 100%;

      display: none;
      opacity: 0;
      transition: ${theme.transition.all};

      &.is-hovered {
        display: flex;
        opacity: 1;
      }

      a {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;

        padding: ${theme.space[4]};
        height: 100%;

        font-size: calc(${theme.fontSizes[2]});
        
        border-right: ${theme.border};

        &:last-child {
          border-right: none;
        }

        &.active,
        &:hover {
          background: ${theme.colors.babyblue};
          /* color: ${theme.colors.white}; */
        }

        p {
          color: ${theme.colors.text};

          span {
            margin-left: ${theme.space[2]};

            svg {
              width: 14px;
            }
          }
        }

      svg {  
          width: 37px;
        }
      }
    }
  }
`
