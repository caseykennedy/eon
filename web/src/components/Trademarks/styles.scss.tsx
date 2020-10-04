// Trademarks styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../ui'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Trademarks = styled(Flex)`
  border-bottom: ${theme.border};
  padding-bottom: ${theme.space[2]};

  .mark {
    &__fda {
      border-right: ${theme.border};
      padding-right: ${theme.space[3]};
      margin-right: ${theme.space[3]};
    }

    &__tsa {
      margin-right: ${theme.space[8]};
    }
  }

  img {
    height: ${theme.space[5]};
  }

  @media ${theme.mq.tablet} {
  }
`
