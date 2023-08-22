import React from 'react'
import { UploadAvatarButton, UploadInput, UploadLabel, UploadLabelContent, UploadLabelIcon, UploadLabelText } from './styled'
import { Camera } from 'components/Icons/Camera'
import { userApi } from 'api/user'
import { useAppDispatch } from 'app/hooks'
import { uploadUserAvatar } from 'slice'

type Props = {
    children: string
}

const UploadAvatar = (props: Props) => {
    const dispatch = useAppDispatch()
    const handleImageChange = (event: any) => {
        console.log(event.target.files[0])
        event.preventDefault()
        dispatch(uploadUserAvatar(event.target.files[0]))
        // const uploadAvatar = async () => {
        //     const formData = new FormData();
        //     formData.append('upload-avatar-input', event.target.files[0])

        // }

        // uploadAvatar()
    }

    return (
        <UploadAvatarButton>
            <UploadInput type='file' accept='image/png, image/jpeg' id='upload-avatar-input' name='upload-avatar-input' onChange={handleImageChange} />
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