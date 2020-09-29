// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  align-items: center;
  justify-content: space-between;

  /* background: ${theme.colors.quinary}
  ; */
  border-bottom: ${theme.border};
  height: ${theme.headerHeight};
  position: sticky;
  top: 0;
  z-index: 99;

  @media ${theme.mq.tablet} {
  }

  .header {
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;

      padding: 0 ${theme.space[4]};
    }

    &-logo {
      position: relative;
      top: 3px;
      width: calc(${theme.logoWidth} / 1);

      @media ${theme.mq.tablet} {
      }

      svg {
        fill: ${theme.colors.black};
      }
    }

    &-cta {
      button {
        background: ${theme.colors.quinary};
        border: ${theme.border};
        border-radius: ${theme.space[6]};
        cursor: pointer;
        padding: calc(${theme.space[1]} * 1.5) ${theme.space[4]};

        font-weight: 500;
        text-transform: capitalize;
        transition: background ${theme.transition.global};

        &:hover {
          background: ${theme.colors.black};
          color: ${theme.colors.white};
        }

        &.header--stuck {
          background: ${theme.colors.cta};
          border-color: ${theme.colors.cta};
          color: ${theme.colors.white};
        }
      }
    }

    &-toggle {
      display: flex;
      border-right: ${theme.border};
      color: ${theme.colors.text};
      cursor: pointer;

      height: 100%;
      padding-right: ${theme.space[5]};
      padding-left: ${theme.space[3]};

      @media ${theme.mq.desktop} {
        padding-right: ${theme.space[6]};
      }

      span {
        svg {
          width: 36.18px;
        }
      }
    }

    &-cart {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-left: ${theme.border};
      color: ${theme.colors.text};
      cursor: pointer;

      height: 100%;
      padding-right: ${theme.space[3]};
      padding-left: ${theme.space[5]};

      @media ${theme.mq.desktop} {
        padding-left: ${theme.space[6]};
      }

      span {
        svg {
          width: 24px;
        }
      }
    }
  }
`
