import { Wrapper } from './styled';
import { CarouselMultipleItems, CategoryItem } from 'components';
import { CarouselData } from './data';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { handleChangeMaxWidth, selectAppDevice } from 'slice';

const Desktop = () => {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);

  React.useEffect(() => {
    dispatch(
      handleChangeMaxWidth({
        maxWidth: '1111px',
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
