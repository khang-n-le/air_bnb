import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Footer = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <Desktop></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Mobile></Mobile>,
  };

  return renderElement[appDevice.device];
};

export default Footer;
