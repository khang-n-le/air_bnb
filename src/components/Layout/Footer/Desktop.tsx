import {
  ContentBottomWrapper,
  ContentTopWrapper,
  ContentWrapper,
  CopyRightLeft,
  CopyRightLeftItem,
  CopyRightRight,
  CopyRightWrapper,
  CountryItem,
  IconWrapper,
  ItemRightTitle,
  ItemRightWrapper,
  ListCountryWrapper,
  ServiceItem,
  ServiceListWrapper,
  ServicesWrapper,
  ServiceTitle,
  ServiceWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './styled';
import { CountryData, ServiceData } from './data';
import {
  FacebookSquareIcon,
  GlobeIcon,
  IntegramSquareIcon,
  TwitterSquareIcon,
} from '../../Icons';
import { theme } from '../../../styled';

const Desktop = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentTopWrapper className={'inner'}>
          <TitleWrapper>
            <Title>
              Khám phá các lựa chọn khác tại và xung quanh Williamstown North
            </Title>
            <ListCountryWrapper>
              {CountryData.map((item, index) => {
                return (
                  <CountryItem span={6} key={index}>
                    {item}
                  </CountryItem>
                );
              })}
            </ListCountryWrapper>
          </TitleWrapper>
        </ContentTopWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <ContentBottomWrapper className={'inner'}>
          <ServicesWrapper>
            {ServiceData.map((item, index) => {
              return (
                <ServiceWrapper span={6} key={index}>
                  <ServiceTitle>{item.title}</ServiceTitle>
                  <ServiceListWrapper>
                    {item?.data?.map((serviceItem, serviceIndex) => {
                      return <ServiceItem>{serviceItem.title}</ServiceItem>;
                    })}
                  </ServiceListWrapper>
                </ServiceWrapper>
              );
            })}
          </ServicesWrapper>
        </ContentBottomWrapper>
      </ContentWrapper>
      <CopyRightWrapper className={'inner'}>
        <CopyRightLeft>
          <CopyRightLeftItem>© 2023 Airbnb, Inc.</CopyRightLeftItem>
          <CopyRightLeftItem>Quyền riêng tư</CopyRightLeftItem>
          <CopyRightLeftItem>Điều khoản</CopyRightLeftItem>
          <CopyRightLeftItem>Sơ đồ trang web</CopyRightLeftItem>
        </CopyRightLeft>
        <CopyRightRight>
          <ItemRightWrapper>
            <GlobeIcon
              height={16}
              width={16}
              color={theme.colors.primary.dark}
            ></GlobeIcon>
            <ItemRightTitle>Tiếng Việt (VN)</ItemRightTitle>
          </ItemRightWrapper>
          <ItemRightWrapper>
            $<ItemRightTitle>USD</ItemRightTitle>
          </ItemRightWrapper>
          <IconWrapper>
            <FacebookSquareIcon
              width={18}
              height={18}
              color={theme.colors.primary.dark}
            ></FacebookSquareIcon>
            <TwitterSquareIcon
              width={18}
              height={18}
              color={theme.colors.primary.dark}
            ></TwitterSquareIcon>
            <IntegramSquareIcon
              width={18}
              height={18}
              color={theme.colors.primary.dark}
            ></IntegramSquareIcon>
          </IconWrapper>
        </CopyRightRight>
      </CopyRightWrapper>
    </Wrapper>
  );
};

export default Desktop;
