// Pill Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '.'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type PillProps = {
  bg?: string
  color?: string
}

const Pill = styled(Flex)<PillProps>`
  display: flex;
  align-items: center;

  background-color: ${theme.colors.primary};
  border: ${theme.border};
  border-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius};
  
  color: ${theme.colors.white};
  margin-right: ${theme.space[2]};
  padding: ${theme.space[1]} ${theme.space[2]};
  transition: all ${theme.transition.global};

  &:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`

export default Pill
