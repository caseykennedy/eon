// Trademarks styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const SocialLinks = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;

  background: ${theme.colors.white};
  border-top: ${theme.border};
  position: relative;
  z-index: 9;

  .mark {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-right: ${theme.border};
    cursor: pointer;
    padding: ${theme.space[5]} 0;
    white-space: nowrap;
    transition: background-color 0.222s ease-in-out 0s;

    &:nth-child(3) {
      border-right: none;
    }

    @media ${theme.mq.tablet} {
      border-bottom: none !important;

      &:nth-child(2) {
        border-right: ${theme.border};
      }
    }

    p {
      color: ${theme.colors.black};
      letter-spacing: 0.25px;
      font-size: calc(${theme.fontSizes[1]} / 1);
      margin-top: ${theme.space[2]};
    }

    svg {
      fill: ${theme.colors.gray};
      width: 24px;
      transition: fill 0.222s ease-in-out 0s;

      @media ${theme.mq.tablet} {
        width: 24px;
      }
    }

    &:hover {
      background: ${theme.colors.babyblue};

      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
`
