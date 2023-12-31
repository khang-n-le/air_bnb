// #region Global Imports
import { DefaultTheme } from 'styled-components';
// #endregion Global Imports

const theme: DefaultTheme = {
  /**
   * Font
   */
  font: {
    // family: `'Work Sans', sans-serif`,
    family: `'Open Sans', sans-serif`,
    weight: {
      light: '300',
      normal: '400',
      regular: '500',
      medium: '550',
      bold: '600',
      extraBold: '700',
    },
    size: {
      small: '9px',
      tiny: '11px',
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '22px',
      xl: '34px',
    },
  },

  /**
   * Colors
   */
  colors: {
    black: '#000000',
    white: '#fff',
    success: '#39B54A',
    body: '#F2F3F7',
    price: '#EB403D',

    primary: {
      light: '#ff5c79',
      main: '#FF385C',
      dark: '#E00B41',
      grey: '#F7F7F7',
      contrastText: '#fff',
    },

    secondary: {
      light: '#673191',
      main: '#460479',
      dark: '#320356',
      contrastText: '#fff',
    },

    text: {
      primary: '#222222',
      secondary: '#717171',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      lightGreen: '#7CB305',
      green: '#39B54A',
      red: '#EB403D',
      price: '#F8961E',
      link: '#1890FF',
      orange: '#FF6347',
      white: '#fff',
      main: '#FF385C',
      dark: '#E00B41',
      black: 'black',
    },

    border: {
      light: '#E0E0E0',
      main: '#D9D9D9',
      dark: '#bdbdbd',
    },

    skeleton: {
      background: '#f3f3f3',
      foreground: '#ecebeb',
    },

    navbar: {
      main: 'rgba(57, 181, 74, 0.05)',
      light: 'rgba(57, 181, 74, 0.05)',
    },

    dropdown: {
      main: 'rgba(42, 193, 126, 0.1)',
    },

    error: {
      light: '#e57373',
      main: '#f5222d',
      dark: '#d32f2f',
      contrastText: '#fff',
    },

    warning: '#FFB818',

    info: '#4169E1',

    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },

    red: {
      50: '#fff1f0',
      100: '#ffccc7',
      200: '#ffa39e',
      300: '#ff7875',
      400: '#ff4d4f',
      500: '#f5222d',
      600: '#cf1322',
      700: '#a8071a',
      800: '#820014',
      900: '#5c0011',
    }
  },

  /**
   * Shadows
   */
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 2px 4px rgba(0,0,0,0.18)',
    lg: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
    xl: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },

  /**
   * Breakpoints
   */
  screen: {
    xs: '540px',
    sm: '640px',
    md: '1007px',
    lg: '1100px',
    xl: '1230px',
  },

  /**
   * Spacing
   */
  spacing: {
    none: '0px',
    xxs: '6px',
    xs: '12px',
    sm: '24px',
    md: '36px',
    lg: '48px',
    xl: '60px',
  },

  /**
   * Border radius
   */
  radius: {
    sm: '3px',
    md: '6px',
    lg: '12px',
    xl: '32px',
    xxl: '40px',
  },

  /**
   * z-index.ts
   */
  zIndex: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
  },

  /**
   * Transition
   */
  transition: {
    duration: '0.25s',
  },
};

export { theme };
