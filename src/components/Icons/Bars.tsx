import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const Bars = ({
    width,
    height,
    className,
    color,
    styles
}: IconProps) => {
    const DEFAULT_WIDTH = '20';
    const DEFAULT_COLOR = '#f1f1f1';

    return (
        <svg fill={color || DEFAULT_COLOR} id="Capa_1" enable-background="new 0 0 464.205 464.205" height={height || DEFAULT_WIDTH} viewBox="0 0 464.205 464.205" width={width || DEFAULT_WIDTH} xmlns="http://www.w3.org/2000/svg"><g><g id="grip-solid-horizontal_1_"><path d="m435.192 406.18h-406.179c-16.024 0-29.013-12.99-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013z" /><path d="m435.192 261.115h-406.179c-16.024 0-29.013-12.989-29.013-29.012s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012z" /><path d="m435.192 116.051h-406.179c-16.024 0-29.013-12.989-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" /></g></g></svg>
    );
};
