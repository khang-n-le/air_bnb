import React from 'react';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import { selectLocation } from 'slice';

const Header = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const location = useAppSelector(selectLocation);

  React.useEffect(() => {
    console.log('data1', location.list);
  }, [location.list]);

  const renderElement = {
    [DEVICES.DESKTOP]: <Desktop />,
    [DEVICES.MOBILE]: <Mobile />,
    [DEVICES.TABLET]: <Mobile />,
  };

  return renderElement[appDevice.device];
};

export default Header;
