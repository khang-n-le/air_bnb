import React, { ReactElement } from 'react';
import { CSlider } from './styled';

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

  // React.useEffect(() => {}, [
  //   window.document.getElementsByClassName('slick-list')[0]?.clientWidth,
  // ]);

  return (
    <>
      <h2> Multiple items </h2>
      <CSlider {...settings}>{children}</CSlider>
    </>
  );
};

export default CarouselMultipleItems;
