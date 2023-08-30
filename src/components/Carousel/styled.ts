import Slider from 'react-slick';
import styled from 'styled-components';

export const CSlider = styled(Slider)`
  .slick-arrow:before {
    color: black;
  }
`;

export const Wrapper = styled.div`
  padding: 0px 50px;

  @media only screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
