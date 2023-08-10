import { DEVICES } from 'utils';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import Desktop from './Desktop';
import Mobile from './Mobile';
import React from 'react';
import { getOneRoom } from 'slice/roomSilce';
import { useLocation } from 'react-router-dom';

const RoomDetail = ({ match }: { match?: string }) => {
  const appDevice = useAppSelector(selectAppDevice);
  const [roomDetail, setRoomDetail] = React.useState({});
  const location = useLocation();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getDetail = async () => {
      const data = await dispatch(
        getOneRoom({ id: location.pathname.split('/')[2] })
      ).unwrap();
      setRoomDetail((data as any).content);
    };

    if (location.pathname?.split('/')[2]) {
      getDetail();
    }
  }, [location.pathname?.split('/')[2]]);

  const RenderElement = {
    [DEVICES.DESKTOP]: <Desktop data={roomDetail}></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Mobile></Mobile>,
  };

  return RenderElement[appDevice.device];
};

export default RoomDetail;
