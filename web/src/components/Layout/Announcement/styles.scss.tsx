// Announcement Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { AnimatedFlex, Flex } from '../../ui'
import { motion } from 'framer-motion'
import { transparentize } from 'polished'
import theme from '../../../gatsby-plugin-theme-ui'

import Headroom from 'react-headroom'

// ___________________________________________________________________

const height = theme.headerHeight

export const Announcement = styled(motion.div)`
  display: flex;
  background: ${transparentize(0.1, theme.colors.lightgray)};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${theme.colors.tertiary};
  height: calc(${theme.headerHeight} - 4px);
  max-height: 0;
  width: 100%;

  overflow: hidden;
  opacity: 0;
  top: 0;
  padding: 0 calc(${theme.space[3]});
  
  position: sticky;
  visibility: hidden;
  z-index: 11;

  transition: background-color ${theme.transition.global};

  &:hover {
    background: ${theme.colors.babyblue};
  }

  &.announcement {
    &--open {
      opacity: 1;
      top: ${theme.headerHeight};
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
    justify-content: center;

    color: ${theme.colors.text};
    height: 100%;
    width: 100%;

    &:hover {
      /* color: ${theme.colors.secondary}; */
    }

    svg {
      margin-left: ${theme.space[3]};
      width: 14px;
    }

    .figure {
      justify-content: flex-end;
      margin: 0 ${theme.space[4]};
      padding-top: ${theme.space[5]};


      svg {
        margin-left: ${theme.space[2]};
        width: 24px;
      }
    }
  }

  .swiper-container {
    width: 100%;

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};

        &:hover {
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
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
