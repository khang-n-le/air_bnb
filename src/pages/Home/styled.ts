import styled from 'styled-components';
import { Button, Col, Row } from 'antd';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 20px 0px;
  position: relative;

  .button-brown {
    background-color: brown;
  }

  .slick-arrow {
    position: absolute;

    z-index: 100;
    width: initial;
  }
`;

export const RoomsSection = styled.section`
  margin: 1rem 0 0;
`;

export const Container = styled.div<{
  paddingLeft: string;
  paddingRight: string;
}>`
  padding-left: ${p => p.paddingLeft};
  padding-right: ${p => p.paddingRight};
`;

export const RoomsContent = styled.div``;

export const CRow = styled(Row)``;

export const CCol = styled(Col)``;

export const HomeItemBox = styled.div`
  margin-bottom: 48px;
`
