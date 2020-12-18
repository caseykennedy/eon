// Accordion Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex } from '../ui'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled.div<{ borderColor?: string, borderTop?: boolean }>`
  width: 100%;
  position: relative;
  border-bottom: 1px solid ${p => p.borderColor};
  border-top: ${p => !p.borderTop ? 'none' : theme.border};

  /* &:first-child {
    border-top: none;
  } */
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;

  .rotate {
    transform: rotate(45deg);
  }
`

export const AccordionToggle = styled(Flex)<{ bg?: string, colorActive?: string, color?: string }>`
  align-items: center;
  justify-content: space-between;
  background: ${p => p.bg};
  color: ${p => p.color};
  cursor: pointer;

  border: none;
  outline: none;
  transition: background-color ${theme.transition.global};

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    left: 0;
    position: relative;
    transition: all ${theme.transition.global};
  }

  &:hover,
  &.active  {
    /* background: ${darken(0.05, theme.colors.background)}; */
    color: ${p => p.colorActive};

    .title {
      /* left: ${theme.space[2]}; */
    }
  }
`

export const AccordionToggleInner = styled(Flex)`
  flex-direction: column;

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }

  h4 {
    font-weight: 500;
    margin-bottom: 0;

    @media ${theme.mq.desktop} {
    }
  }
`

export const AccordionContent = styled(Box)`
  overflow: hidden;
  transition: max-height ${theme.transition.global};

  .content {
    flex-wrap: wrap;
    border-top: 1px solid ${theme.colors.gray};
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
  }
`

export const Carat = styled(Box)<{ chevronColor?: string, chevronWidth?: string }>`
  /* margin-right: ${theme.space[2]}; */
  transition: transform ${theme.transition.global};

  @media ${theme.mq.tablet} {
    margin-right: ${theme.space[3]};
  }

  svg {
    fill: ${p => p.chevronColor};
    width: ${theme.space[3]};

    @media ${theme.mq.tablet} {
      width: ${p => !p.chevronWidth ? theme.space[6] : p.chevronWidth};
    }
  }
`
