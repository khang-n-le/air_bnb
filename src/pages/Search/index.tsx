import { ButtonWrapper, CButton, Wrapper } from '../Home/styled';
import { LogoBrandIcon } from 'components';
import React from 'react';

const Search = () => {
  return (
    <>
      {' '}
      <Wrapper>
        <LogoBrandIcon
          height={40}
          width={40}
          color={'#8c8c8c'}
        ></LogoBrandIcon>
        hello
        <ButtonWrapper>
          <CButton type="primary">Primary Button</CButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Search;
