// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// ___________________________________________________________________

export const Header = styled(Flex)`
  border-bottom: 1px solid #eaeaea;

  @media ${theme.mq.tablet} {
  }
`

export const Logo = styled(Box)`
  width: calc(${theme.logoWidth} / 1.75);

  @media ${theme.mq.tablet} {
    font-size: 1.4rem;
    width: ${theme.logoWidth};
  }

  svg {
    fill: ${theme.colors.black};
  }
`

export const Tools = styled(Flex)`
`

export const Nav = styled(Flex)`
  @media ${theme.mq.desktop} {
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  padding: ${theme.space[5]};

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${theme.mq.desktop} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
