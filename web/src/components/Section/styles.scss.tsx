// Section Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'
import { Box } from '../ui'

// ___________________________________________________________________

export const Section = styled(Box)<{ border?: boolean; overflow?: string }>`
  border-top: ${p => (!p.border ? 'none' : `${theme.border}`)};
  position: relative;
  overflow: ${p => (!p.overflow ? 'visible' : p.overflow)};

  .cta {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9;

    @media ${theme.mq.tablet} {
      right: ${theme.space[7]};
    }
  }
`
