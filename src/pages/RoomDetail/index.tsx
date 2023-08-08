import { DEVICES } from 'utils';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import Desktop from './Desktop';
import Mobile from './Mobile';
import React from 'react';
import { getOneRoom } from 'slice/roomSilce';

const RoomDetail = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [roomDetail, setRoomDetail] = React.useState({});
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getDetail = async () => {
      const data = await dispatch(getOneRoom({ id: '1' })).unwrap();
      setRoomDetail((data as any).content);
    };

    getDetail();
  }, []);

  const RenderElement = {
    [DEVICES.DESKTOP]: <Desktop data={roomDetail}></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Mobile></Mobile>,
  };

  return RenderElement[appDevice.device];
};

export default RoomDetail;
