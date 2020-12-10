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

    text-transform: capitalize;
    margin-left: ${theme.space[4]};
    /* position: relative; */
    cursor: pointer;

    transition: ${theme.transition.all};

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      .sub-nav {
        display: flex;
        opacity: 1;
        transition: ${theme.transition.all};
      }
    }

    a {
      &.active,
      &:hover {
        color: ${theme.colors.tertiary};

        /* &::before {
          width: 100%;
        } */
      }
    }

    &__title {
      display: flex;
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
        }
      }
    }

    .sub-nav {
      align-items: center;
      justify-content: center;

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

      a {
        color: ${theme.colors.text};
        font-family: ${theme.fonts.body};
        font-size: calc(${theme.fontSizes[3]});
        letter-spacing: 0.5px;

        display: block;
        margin: 0 ${theme.space[4]};
        padding: calc(${theme.space[1]} / 2) 0;
        white-space: nowrap;

        &.active,
        &:hover {
          /* background: ${theme.colors.primary}; */
          color: ${theme.colors.white};
        }
      }
    }
  }
`

export const SignIn = styled(Link)`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  height: ${theme.headerHeight};
  padding: 0 ${theme.space[4]};
  border-left: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[2]} ${theme.space[4]};
  }

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.bloodshot};
  }
`
