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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
  }

  p small {
    line-height: 1.45;
    display: inline-block;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.text};
    height: 100%;
    width: 100%;

    &:hover {
      color: ${theme.colors.secondary};
    }

    .figure {
      justify-content: flex-end;
      margin: 0 ${theme.space[4]};
      padding-top: ${theme.space[1]};

      svg {
        width: 32px;
      }
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
