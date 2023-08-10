import { useAppDispatch, useAppSelector } from 'app/hooks';
import { CCol, CRow, SearchContainer, SearchContent, SearchContentWrapper, SearchHomeList, SearchMap, SearchMapContent, SearchMapWrapper, SearchQuantity, SearchQuantityBox, SearchSection } from './styled';
import { handleChangeWidth, selectAppDevice } from 'slice';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getRoomsByLocationThunk, rooms } from 'slice/roomSilce';
import { HomeItem } from 'components';

const Desktop = () => {
    const appDevice = useAppSelector(selectAppDevice)
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const selectedRooms = useAppSelector(rooms)

    React.useEffect(() => {
        dispatch(
            handleChangeWidth({
                maxWidth: '100%',
                paddingLeft: '24px',
                paddingRight: '24px',
            })
        );
    }, [])

    React.useEffect(() => {
        const getRoomsByLocation = async () => {
            await dispatch(getRoomsByLocationThunk({ maViTri: id }))
        }

        getRoomsByLocation()
    }, [id])

    const roomsList = selectedRooms.rooms.map(room => {
        return (
            <CCol span={8} key={room.id}>
                <HomeItem
                    roomName={room.tenPhong}
                    bedAmount={room.giuong}
                    roomImage={room.hinhAnh}
                    roomDescription={room.moTa}
                    roomPrice={room.giaTien}
                />
            </CCol>
        )
    })

    return <SearchSection>
        <SearchContentWrapper>
            <SearchContainer>
                <SearchContent>
                    <SearchQuantityBox>
                        <SearchQuantity>
                            {roomsList.length == 0 ? 'Không có chỗ ở trong khu vực bạn tìm kiếm' : `Có ${roomsList.length} chỗ ở trong khu vực bạn tìm kiếm`}
                        </SearchQuantity>
                    </SearchQuantityBox>
                    <SearchHomeList>
                        <CRow gutter={24}>
                            {roomsList}
                        </CRow>
                    </SearchHomeList>
                </SearchContent>
            </SearchContainer>
        </SearchContentWrapper>
        <SearchMapWrapper>
            <SearchMapContent>
                <SearchMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15710940.543031832!2d95.85040297759728!3d15.978139282409026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1691566075199!5m2!1svi!2s" style={{ border: 0 }} allowFullScreen loading="lazy"></SearchMap>
            </SearchMapContent>
        </SearchMapWrapper>
    </SearchSection>;
};

export default Desktop;
