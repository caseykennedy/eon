// AddToCart Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Button, Box } from '../ui'

// ___________________________________________________________________

export const AddToCart = styled.button`
  
`

export const TextLink = styled(Box)`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
