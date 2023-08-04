import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';

const Header = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <Desktop />,
    [DEVICES.MOBILE]: <Mobile />,
    [DEVICES.TABLET]: <Mobile />,
  };

  return renderElement[appDevice.device];
}

export default Header