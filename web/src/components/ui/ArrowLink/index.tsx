// Anchor Link Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from '..'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const ArrowLink = styled(Box)`
  float: left;

  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0 ${theme.space[2]} 0;
  width: initial;

  color: ${theme.colors.tertiary};

  background: transparent;
  border: none;
  /* border-bottom: ${theme.border};
  border-color: transparent; */
  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.desktop} {
    padding: ${theme.space[3]} 0 ${theme.space[2]} 0;
  }

  &::after {
    background: ${theme.colors.primary};
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 0;
    transition: width 0.222s ease-in-out 0s;
  }

  span {
    margin-left: ${theme.space[4]};
    transition: ${theme.transition.all};

    position: relative;

    /* display: none; */

    @media ${theme.mq.tablet} {
      display: block;
      margin-left: ${theme.space[7]};
      right: ${theme.space[2]};
    }

    @media ${theme.mq.desktop} {
      margin-left: ${theme.space[6]};
    }

    svg {
      width: ${theme.space[4]};
      fill: ${theme.colors.tertiary};

      @media ${theme.mq.desktop} {
        width: 16px;
      }
    }
  }

  /* &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};

    span {
      right: 0;

      svg {
        fill: ${theme.colors.primary};
      }
    }
  } */

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};

    &::after {
      width: 100%;
    }

    span {
      right: 0;

      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
`

export default ArrowLink
