import React from 'react';
import { ButtonWrapper, CButton, Wrapper } from './styled';

import { CategoryItem, LogoBrandIcon } from 'components';
import { CarouselMultipleItems, WrapperComponent } from 'components';
import { CarouselData } from './data';

const Home = () => {
  return (
    <WrapperComponent>
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
    </WrapperComponent>

  );
};

export default Home;
