import React from 'react'
import { UploadAvatarButton, UploadInput, UploadLabel, UploadLabelContent, UploadLabelIcon, UploadLabelText } from './styled'
import { Camera } from 'components/Icons/Camera'

type Props = {
    children: string
}

const UploadAvatar = (props: Props) => {
    const handleImageChange = (event: any) => {
        console.log(event)
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