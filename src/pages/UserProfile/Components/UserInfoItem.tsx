import React from 'react'
import {
    UserInfoContent,
    UserInfoContentBox,
    UserInfoItemButton,
    UserInfoItemButtonBox,
    UserInfoItemText,
    UserInfoItemTextBox,
    UserInfoItemTitle,
    UserInfoItemTitleBox,
    UserInfoItemWrapper,
} from './styled'

type Props = {
    id: string,
    title: string,
    subtitle?: string,
    children: any,
    isUpdating: boolean,
    onChangeUpdateState: (event: any) => void,
    disabled: boolean
}

const UserInfoItem = (props: Props) => {

    return (
        <UserInfoItemWrapper>
            <UserInfoContentBox>
                <UserInfoContent>
                    <div className={props.disabled ? 'disabled' : ''}>
                        <UserInfoItemTitle>
                            {props.title}
                        </UserInfoItemTitle>
                    </div>
                    <div className={props.disabled ? 'disabled' : ''}>
                        <UserInfoItemText>
                            {props.subtitle}
                        </UserInfoItemText>
                    </div>
                </UserInfoContent>
                <UserInfoItemButtonBox>
                    <UserInfoItemButton
                        onClick={props.onChangeUpdateState}
                        id={props.id}
                        disabled={props.disabled}
                    >
                        {props.isUpdating ? 'Hủy' : 'Chỉnh sửa'}
                    </UserInfoItemButton>
                </UserInfoItemButtonBox>
            </UserInfoContentBox>
            {props.children}
        </UserInfoItemWrapper>
    )
}

export default UserInfoItem