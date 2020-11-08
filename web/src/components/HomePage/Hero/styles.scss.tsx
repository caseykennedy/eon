// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  height: calc(100vh - calc(${theme.headerHeight} * 2));
  min-height: 600px;
  position: relative;

  @media ${theme.mq.tablet} {
    height: calc(
      100vh - calc(${theme.headerHeight} * 2) - ${theme.trademarksHeight}
    );
  }

  .hero {
    &__inner {
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      /* max-width: ${theme.maxWidth}; */

      @media ${theme.mq.tablet} {
      }
    }

    &__figure {
      position: absolute;
      justify-content: center;
      margin: 0 auto;

      width: 100%;
      z-index: 0;

      

      .figure {
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
  top: ${theme.space[4]};
  right: calc(${theme.space[4]});
  margin-left: auto;
  width: ${theme.space[8]};

  @media ${theme.mq.tablet} {
    top: ${theme.space[5]};
    right: calc(${theme.space[6]} + 8px);
    width: calc(${theme.space[9]});
  }
`
