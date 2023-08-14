import React from 'react'
import { CAvatar } from './styled'

type Props = {
    size?: any,
    icon?: any,
    src?: any,
    children?: string,
    backgroundColor?: string
}

const Avatar = (props: Props) => {
    return (
        <CAvatar
            size={props.size}
            icon={props.icon}
            src={props.src}
            style={{ backgroundColor: props.backgroundColor }}>
            {props.children}
        </CAvatar>
    )
}

export default Avatar