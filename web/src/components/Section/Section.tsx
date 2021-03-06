// Section:
// Global Section component

// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import { Box, Flex } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  bg?: string
  border?: boolean
  children: React.ReactNode
  className?: string
  color?: string
  maxWidth?: number | number[] | string | string[]
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  id?: string
  width?: number | number[] | string | string[]
  overflow?: string
}

const Section: React.FC<Props> = ({
  bg,
  border,
  children,
  className,
  color,
  maxWidth,
  pt,
  pb,
  pr,
  pl,
  id,
  width,
  overflow
}) => (
  <S.Section
    as="section"
    border={border}
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    id={id}
    overflow={overflow}
    width={width}
    className={className}
  >
    <Box
      pr={pr}
      pl={pl}
      m="0 auto"
      maxWidth={maxWidth}
      style={{ boxSizing: 'content-box' }}
    >
      {children}
    </Box>
  </S.Section>
)

export default Section

// ___________________________________________________________________

const defaultProps = {
  pt: [4, 5, 6],
  pb: [4, 5, 6],
  pr: theme.gutter.axis,
  pl: theme.gutter.axis,
  width: 1
}

Section.defaultProps = defaultProps
