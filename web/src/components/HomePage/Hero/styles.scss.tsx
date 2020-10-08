// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled(Section)`
  @media ${theme.mq.tablet} {
  }

  .hero-inner {
    @media ${theme.mq.tablet} {
    }

    .figure {
      position: fixed;
      z-index: 0;

      @media ${theme.mq.tablet} {
      }
    }

    &__features {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      
      width: 100%;
      position: relative;
    }
  }
`

export const Decorator = styled.div`
  position: absolute;
  top: 0;
  right: calc(${theme.space[5]});
  margin-left: auto;
  width: 75px;

  @media ${theme.mq.tablet} {
    top: ${theme.space[5]};
    right: calc(${theme.space[6]} + 15px);
    width: 175px;
  }
`
