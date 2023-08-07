import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';

import { CategoryItem, LogoBrandIcon } from 'components';
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
    </Wrapper>
  );
};

export default Home;
