import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
  .button-brown {
    background-color: brown;
  }
`;

export const ButtonWrapper = styled.div`
  background-color: brown;
`;

export const CButton = styled(Button)`
  width: 200px;

  &:hover {
    background-color: red !important;
  }
`;
