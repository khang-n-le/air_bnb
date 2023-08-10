import {
  CalendarWrapper,
  CRangePicker,
  CustomDateDescription,
  CustomDateTitle,
  CustomDateWrapper,
  FooterLeft,
  FooterRight,
  FooterWrapper,
  OrderWrapper,
  Price,
  PriceAndRatingWrapper,
  PriceWrapper,
  RangePickerWrapper,
  Rating,
  RatingNumber,
  RatingWrapper,
} from './styled';
import { KeyBoardIcon, StarIcon } from 'components';
import React from 'react';
import { Button } from 'antd';
import { theme } from 'styled';

const Order = ({ data }: { data: any }) => {
  React.useEffect(() => {
    console.log(
      'data1',
      window.document
        .getElementsByClassName('ant-picker-input')[0]
        .children[0].setAttribute('placeholder', 'Thêm ngày'),
      window.document
        .getElementsByClassName('ant-picker-input')[1]
        .children[0].setAttribute('placeholder', 'Thêm ngày')
    );
  }, []);

  return (
    <OrderWrapper>
      <PriceAndRatingWrapper>
        <PriceWrapper>
          <Price>${data.giaTien}</Price> / đêm
        </PriceWrapper>
        <RatingWrapper>
          <StarIcon width={16} height={16}></StarIcon>{' '}
          <RatingNumber>5</RatingNumber>
          <Rating>(18 đánh giá)</Rating>
        </RatingWrapper>
      </PriceAndRatingWrapper>
      <RangePickerWrapper>
        <CRangePicker
          renderExtraFooter={mode => {
            return (
              <FooterWrapper>
                <FooterLeft>
                  <KeyBoardIcon
                    height={24}
                    width={24}
                    color={theme.colors.black}
                  ></KeyBoardIcon>
                </FooterLeft>
                <FooterRight>
                  <p style={{ textDecoration: 'underline' }}>Xóa ngay</p>
                  <Button
                    type="primary"
                    style={{ backgroundColor: theme.colors.black }}
                  >
                    Đóng
                  </Button>
                </FooterRight>
              </FooterWrapper>
            );
          }}
          panelRender={panelNode => (
            <CalendarWrapper>
              {' '}
              <CustomDateWrapper>
                <CustomDateTitle>Chọn ngày</CustomDateTitle>
                <CustomDateDescription>
                  Thêm ngày đi để biết giá chính xác
                </CustomDateDescription>
              </CustomDateWrapper>
              {panelNode}
            </CalendarWrapper>
          )}
          // dateRender={e => {
          //   console.log('data1', e);
          //   return <></>;
          // }}
        ></CRangePicker>
      </RangePickerWrapper>
    </OrderWrapper>
  );
};

export default Order;
