// Prime rule :: Mobile-first development/publishing

/** 1rem = 16px */
export const REM = 16;

export const breakpoints = {
  bp320: 320,
  bp768: 768,
  bp1024: 1024,
  bp1440: 1440,
} as const;
export const mobileBreakpoint = breakpoints.bp768;

export const colors = {
  current: 'currentColor',
  transparent: 'transparent',

  /** ? */
  primary: '#',

  /** #111114 */
  black: '#111114',
  /** #36373B */
  almostBlack: '#36373B',
  /** #5B5C61 */
  darkGray: '#5B5C61',
  /** #8A8C91 */
  mediumGray: '#8A8C91',
  /** #B8BCC0 */
  gray: '#B8BCC0',
  /** #E8EAED */
  lightGray: '#E8EAED',
  /** #FFFFFF */
  white: '#FFFFFF',

  /** #D7000D */
  alertRed: '#D7000D',
  /** #4CC92C */
  alertGreen: '#4CC92C',

  blackOpacity8: 'rgba(0 0 0 / 0.08)',
} as const;
