import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const FilterIcon = ({
    width,
    height,
    className,
    color = theme.colors.text.primary,
    styles
}: IconProps) => {
    const DEFAULT_WIDTH = '20';
    const DEFAULT_COLOR = '#f1f1f1';

    return (
        <svg
            fill={color || DEFAULT_COLOR}
            width={width || DEFAULT_WIDTH}
            height={height || DEFAULT_COLOR}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={styles}>
            <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
            </path>
        </svg>
    );
};


