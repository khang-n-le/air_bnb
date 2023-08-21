import React from 'react'
import { UploadAvatarButton, UploadInput, UploadLabel, UploadLabelContent, UploadLabelIcon, UploadLabelText } from './styled'
import { Camera } from 'components/Icons/Camera'
import { userApi } from 'api/user'

type Props = {
    children: string
}

const UploadAvatar = (props: Props) => {
    const handleImageChange = (event: any) => {
        console.log(event)

        const uploadAvatar = async (event: any) => {
            try {
                const response = userApi.updateAvatar(event.target.value)

                console.log(response)
            } catch (error) {
                console.log(error)
                throw error
            }
        }

        uploadAvatar(event)
    }

    return (
        <UploadAvatarButton>
            <UploadInput type='file' accept='image/png, image/jpeg' id='upload-avatar-input' onChange={handleImageChange} />
            <UploadLabel htmlFor='upload-avatar-input'>
                <UploadLabelContent>
                    <UploadLabelIcon><Camera width={16} height={16} styles={{ display: 'block' }} /></UploadLabelIcon>
                    <UploadLabelText>{props.children}</UploadLabelText>
                </UploadLabelContent>
            </UploadLabel>
        </UploadAvatarButton>
    )
}

export default UploadAvatar