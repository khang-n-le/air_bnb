import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const SearchIcon = ({
    width,
    height,
    className,
    styles,
    color,
}: IconProps) => {
    const DEFAULT_WIDTH = '20';
    const DEFAULT_COLOR = '#f1f1f1';

    return (
        <svg
            fill={color || DEFAULT_COLOR}
            width={width || DEFAULT_WIDTH}
            height={height || DEFAULT_COLOR}
            style={styles}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
        >
            <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z">
            </path>
        </svg>
    );
};
