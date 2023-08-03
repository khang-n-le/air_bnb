import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';

const Home = () => {
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
