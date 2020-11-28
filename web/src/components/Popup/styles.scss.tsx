// Popup Styles:

// ___________________________________________________________________

import styled, { createGlobalStyle } from 'styled-components'
import { darken, transparentize } from 'polished'
import { Box, Flex } from '../ui'
import { motion } from 'framer-motion'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const popupWidth = `500px`

export const Popup = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${theme.space[4]};

  background: rgb(0, 0, 0, 0.85);
  backdrop-filter: blur(9px);
  opacity: 0;
  visibility: hidden;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 9999;
  transition: ${theme.transition.all};

  overflow: scroll;
  -webkit-overflow-scrolling: scroll;

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    opacity: 0;
    visibility: hidden;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &.popup--open {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    &__utilities {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.space[3]};
      width: 100%;

      .close-popup {
        display: flex;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;
        margin-left: auto;
        height: 100%;
        padding: 0;
        z-index: 999;

        @media ${theme.mq.tablet} {
        }

        svg {
          margin-left: ${theme.space[2]};
          fill: ${theme.colors.black};
          width: calc(${theme.space[3]} * 1.15);
        }
      }
    }

    &__veil {
      background: ${transparentize(0.25, theme.colors.lightgray)};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export const PopupInner = styled(Flex)`
  background: ${theme.colors.white};
  height: 500px;
  width: 500px;
`

export const Exit = styled(Flex)`
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  height: 100%;
  padding: 0 ${theme.space[3]};
  z-index: 999;

  @media ${theme.mq.tablet} {
  }

  svg {
    width: ${theme.space[4]};
    transform: rotate(45deg);
  }
`

export const GlobalStyles = createGlobalStyle<{ isOpen?: boolean }>`
  html,
  body {
    height: 100%;

    @media (max-width: 400px) {
      overflow: ${p => (p.isOpen ? 'auto' : 'initial')};
      -webkit-overflow-scrolling: touch;
    }
  }
`
