// Section:
// Global Section component

// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import { Box, Flex } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  bg?: string
  border?: boolean
  children: React.ReactNode
  className?: string
  color?: string
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
    width={width}
    overflow={overflow}
    className={className}
  >
    <Box width={1} pr={pr} pl={pl} m="0 auto">
      {children}
    </Box>
  </S.Section>
)

export default Section

// ___________________________________________________________________

const defaultProps = {
  pt: theme.gutter.axis,
  pb: theme.gutter.axis,
  pr: [4, 7],
  pl: [4, 7],
  width: 1
}

Section.defaultProps = defaultProps
