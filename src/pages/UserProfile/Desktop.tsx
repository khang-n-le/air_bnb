import React from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getAllRoomsThunk, getUserById, handleChangeWidth, selectAppDevice } from 'slice'
import {
    CCol,
    CRow,
    Container,
    UserProfileSection,
    UserProfileWrapper,
} from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import UserAvatar from './Components/UserAvatar'
import UserInfo from './Components/UserInfo'
import { getLocalStorage } from 'utils'
import PastRooms from './Components/PastRooms'
import { getRoomsByUser } from 'slice/bookingSlice'

type Props = {}

const Desktop = (props: Props) => {
    const appDevice = useAppSelector(selectAppDevice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
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
        const getData = async () => {
            const storedAccount = getLocalStorage('account')

            if (id == storedAccount?.user.id) {
                await dispatch(getRoomsByUser({ id: id }))
                await dispatch(getUserById({ id: id }))
                await dispatch(getAllRoomsThunk({}));
            } else {
                navigate('/')
            }
        }

        getData()

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
                            <PastRooms />
                        </CCol>
                    </CRow>
                </UserProfileWrapper>
            </Container>
        </UserProfileSection>
    )
}

export default Desktop