import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';

import { CategoryItem, LogoBranchIcon } from 'components';
import { CarouselMultipleItems } from 'components';
import { CarouselData } from './data';

const Home = () => {
  return (
    <Wrapper>
      <CarouselMultipleItems slidesToShow={10}>
        {CarouselData.map((item, index) => {
          return (
            <CategoryItem
              key={index}
              title={item.title}
              image={item.url}
            ></CategoryItem>
          );
        })}
      </CarouselMultipleItems>
      <LogoBranchIcon height={40} width={40} color={'#8c8c8c'}></LogoBranchIcon>
      hello
      <ButtonWrapper>
        <CButton type="primary">Primary Button</CButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Home;
