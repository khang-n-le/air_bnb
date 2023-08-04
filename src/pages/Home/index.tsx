import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';

import { LogoBranchIcon } from 'components';

const Home = () => {
  return (
    <Wrapper>
      <LogoBranchIcon height={40}  width={40} color={"#8c8c8c"}></LogoBranchIcon>
      hello
      <ButtonWrapper>
        <CButton type="primary">Primary Button</CButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Home;
