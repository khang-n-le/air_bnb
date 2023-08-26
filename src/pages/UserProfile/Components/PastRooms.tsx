import React from 'react'
import {
    PastRoomsList,
    UserInfoContainer,
    UserInfoSectionTitle,
    UserInfoSectionTitleBox
} from './styled'
import { CCol, CRow } from '../styled'
import { HomeItem } from 'components'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectBookedRoom } from 'slice/bookingSlice'
import { getAllRoomsThunk, selectRoom } from 'slice'

type Props = {}

const PastRooms = (props: Props) => {
    const dispatch = useAppDispatch()
    const { pastRooms } = useAppSelector(selectBookedRoom)
    const { allRooms } = useAppSelector(selectRoom)
    // const [filteredRooms, setFilteredRooms] = React.useState()
    console.log(pastRooms)
    console.log(allRooms)

    React.useEffect(() => {
        const getAllRooms = async () => {
            await dispatch(getAllRoomsThunk({}));
        }

        getAllRooms()
    }, [])

    React.useEffect(() => {
        const filterRooms = () => {
            const filteredRooms: any[] = []

            if (pastRooms.length !== 0) {
                for (var i = 0; i < pastRooms.length; i++) {
                    for (var j = 0; j < allRooms.length; j++) {
                        if (pastRooms[i]['maPhong'] == allRooms[j]['id']) {
                            filteredRooms.push(pastRooms[i])
                        }
                    }
                }
            }

            return filteredRooms
        }

        filterRooms()
    }, [])

    return (
        <UserInfoContainer>
            <UserInfoSectionTitleBox>
                <UserInfoSectionTitle>Phòng đã đặt</UserInfoSectionTitle>
            </UserInfoSectionTitleBox>
            <PastRoomsList>
                <CRow gutter={16}>
                    <CCol span={8}>
                        <HomeItem
                            roomId=''
                            bedAmount=''
                            numberOfGuests='2'
                            roomName='Tên phòng'
                            roomImage='https://airbnbnew.cybersoft.edu.vn/images/phong5.png'
                            roomPrice='15'
                            arriveDate='Ngày 02'
                            departureDate='Ngày 06 tháng 10'
                        />
                    </CCol>
                    <CCol span={8}>
                        <HomeItem
                            roomId=''
                            bedAmount=''
                            numberOfGuests='2'
                            roomName='Tên phòng'
                            roomImage='https://airbnbnew.cybersoft.edu.vn/images/phong5.png'
                            roomPrice='15'
                            arriveDate='Ngày 02'
                            departureDate='Ngày 06 tháng 10'
                        />
                    </CCol>
                    <CCol span={8}>
                        <HomeItem
                            roomId=''
                            bedAmount=''
                            numberOfGuests='2'
                            roomName='Tên phòng'
                            roomImage='https://airbnbnew.cybersoft.edu.vn/images/phong5.png'
                            roomPrice='15'
                            arriveDate='Ngày 02'
                            departureDate='Ngày 06 tháng 10'
                        />
                    </CCol>
                </CRow>
            </PastRoomsList>
        </UserInfoContainer>
    )
}

export default PastRooms