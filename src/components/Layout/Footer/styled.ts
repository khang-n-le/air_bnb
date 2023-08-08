import styled from 'styled-components';
import { Col, Row } from 'antd';

export const Wrapper = styled.section`
  background-color: ${p => p.theme.colors.primary.grey};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${p => p.theme.colors.border.main};
  display: flex;
  justify-content: center;
`;

export const CopyRightWrapper = styled.div<{ maxWidth: string }>`
  max-width: ${p => p.maxWidth};
  width: 100%;
  border-top: 1px solid ${p => p.theme.colors.border.main};
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${p => p.theme.font.size.sm};
  font-size: ${p => p.theme.font.weight.normal};
`;

export const ContentTopWrapper = styled.div<{ maxWidth: string }>`
  width: 100%;
  padding: 48px 0px;
  max-width: ${p => p.maxWidth};
`;

export const ContentBottomWrapper = styled.div<{ maxWidth: string }>`
  width: 100%;
  max-width: ${p => p.maxWidth};
`;

export const TitleWrapper = styled.div`
  padding-bottom: 16px;
`;

export const ListCountryWrapper = styled(Row)`
  margin: 16px -8px 0px;
`;

export const CountryItem = styled(Col)`
  padding: 8px;
`;

export const ServicesWrapper = styled(Row)`
  width: 100%;

  margin-left: -12px !important;
  margin-right: -12px !important;
  padding: 48px 12px;
`;

export const ServiceWrapper = styled(Col)``;

export const ServiceTitle = styled.h3`
  margin-bottom: 24px;
  line-height: 18px;
  font-size: ${p => p.theme.font.size.md};
  font-weight: ${p => p.theme.font.weight.normal};
  margin-top: 0px;
`;

export const ServiceItem = styled.li`
  padding-top: 16px;
  cursor: pointer;

  &:nth-child(1) {
    padding-top: 0px !important;
  }
`;

export const ServiceListWrapper = styled.ul`
  padding-left: 0px;
  list-style: none;
  margin: 0px;
`;

export const CopyRightLeft = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 0px;
  margin: 0px;
  list-style: none;
`;

export const CopyRightLeftItem = styled.li`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.normal};
  cursor: pointer;
  position: relative;

  &:before {
    content: '.';
    position: absolute;
    left: -10px;
    bottom: 6px;
  }

  &:first-child::before {
    display: none;
  }
`;

export const CopyRightRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ItemRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemRightTitle = styled.p`
  margin-left: 8px;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 18px;
  margin-right: 24px;
`;
