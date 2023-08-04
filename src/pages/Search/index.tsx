import { ButtonWrapper, CButton, Wrapper } from '../Home/styled';
import { LogoBranchIcon } from 'components';
import React from 'react';

const Search = () => {
  return (
    <>
      {' '}
      <Wrapper>
        <LogoBranchIcon
          height={40}
          width={40}
          color={'#8c8c8c'}
        ></LogoBranchIcon>
        hello
        <ButtonWrapper>
          <CButton type="primary">Primary Button</CButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Search;
