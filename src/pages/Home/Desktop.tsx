import { Wrapper } from './styled';
import { CarouselMultipleItems, CategoryItem } from 'components';
import { CarouselData } from './data';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { handleChangeWidth, selectAppDevice } from 'slice';

const Desktop = () => {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);

  React.useEffect(() => {
    dispatch(
      handleChangeWidth({
        maxWidth: '2360px',
        paddingLeft: '80px',
        paddingRight: '80px'
      })
    );
  }, []);

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

export default Desktop;
