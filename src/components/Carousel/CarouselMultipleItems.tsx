import React, { ReactElement } from 'react';
import { CSlider, Wrapper } from './styled';

interface CarouselMultipleItems {
  children: ReactElement[];
  slidesToShow?: number;
}

const CarouselMultipleItems = ({
  children,
  slidesToShow,
}: CarouselMultipleItems) => {
  const [countSlider, setCountSlider] = React.useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || countSlider,
    slidesToScroll: slidesToShow || countSlider,
    slideWidth: 1200,
    slideSpacing: 30,
  };

  React.useEffect(() => {
    const windowHeight = (): void => {
      window.document.getElementsByClassName('slick-list')[0]?.clientWidth &&
        setCountSlider(
          window.document.getElementsByClassName('slick-list')[0].clientWidth /
            100
        );
    };

    window.addEventListener('resize', windowHeight);

    windowHeight();
  }, [window.innerWidth]);

  return (
    <Wrapper>
      <CSlider {...settings}>{children}</CSlider>
    </Wrapper>
  );
};

export default CarouselMultipleItems;
