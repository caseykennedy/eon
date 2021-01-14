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
  background-color: ${p => (!p.bg ? theme.colors.primary : p.bg)};

  border-radius: 80px;
  color: ${p => (!p.color ? theme.colors.white : p.color)};
  margin-right: ${theme.space[2]};
  padding: ${theme.space[1]} ${theme.space[4]};

  transition: background-color ${theme.transition.global};

  &:hover,
  &.active {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`

export default Pill
