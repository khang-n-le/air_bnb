import React, { useState } from 'react'
import {
    PastRoomsList,
    UserInfoContainer,
    UserInfoSectionTitle,
    UserInfoSectionTitleBox
} from './styled'
import { CCol, CRow } from '../styled'
import { HomeItem } from 'components'
import { useAppSelector } from 'app/hooks'
import { selectBookedRoom } from 'slice/bookingSlice'
import dayjs from 'dayjs';

type Props = {}

const PastRooms = (props: Props) => {
    const { pastRooms } = useAppSelector(selectBookedRoom)

    const renderedPastRooms = pastRooms?.map(pastRoom => (
        <CCol span={8} key={pastRoom.id}>
            <HomeItem
                roomId={pastRoom.id}
                numberOfGuests='2'
                roomName='STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ'
                roomImage="https://airbnbnew.cybersoft.edu.vn/images/phong2.png"
                roomPrice='15'
                arriveDate={dayjs(pastRoom.ngayDen).format('DD/MM/YYYY')}
                departureDate={dayjs(pastRoom.ngayDi).format('DD/MM/YYYY')}
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