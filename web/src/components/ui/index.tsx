// Elements:
// Box and Flex layout components using Styled System

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'
import { darken } from 'polished'

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
  display: block;
  transition: ${theme.transition.all};

  display: flex;
  justify-content: center;
  
  padding: calc(${theme.space[3]} / 1.15) ${theme.space[4]};
  max-width: 400px;

  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: calc(${theme.fontSizes[2]} * 1.5);
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: capitalize;

  background: ${theme.colors.cta};
  border: ${theme.border};
  border-color: ${theme.colors.cta};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};

  @media ${theme.mq.desktop} {
    width: calc(${theme.space[7]} * 4);
    font-size: ${theme.fontSizes[3]};
  }

  &:hover {
    background: ${darken(0.05, theme.colors.cta)};
    color: ${theme.colors.white};

    span {
      margin-right: 0;

      svg {
        fill: ${theme.colors.white};
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

  span {
    margin-right: ${theme.space[3]};
    transition: ${theme.transition.all};

    svg {
      width: ${theme.iconWidth};
      fill: ${theme.colors.white};
    }
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
