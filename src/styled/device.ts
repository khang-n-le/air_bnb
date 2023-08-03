import { theme } from './theme/theme';

export const device = {
  xs: `only screen and (min-width: ${theme.screen.xs})`,
  sm: `only screen and (min-width: ${theme.screen.sm})`,
  md: `only screen and (min-width: ${theme.screen.md})`,
  lg: `only screen and (min-width: ${theme.screen.lg})`,
  xl: `only screen and (min-width: ${theme.screen.xl})`,
};
