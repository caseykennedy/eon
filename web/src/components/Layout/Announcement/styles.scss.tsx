// Announcement Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { AnimatedFlex, Flex } from '../../ui'
import { motion } from 'framer-motion'
import theme from '../../../gatsby-plugin-theme-ui'

import Headroom from 'react-headroom'

// ___________________________________________________________________

const height = theme.headerHeight

export const Announcement = styled(motion.div)`
  display: flex;
  background: ${theme.colors.lightgray};
  height: ${height};
  max-height: 0;
  opacity: 0;
  top: 0;
  padding: 0 calc(${theme.space[3]});
  position: relative;
  visibility: hidden;

  &.announcement {
    &--open {
      opacity: 1;
      top: 0;
      visibility: visible;
      max-height: ${height};
    }
  }

  p {
    align-items: center;
  }

  p small {
    line-height: 1.25;
    display: inline-block;
  }

  .figure {
    float: right;
    margin-right: ${theme.space[4]};
    height: 56px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.text};
    width: 100%;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`

export const Exit = styled(Flex)`
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  height: 100%;
  padding: 0 ${theme.space[3]};
  z-index: 9;

  @media ${theme.mq.tablet} {
  }

  svg {
    width: ${theme.space[4]};
    transform: rotate(45deg);
  }
`
