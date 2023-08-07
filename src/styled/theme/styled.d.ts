import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: string;
      weight: {
        [key: string]: string;
        regular: string;
        light: string;
        medium: string;
        bold: string;
        extraBold: string;
      };
      size: {
        [key: string]: string;
        tiny: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };

    /**
     * Colors
     */
    colors: {
      black: string;
      white: string;
      success: string;
      body: string;
      price: string;

      primary: {
        [key: string]: string;
        light: string;
        main: string;
        dark: string;
        grey: string;
        contrastText: string;
      };

      secondary: {
        [key: string]: string;
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };

      text: {
        [key: string]: string;
        dark: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        main: string;
      };

      border: {
        light: string;
        main: string;
        dark: string;
      };

      skeleton: {
        background: string;
        foreground: string;
      };

      navbar: {
        main: string;
        light: string;
      };

      dropdown: {
        main: string;
      };

      error: {
        [key: string]: string;
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };

      warning: string;

      info: string;

      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };

    /**
     * Shadows
     */
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    /**
     * Breakpoints
     */
    screen: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    /**
     * Spacing
     */
    spacing: {
      [key: string]: string;
      none: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    /**
     * Border radius
     */
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    /**
     * z-index.tsx
     */
    zIndex: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    /**
     * Transition
     */
    transition: {
      duration: string;
    };
  }
}
