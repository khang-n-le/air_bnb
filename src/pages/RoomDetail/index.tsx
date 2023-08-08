import { DEVICES } from 'utils';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import Desktop from './Desktop';
import Mobile from './Mobile';

const RoomDetail = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const RenderElement = {
    [DEVICES.DESKTOP]: <Desktop></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Desktop></Desktop>,
  };

  return RenderElement[appDevice.device];
};

export default RoomDetail;
