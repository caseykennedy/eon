// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { transparentize } from 'polished'

// Arial Narrow
import ArialNarrowEot from './fonts/ArialNarrow.eot'
import ArialNarrowWoff2 from './fonts/ArialNarrow.woff2'
import ArialNarrowWoff from './fonts/ArialNarrow.woff'
import ArialNarrowOtf from './fonts/ArialNarrow.otf'

// DM Sans Bold
import DMSansBoldEot from './fonts/DMSans-Bold.eot'
import DMSansBoldWoff2 from './fonts/DMSans-Bold.woff2'
import DMSansBoldWoff from './fonts/DMSans-Bold.woff'
import DMSansBoldOtf from './fonts/DMSans-Bold.otf'

// DM Sans Italic
import DMSansItalicEot from './fonts/DMSans-Italic.eot'
import DMSansItalicWoff2 from './fonts/DMSans-Italic.woff2'
import DMSansItalicWoff from './fonts/DMSans-Italic.woff'
import DMSansItalicOtf from './fonts/DMSans-Italic.otf'

// DM Sans Medium
import DMSansMediumEot from './fonts/DMSans-Medium.eot'
import DMSansMediumWoff2 from './fonts/DMSans-Medium.woff2'
import DMSansMediumWoff from './fonts/DMSans-Medium.woff'
import DMSansMediumOtf from './fonts/DMSans-Medium.otf'

// DM Sans Medium Italic
import DMSansMediumItalicEot from './fonts/DMSans-MediumItalic.eot'
import DMSansMediumItalicWoff2 from './fonts/DMSans-MediumItalic.woff2'
import DMSansMediumItalicWoff from './fonts/DMSans-MediumItalic.woff'
import DMSansMediumItalicOtf from './fonts/DMSans-MediumItalic.otf'

// DM Sans Regular
import DMSansRegularEot from './fonts/DMSans-Regular.eot'
import DMSansRegularWoff2 from './fonts/DMSans-Regular.woff2'
import DMSansRegularWoff from './fonts/DMSans-Regular.woff'
import DMSansRegularOtf from './fonts/DMSans-Regular.otf'

// ___________________________________________________________________

const Typography = css`
  /* Arial Narrow */
  @font-face {
    font-family: 'Arial Narrow';
    src: url(${ArialNarrowEot});
    src: url(${ArialNarrowWoff2}) format('woff2'),
      url(${ArialNarrowWoff}) format('woff'),
      url(${ArialNarrowOtf}) format('opentype'),
      url(${ArialNarrowEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* DM Sans Regular */
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansRegularEot});
    src: url(${DMSansRegularWoff2}) format('woff2'),
      url(${DMSansRegularWoff}) format('woff'),
      url(${DMSansRegularOtf}) format('opentype'),
      url(${DMSansRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* DM Sans Italic */
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansItalicEot});
    src: url(${DMSansItalicWoff2}) format('woff2'),
      url(${DMSansItalicWoff}) format('woff'),
      url(${DMSansItalicOtf}) format('opentype'),
      url(${DMSansItalicEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /* DM Sans Medium  */
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansMediumEot});
    src: url(${DMSansMediumWoff2}) format('woff2'),
      url(${DMSansMediumWoff}) format('woff'),
      url(${DMSansMediumOtf}) format('opentype'),
      url(${DMSansMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* DM Sans Medium Italic */
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansMediumItalicEot});
    src: url(${DMSansMediumItalicWoff2}) format('woff2'),
      url(${DMSansMediumItalicWoff}) format('woff'),
      url(${DMSansMediumItalicOtf}) format('opentype'),
      url(${DMSansMediumItalicEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  /* DM Sans Bold */
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansBoldEot});
    src: url(${DMSansBoldWoff2}) format('woff2'),
      url(${DMSansBoldWoff}) format('woff'),
      url(${DMSansBoldOtf}) format('opentype'),
      url(${DMSansBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};
    margin: 0 0 ${theme.space[2]};
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.root.font.xl} / 1.5);
    line-height: calc(${theme.root.font.headingLineHeight} / 1);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.xxxl} / 1.75);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.root.font.lg} / 1.1);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.xl} / 1.45);
    }

    @media (min-width: 1280px) {
      font-size: ${theme.root.font.xl};
    }
  }

  h2,
  .text--xl {
    font-size: calc(${theme.root.font.lg} / 1.15);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.lg} * 1.25);
    }
  }

  h3,
  .text--lg {
    font-size: ${theme.root.font.md};

    @media ${theme.mq.tablet} {
      font-size: ${theme.root.font.lg};
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]} / 1.5);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]} / 1.15);
    }
  }

  h5,
  .text--sm {
    font-size: ${theme.fontSizes[1]};
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media ${theme.mq.tablet} {
    }
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 ${theme.space[5]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]} * 1.15);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
  }

  .t--small {
    font-size: calc(${theme.fontSizes[2]});
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .t--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    position: relative;
    z-index: 1;

    transition: ${theme.transition.all};

    color: ${theme.colors.primary};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${theme.colors.text};
    }
  }

  mark {
    background-color: transparent;
    border: 2px solid red;
    padding: 0 calc(${theme.space[1]} / 1.5);
  }

  .t--link {
    position: relative;

    &::before {
      content: '';
      background: ${theme.colors.secondary};
      width: 0;
      height: 6px;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    /* &:hover {
      &::before {
        width: 100%;
      }
    } */

    &:active {
      &::after {
        mix-blend-mode: difference;
      }
    }

    &:hover {
      span {
        margin-left: calc(${theme.space[5]} * 1.5);
      }
    }

    span {
      margin-left: ${theme.space[5]};
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
      }
    }

    h4 {
      display: flex;
    }
  }

  ul {
    margin: 0 0 1.5em 1.15rem;
    list-style-type: disc;

    li {
      list-style-position: outside;
      /* font-size: calc(${theme.root.font.baseSize} / 1); */
      line-height: ${theme.root.font.bodyLineHeight};

      @media ${theme.mq.tablet} {
        /* font-size: calc(${theme.root.font.baseSize} / 1.25); */
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
