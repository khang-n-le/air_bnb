import Slider from 'react-slick';
import styled from 'styled-components';

export const CSlider = styled(Slider)`
  .slick-arrow:before {
    color: black;
  }
`;

export const Wrapper = styled.div`
  padding: 20px 50px;
  position: sticky;
  top: 80px;
  background-color: white;
  z-index: 90;

  @media only screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
