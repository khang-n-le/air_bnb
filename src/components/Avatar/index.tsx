import React from 'react'
import { CAvatar } from './styled'

type Props = {
    size?: any,
    icon?: any,
    src?: any,
    children?: string,
    backgroundColor?: string,
    fontSize?: string,
    fontWeight?: string
}

const Avatar = (props: Props) => {
    return (
        <CAvatar
            size={props.size}
            icon={props.icon}
            src={props.src}
            style={{ backgroundColor: props.backgroundColor, fontSize: props.fontSize, fontWeight: props.fontWeight }}>
            {props.children}
        </CAvatar>
    )
}

export default Avatar