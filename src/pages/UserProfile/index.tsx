import { useAppSelector } from 'app/hooks';
import React from 'react'
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';

type Props = {}

const UserProfile = (props: Props) => {
    const appDevice = useAppSelector(selectAppDevice);

    const RenderElement = {
        [DEVICES.DESKTOP]: <Desktop></Desktop>,
        [DEVICES.TABLET]: <Mobile></Mobile>,
        [DEVICES.MOBILE]: <Desktop></Desktop>,
    };

    return RenderElement[appDevice.device];
}

export default UserProfile