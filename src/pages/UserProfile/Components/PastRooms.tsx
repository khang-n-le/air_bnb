import React, { useState } from 'react'
import {
    PastRoomsList,
    UserInfoContainer,
    UserInfoSectionTitle,
    UserInfoSectionTitleBox
} from './styled'
import { CCol, CRow } from '../styled'
import { HomeItem } from 'components'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectBookedRoom, setFilteredPastRooms } from 'slice/bookingSlice'
import { getAllRoomsThunk, selectRoom } from 'slice'

type Props = {}

const PastRooms = (props: Props) => {
    const dispatch = useAppDispatch()
    const { pastRooms, filteredPastRooms } = useAppSelector(selectBookedRoom)
    const { allRooms } = useAppSelector(selectRoom)

    React.useEffect(() => {
        const filterRooms = async () => {
            const filteredRooms: any[] = [];
            if (pastRooms.length !== 0) {
                for (var i = 0; i < pastRooms.length; i++) {
                    for (var j = 0; j < allRooms.length; j++) {
                        if (allRooms[j]['id'] == pastRooms[i]['maPhong']) {
                            filteredRooms.push(allRooms[j])
                        }
                    }
                }
            }
            await dispatch(setFilteredPastRooms(filteredRooms))
        }

        filterRooms()
    }, [pastRooms])

    const renderedPastRooms = filteredPastRooms.map(pastRoom => (
        <CCol span={8} key={pastRoom.maPhong}>
            <HomeItem
                roomId={pastRoom.id}
                bedAmount=''
                numberOfGuests='2'
                roomName={pastRoom.tenPhong}
                roomImage={pastRoom.hinhAnh}
                roomPrice={pastRoom.giaTien}
                arriveDate='Ngày 02'
                departureDate='Ngày 06 tháng 10'
            />
        </CCol>

    ))

    return (
        <UserInfoContainer>
            <UserInfoSectionTitleBox>
                <UserInfoSectionTitle>Phòng đã đặt</UserInfoSectionTitle>
            </UserInfoSectionTitleBox>
            <PastRoomsList>
                <CRow gutter={16}>
                    {renderedPastRooms}
                </CRow>
            </PastRoomsList>
        </UserInfoContainer>
    )
}

export default PastRooms