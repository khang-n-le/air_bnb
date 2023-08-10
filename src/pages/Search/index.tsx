import { useAppSelector } from 'app/hooks';
import React from 'react';
import { DEVICES } from 'utils';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { selectAppDevice } from 'slice';

const Search = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const RenderElement = {
    [DEVICES.DESKTOP]: <Desktop></Desktop>,
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Desktop></Desktop>,
  };

  return RenderElement[appDevice.device];
};

export default Search;
