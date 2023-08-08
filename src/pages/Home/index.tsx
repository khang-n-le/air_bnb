import React from 'react';

import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Home = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const RenderElement = {
    [DEVICES.DESKTOP]: <Desktop></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Desktop></Desktop>,
  };

  return RenderElement[appDevice.device];
};

export default Home;
