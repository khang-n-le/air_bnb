import { CCol, CRow, Container, HomeItemBox, RoomsContent, RoomsSection, Wrapper } from './styled';
import { CarouselMultipleItems, CategoryItem, HomeItem } from 'components';
import { CarouselData } from './data';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getAllRoomsThunk, getUserById, handleChangeWidth, selectAppDevice, selectRoom, selectUser } from 'slice';
import { getLocalStorage } from 'utils';

interface Props { }

const Desktop = (props: Props) => {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);
  const { allRooms } = useAppSelector(selectRoom);

  React.useEffect(() => {
    dispatch(
      handleChangeWidth({
        maxWidth: '2360px',
        paddingLeft: '80px',
        paddingRight: '80px'
      })
    );
  }, []);

  const renderedAllRooms = allRooms.map(room => {
    return (
      <CCol span={6} key={room.id}>
        <HomeItemBox>
          <HomeItem
            roomId={room.id}
            roomName={room.tenPhong}
            roomDescription={room.moTa}
            roomImage={room.hinhAnh}
            roomPrice={room.giaTien}
            arriveDate='Ngày 02'
            departureDate='Ngày 06 tháng 10'
          ></HomeItem>
        </HomeItemBox>
      </CCol>
    )
  })

  return (
    <Wrapper>
      <CarouselMultipleItems slidesToShow={10}>
        {CarouselData.map((item, index) => {
          return (
            <CategoryItem
              key={index}
              title={item.title}
              image={item.url}
            ></CategoryItem>
          );
        })}
      </CarouselMultipleItems>
      <RoomsSection>
        <Container paddingLeft={appDevice.paddingLeft} paddingRight={appDevice.paddingRight}>
          <RoomsContent>
            <CRow gutter={24}>
              {renderedAllRooms}
            </CRow>
          </RoomsContent>
        </Container>
      </RoomsSection>
    </Wrapper>
  );
};

export default Desktop;
