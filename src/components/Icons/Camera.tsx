import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const Camera = ({
    width,
    height,
    className,
    color = theme.colors.black,
    styles
}: IconProps) => {
    const DEFAULT_WIDTH = '20';
    const DEFAULT_COLOR = '#f1f1f1';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true" role="presentation"
            focusable="false"
            style={styles}
            fill={color || DEFAULT_COLOR}
            width={width || DEFAULT_WIDTH}
            height={height || DEFAULT_COLOR}

        >
            <path d="M17.59 2a2.01 2.01 0 0 1 1.41.59L21.41 5H25a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h3.62L13 2.6a2.01 2.01 0 0 1 1.42-.6zM16 8.5a8.51 8.51 0 0 0 0 17 8.51 8.51 0 0 0 0-17zm0 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm-10-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
        </svg>
    );
};


