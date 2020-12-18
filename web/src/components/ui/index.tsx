// Elements:
// Box and Flex layout components using Styled System

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'
import { darken, transparentize } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

import {
  space,
  color,
  width,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  textAlign,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  maxWidth,
  display,
  position,
  overflow,
  SpaceProps,
  ColorProps,
  WidthProps,
  FlexProps,
  AlignSelfProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  TextAlignProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
  MaxWidthProps,
  DisplayProps,
  PositionProps,
  OverflowProps
} from 'styled-system'

// ___________________________________________________________________

// Box

type ElementProps = SpaceProps &
  WidthProps &
  ColorProps &
  FlexProps &
  AlignSelfProps &
  TextAlignProps &
  FontFamilyProps &
  FontSizeProps &
  MaxWidthProps &
  DisplayProps &
  PositionProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps &
  FontWeightProps &
  LineHeightProps &
  LetterSpacingProps &
  OverflowProps

export const Box = styled.div<ElementProps>`
  box-sizing: border-box;
  height: auto;
  /* transition: ${theme.transition.all}; */

  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`

Box.displayName = 'Box'

export const AnimatedBox = styled(animated.div)<ElementProps>`
  box-sizing: border-box;

  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`

AnimatedBox.displayName = 'AnimatedBox'

// Flexbox

export const Flex = styled.div<ElementProps>`
  display: flex;
  box-sizing: border-box;
  height: auto;

  ${space}
  ${width}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

Flex.displayName = 'Flex'

export const AnimatedFlex = styled(animated.div)<ElementProps>`
  display: flex;

  ${space}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

AnimatedFlex.displayName = 'AnimatedFlex'

// Typography

export const Heading = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition: ${theme.transition.all};

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`

Heading.displayName = 'Heading'

// export const HeadingStroked = styled(Heading)<ElementProps>`
//   -webkit-text-fill-color: ${theme.colors.background};
//   -webkit-text-stroke-width: ${theme.strokeWidth};
//   -webkit-text-stroke-color: ${theme.colors.text};
// `

// Box.displayName = 'HeadingStroked'

export const Text = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition: ${theme.transition.all};

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`

Text.displayName = 'Text'

export const Button = styled.button<ElementProps>`
  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.space[2]} 0 ${theme.space[2]} 0;
  width: 100%;

  color: ${theme.colors.tertiary};
  font-size: calc(${theme.fontSizes[2]} * 1);

  background: transparent;
  border: none;
  border-bottom: ${theme.border};
  border-color: ${theme.colors.tertiary};
  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.desktop} {
    font-size: calc(${theme.fontSizes[2]} * 1.25);
    padding: ${theme.space[3]} 0 ${theme.space[3]} 0;
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
        width: ${theme.space[4]};
      }
    }
  }

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};

    span {
      right: 0;

      svg {
        fill: ${theme.colors.primary};
      }
    }
  }

  &:disabled {
    background: ${theme.colors.white};
    border-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  &:active {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};
  }

  .inner {
  }

  .smiley {
    display: block;
    margin-left: ${theme.space[3]};
    /* width: calc(${theme.space[5]}); */
  }

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`

Button.displayName = 'Button'

// ___________________________________________________________________
// End Component
