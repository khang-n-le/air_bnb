import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const FacebookSquareIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      fill={color || DEFAULT_COLOR}
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-label="Chuyển tới Facebook"
      role="img"
      focusable="false"
    >
      <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
      <path
        fill="#fff"
        d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"
      ></path>
    </svg>
  );
};
