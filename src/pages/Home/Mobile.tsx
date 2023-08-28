import { HomeItem } from "components";
import { CGrid, CGridItem, MainBox, RoomsContainer, Wrapper } from "./mobileSyled";
import { useAppSelector } from "app/hooks";
import { selectRoom } from "slice";

const Mobile = () => {
  const { allRooms } = useAppSelector(selectRoom)

  const renderAllRooms = allRooms.map((room) => {
    return (
      <CGridItem>
        <HomeItem
          roomId={room.id}
          roomName={room.tenPhong}
          roomDescription={room.moTa}
          roomImage={room.hinhAnh}
          roomPrice={room.giaTien}
          arriveDate='Ngày 02'
          departureDate='Ngày 06 tháng 10'
        />
      </CGridItem>
    )
  })

  return <Wrapper>
    <main>
      <MainBox>
        <RoomsContainer>
          <CGrid columns={1} gap={40}>
            {renderAllRooms}
          </CGrid>
        </RoomsContainer>
      </MainBox>
    </main>
  </Wrapper>;
};

export default Mobile;
