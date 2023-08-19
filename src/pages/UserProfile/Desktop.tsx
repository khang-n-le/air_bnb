import React from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getUserById, handleChangeWidth, selectAppDevice, selectUser } from 'slice'
import {
    CCol,
    CRow,
    Container,
    UserProfileSection,
    UserProfileWrapper,
} from './styled'
import Avatar from 'components/Avatar'
import { Upload } from 'antd'
import UploadAvatar from 'components/UploadAvatar'
import { useParams } from 'react-router-dom'
import UserAvatar from './Components/UserAvatar'
import UserInfo from './Components/UserInfo'

type Props = {}

const Desktop = (props: Props) => {
    const appDevice = useAppSelector(selectAppDevice)
    const dispatch = useAppDispatch()
    const { id } = useParams()

    React.useEffect(() => {
        dispatch(
            handleChangeWidth({
                maxWidth: '1440px',
                paddingLeft: '80px',
                paddingRight: '80px',
            })
        );
    }, [])

    React.useEffect(() => {
        const getUser = async () => {
            await dispatch(getUserById({ id: id }))
        }

        getUser()
    }, [id])

    return (
        <UserProfileSection>
            <Container>
                <UserProfileWrapper>
                    <CRow gutter={80}>
                        <CCol span={8}>
                            <UserAvatar />
                        </CCol>
                        <CCol span={16}>
                            <UserInfo />
                        </CCol>
                    </CRow>
                </UserProfileWrapper>
            </Container>
        </UserProfileSection>
    )
}

export default Desktop