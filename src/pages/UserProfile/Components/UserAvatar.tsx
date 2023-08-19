import React from 'react'
import {
    AvatarBox,
    UserAvatarCard,
    UserName,
    UserNameBox,
    UserRoleBox,
    UserRoleText
} from './styled'
import Avatar from 'components/Avatar'
import UploadAvatar from 'components/UploadAvatar'
import { useAppSelector } from 'app/hooks'
import { selectUser } from 'slice'

type Props = {}

const UserAvatar = (props: Props) => {
    const { user } = useAppSelector(selectUser)

    return (
        <UserAvatarCard>
            <AvatarBox>
                {user?.avatar
                    ? <Avatar src={user?.avatar} size={160}></Avatar>
                    : <Avatar backgroundColor='#222' size={160} fontSize='80px' fontWeight='700'>{user?.name[0].toUpperCase()}</Avatar>
                }
                {user?.avatar
                    ? <UploadAvatar>Chỉnh sửa</UploadAvatar>
                    : <UploadAvatar>Thêm</UploadAvatar>
                }
            </AvatarBox>
            <UserNameBox>
                <UserName>{user?.name === "string" || user?.name.length == 0 ? 'Tên pháp lý' : user?.name}</UserName>
            </UserNameBox>
            <UserRoleBox>
                <UserRoleText>
                    {user?.role === 'USER' || user?.role === '' || user?.role === 'string'
                        ? 'Khách'
                        : 'Quản trị viên'
                    }
                </UserRoleText>
            </UserRoleBox>
        </UserAvatarCard>
    )
}

export default UserAvatar