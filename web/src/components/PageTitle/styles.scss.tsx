// PageTitle Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'
import Section from '../Section'

// ___________________________________________________________________

export const PageTitle = styled(Section)`
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background: ${theme.colors.black};

  .figure {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;
    width: 100%;

    img {
      /* mix-blend-mode: luminosity; */
    }
  }
`

export const Billboard = styled(Flex)`
  align-items: center;
  flex: 1;

  padding: ${theme.space[6]} ${theme.space[4]};
  position: relative;
  z-index: 9;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]} ${theme.space[5]};
  }

  @media ${theme.mq.desktop} {
    padding: ${theme.space[7]} ${theme.space[6]};
  }
`

export const Figure = styled(Box)`
  position: relative;
  width: 100%;
  background: ${theme.colors.black};
  margin-top: -${theme.space[7]};

  @media ${theme.mq.tablet} {
    margin-top: 0;
  }

  img {
    mix-blend-mode: hard-light;
  }
`
