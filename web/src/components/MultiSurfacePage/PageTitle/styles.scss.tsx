// PageHero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const PageTitle = styled(Flex)`
  /* min-height: 580px; */
  height: 100%;
  padding-top: ${theme.space[5]};
  padding-bottom: ${theme.space[5]};
  position: relative;
  overflow: hidden;

  @media ${theme.mq.tablet} {
    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[6]};
  }

  .hero {
    &__inner {
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      /* justify-content: space-between; */
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }
    }

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      flex: 1;
      height: 100%;

      h1 {
        margin-bottom: 0;
      }

      .rating {
        display: flex;
        align-items: center;
        margin: ${theme.space[2]} 0 ${theme.space[5]};

        span {
          font-size: ${theme.fontSizes[1]};
          margin-left: ${theme.space[2]};
        }

        svg {
          width:calc(${theme.space[7]} * 1.15);
        }
      }
    }

    &__can {
      flex: 1;
      align-items: flex-start;
      justify-content: center;
      /* margin-bottom: ${theme.space[6]}; */
      position: relative;

      @media ${theme.mq.tablet} {
        /* margin-top: calc(${theme.space[5]} * -1); */
        margin-bottom: 0;
        /* padding-top: ${theme.space[4]}; */
        /* padding-bottom: ${theme.space[4]}; */
      }

      .figure {
        max-width: 250px;
        width: 100%;

        @media ${theme.mq.tablet} {
          max-width: 375px;
        }
      }
    }

    &__details {
      flex-direction: column;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex: 1;
      height: 100%;
      width: 100%;
      
      img {
        width: ${theme.space[5]};

        @media ${theme.mq.tablet} {
          left: calc(${theme.space[6]});
          width: calc(${theme.space[6]} / 1.25);
        }
      }
    }
  }
`

export const Button = styled(Flex)`
  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: calc(${theme.space[3]}) ${theme.space[4]};
  width: 100%;

  color: ${theme.colors.white};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 500;
  letter-spacing: 1px;
  /* line-height: 1; */
  text-transform: uppercase;

  background: ${theme.colors.primary};
  border: ${theme.border};
  border-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius};

  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.tablet} {
    width: initial;
  }

  span {
    font-size: calc(${theme.fontSizes[1]});

    margin-left: ${theme.space[4]};
    transition: ${theme.transition.all};

    position: relative;

    /* display: none; */

    @media ${theme.mq.tablet} {
      display: block;
      margin-left: ${theme.space[7]};
      /* right: ${theme.space[2]}; */
    }

    @media ${theme.mq.desktop} {
      margin-left: ${theme.space[9]};
    }

    svg {
      width: calc(${theme.space[4]} * 1.25);
      fill: ${theme.colors.white};

      @media ${theme.mq.desktop} {
        width: calc(${theme.space[5]} / 1);
      }
    }
  }

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
    color: ${theme.colors.white};

    span {
      right: 0;

      svg {
        fill: ${theme.colors.white};
      }
    }
  }

  &:disabled {
    background: ${theme.colors.black};
    border-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }

  &:active {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};
  }

  .inner {
  }

  .smiley {
    display: block;
    margin-left: ${theme.space[3]};
    /* width: calc(${theme.space[5]}); */
  }
`

export const Decorator = styled.div`
  position: absolute;
  top: ${theme.space[4]};
  right: calc(${theme.space[4]});
  margin-left: auto;
  width: ${theme.space[5]};

  @media ${theme.mq.tablet} {
    top: ${theme.space[6]};
    right: calc(${theme.space[6]});
    width: calc(${theme.space[6]} / 1.25);
  }
`
