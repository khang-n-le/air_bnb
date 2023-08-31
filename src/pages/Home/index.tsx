import React from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getAllRoomsThunk, getUserById, selectAppDevice, selectRoom } from 'slice';
import { DEVICES, getLocalStorage } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Home = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const storedAccount = getLocalStorage('account')

    const getAllRooms = async () => {
      await dispatch(getAllRoomsThunk({}));
    }

    const getUser = async () => {
      await storedAccount?.user.id && dispatch(getUserById({ id: storedAccount?.user.id }))
    }

    getAllRooms();
    getUser()
  }, [])

  const RenderElement = {
    [DEVICES.DESKTOP]: <Desktop></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Mobile></Mobile>,
  };

  return RenderElement[appDevice.device];
};

export default Home;
