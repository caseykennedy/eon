// Theme / Design system:

// Types
// ___________________________________________________________________

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: {
    [key: string]: string | number | number[]
  }
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  arrowWidth: string
  strokeWidth: string
  maxWidth: string
  readingWidth: string
  siteWidth: string
  logoWidth: string
  headerHeight: string
  trademarksHeight: string
  scrollOffset: string
  iconWidth: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  borderRadius: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    font: {
      [key: string]: string
    }
    space: {
      [key: string]: string
    }
  }
}

// Begin theme
// ___________________________________________________________________

const breakpoints: string[] = ['768px', '1100px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    // Standard Colors
    black: '#09040b',
    white: '#ffffff',

    text: '#09040b',
    background: '#ffffff',
    cta: '#39b14a',

    primary: '#1554c2',
    secondary: '#09040b',
    tertiary: '#9D9FA2',
    quaternary: '#C4C4c4',
    quinary: '#dcedff',

    // Theme colors
    lightgray: '#F1F1F1',
    gray: '#C4C4c4',
    darkgray: '#696d6d',
    darknight: '#09040b',
    babyblue: '#dcedff',
    skyblue: '#1554c2',
    cosmicblue: '#97b9ff',
    moneygreen: '#39b14a',
    yellowbuzz: '#F1E554',
    goldenrod: '#daa520',
    mossgreen: '#f3fdf4'
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0',                     // 0
    'var(--space-xxs)',      // 1
    'var(--space-xs)',       // 2
    'var(--space-sm)',       // 3
    'var(--space-md)',       // 4
    'var(--space-lg)',       // 5
    'var(--space-xl)',       // 6
    'var(--space-xxl)',      // 7
    '7rem',                  // 8
    '10rem',                 // 9
    '12rem',                 // 10
    '14rem',                 // 11
    '16rem',                 // 12
    '18rem'                  // 13
  ],

  // Left/Right gutter
  gutter: {
    tablet: 5,
    desktop: 6,
    axis: [4, 5, 6]
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    legal: `"Arial Narrow", Consolas, Liberation Mono, Menlo, Courier, monospace`
  },

  fontSizes: [
    'var(--text-xs)',              // 0
    'var(--text-sm)',              // 1
    'var(--text-base-size)',       // 2
    'var(--text-md)',              // 3
    'var(--text-lg)',              // 4
    'var(--text-xl)',              // 5
    'var(--text-xxl)',             // 6
    'var(--text-xxxl)'             // 7
  ],

  Heading: {
    lineHeight: 'var(--heading-line-height)'
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700
  },

  arrowWidth: '14px',
  strokeWidth: '2px',
  maxWidth: '1440px',
  readingWidth: '800px',
  siteWidth: '100%',
  logoWidth: '70px',
  headerHeight: '52px',
  trademarksHeight: '78px',
  scrollOffset: '104px',
  iconWidth: '18px',

  // Base
  // ___________________________________________________________________

  grid: {
    gap: '0.5rem'
  },

  transition: {
    all: 'all 0.111s ease-in-out 0s',
    global: '0.111s ease-in-out 0s'
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)'
    }
  },

  border: '1px solid #9D9FA2',
  borderRadius: '3px',
  shadow: '2rem 1.5rem 1rem #9D9FA2',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',

      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    },
    space: {
      xxs: 'var(--space-xxs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      xxl: 'var(--space-xxl)'
    }
  }
}

export default theme
