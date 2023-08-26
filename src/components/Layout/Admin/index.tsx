import { useAppSelector } from 'app/hooks';
import React from 'react'
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';

type Props = {}

const Admin = (props: Props) => {
    const appDevice = useAppSelector(selectAppDevice);

    const renderElement = {
        [DEVICES.DESKTOP]: <Desktop></Desktop>,
        [DEVICES.TABLET]: <Mobile></Mobile>,
        [DEVICES.MOBILE]: <Mobile></Mobile>,
    };

    return renderElement[appDevice.device];
}

export default Admin