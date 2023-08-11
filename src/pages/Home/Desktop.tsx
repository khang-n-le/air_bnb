import { CCol, CRow, Container, RoomsContent, RoomsSection, Wrapper } from './styled';
import { CarouselMultipleItems, CategoryItem, HomeItem } from 'components';
import { CarouselData } from './data';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getAllRoomsThunk, handleChangeWidth, selectAppDevice, selectRoom } from 'slice';

const Desktop = () => {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);
  const { allRooms } = useAppSelector(selectRoom)

  React.useEffect(() => {
    dispatch(
      handleChangeWidth({
        maxWidth: '2360px',
        paddingLeft: '80px',
        paddingRight: '80px'
      })
    );
  }, []);

  React.useEffect(() => {
    const getAllRooms = async () => {
      await dispatch(getAllRoomsThunk({})).unwrap();
    }

    getAllRooms();
  }, [])

  const renderedAllRooms = allRooms.map(room => {
    return (
      <CCol span={6} key={room.id}>
        <HomeItem
          roomId={room.id}
          roomName={room.tenPhong}
          bedAmount={''}
          roomDescription={'Chủ nhà: Bill Gate'}
          roomImage={room.hinhAnh}
          roomPrice={room.giaTien}
        ></HomeItem>
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
