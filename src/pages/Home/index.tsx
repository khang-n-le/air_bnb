import { Button } from 'antd';
import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';

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
