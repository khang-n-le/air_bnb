import { Col, Row } from 'antd';
import styled from 'styled-components';

export const SearchSection = styled.main`
    display: flex;
    margin-top: 80px;
`;

export const SearchContentWrapper = styled.div`
    width: 63%;
    flex-grow: 0;
    flex-shrink: 0;
`;

export const SearchContainer = styled.div`
    padding: 0 24px;
`;

export const SearchContent = styled.div``;

export const SearchQuantityBox = styled.div`
    padding: 24px 0;
`

export const SearchQuantity = styled.h1`
    font-size: ${p => p.theme.font.size.xs};
    font-weight: ${p => p.theme.font.weight.bold};
`

export const SearchHomeList = styled.div`
    margin-bottom: 24px;
`

export const CRow = styled(Row)``

export const CCol = styled(Col)``

export const SearchMapWrapper = styled.div`
    flex: auto;
    display: block;
`;

export const SearchMapContent = styled.div`
    position: sticky;
    top: 80px;
    height: calc(100vh - 80px);
`

export const SearchMap = styled.iframe`
    width: 100%;
    height: 100%;

    & .place-card .place-card-large {
        display: none;
    }
`
