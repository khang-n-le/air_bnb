import Slider from 'react-slick';
import React, { ReactElement } from 'react';

interface CarouselMultipleItems {
  children: ReactElement[];
  slidesToShow?: number;
}

const CarouselMultipleItems = ({
  children,
  slidesToShow,
}: CarouselMultipleItems) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: slidesToShow || 3,
  };

  return (
    <>
      <h2> Multiple items </h2>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default CarouselMultipleItems;
