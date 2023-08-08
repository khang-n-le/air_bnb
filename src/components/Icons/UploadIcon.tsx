import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const UploadIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      fill={color || DEFAULT_COLOR}
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
    >
      <g fill="none">
        <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path>
      </g>
    </svg>
  );
};
