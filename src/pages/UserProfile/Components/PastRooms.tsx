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
import { selectRoom } from 'slice'
import dayjs from 'dayjs';

type Props = {}

const PastRooms = (props: Props) => {
    const dispatch = useAppDispatch()
    const { pastRooms, filteredPastRooms } = useAppSelector(selectBookedRoom)
    const { allRooms } = useAppSelector(selectRoom)
    console.log(pastRooms)

    // React.useEffect(() => {
    //     const filterRooms = async () => {
    //         const filteredRooms: any[] = [];
    //         if (pastRooms.length !== 0) {
    //             for (var i = 0; i < pastRooms.length; i++) {
    //                 for (var j = 0; j < allRooms.length; j++) {
    //                     if (allRooms[j]['id'] == pastRooms[i]['maPhong']) {
    //                         filteredRooms.push(allRooms[j])
    //                     }
    //                 }
    //             }
    //         }
    //         await dispatch(setFilteredPastRooms(filteredRooms))
    //     }

    //     filterRooms()
    // }, [])

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