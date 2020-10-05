// Line Item Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'

export const LineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  border-bottom: ${theme.border};
  padding: ${theme.space[4]} 0;
  margin-bottom: ${theme.space[4]};
`
