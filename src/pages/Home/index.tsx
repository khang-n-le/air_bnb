import { Button } from 'antd';
import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAppDevice } from '../../slice/appDeviceSlice';

const Home = () => {
  const appDevice = useAppSelector(selectAppDevice);

  React.useEffect(() => {
    console.log('data1', appDevice);
  }, [appDevice]);

  return (
    <Wrapper>
      hello
      <ButtonWrapper>
        <CButton type="primary">Primary Button</CButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Home;
