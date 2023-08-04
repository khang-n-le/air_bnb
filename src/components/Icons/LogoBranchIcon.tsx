import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const LogoBranchIcon = ({
                                width,
                                height,
                                className,
                                color = theme.colors.primary.main,
                              }: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = "#f1f1f1"

  return (
    <svg
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_COLOR}
      viewBox="0 0 24 24"
      fill={color || DEFAULT_COLOR}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Layer_2" data-name="Layer 2">
        <path d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm5 12h-4v4a1 1 0 0 1 -2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2z" />
      </g>
    </svg>
  );
};
