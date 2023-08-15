import React from 'react';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import { selectLocation } from 'slice';

type Props = {
  onShowModal: (key: string) => void
}

const Header = (props: Props) => {
  const appDevice = useAppSelector(selectAppDevice);
  const location = useAppSelector(selectLocation);

  const renderElement = {
    [DEVICES.DESKTOP]: <Desktop locationList={location.list} onShowModal={props.onShowModal} />,
    [DEVICES.MOBILE]: <Mobile />,
    [DEVICES.TABLET]: <Mobile />,
  };

  return renderElement[appDevice.device];
};

export default Header;