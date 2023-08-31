import {
  BookRoomButton,
  CalendarWrapper,
  ChoiceCustomerWrapper,
  CloseButton,
  CloseButtonWrapper,
  CostWrapper,
  CRangePicker,
  CustomDateDescription,
  CustomDateTitle,
  CustomDateWrapper,
  Customer,
  CustomerCount,
  CustomerText,
  CustomerTextWrapper,
  CustomerTitle,
  CustomerWrapper,
  Deduction,
  DeductionWrapper,
  FooterLeft,
  FooterRight,
  FooterWrapper,
  HorizontalLine,
  IconArrowDownWrapper,
  MessageTitle,
  OrderWrapper,
  PopupChoiceCustomer,
  PopupCustomerDetailText,
  PopupCustomerText,
  PopupDescription,
  PopupItem,
  Price,
  PriceAndRatingWrapper,
  PriceWrapper,
  RaiseButton,
  RaiseButtonWrapper,
  RangePickerWrapper,
  Rating,
  RatingNumber,
  RatingWrapper,
  RenderDate,
  RoomCost,
  RoomCostWrapper,
  TitleCost,
  TotalCost,
  TotalTitle,
} from './styled';
import { ArrowBottomIcon, KeyBoardIcon, StarIcon } from 'components';
import React from 'react';
import { theme } from 'styled';
import { CUSTOMER_TYPE } from 'utils';
import { Button, notification } from 'antd';

import useOnClickOutside from 'hooks/useOnClickOutside';
import { useAppSelector } from 'app/hooks';
import { selectAccount } from 'slice';

const Order = ({
  data,
  handleChangeCustomer,
  adults,
  babies,
  children,
  pets,
  handleOrder,
  isSuccess,
}: {
  data: any;
  adults: number;
  babies: number;
  children: number;
  pets: number;
  handleChangeCustomer: (isPlus: boolean, customerType: CUSTOMER_TYPE) => void;
  handleOrder: (startDay: string, endDay: string) => void;
  isSuccess: boolean;
}) => {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [startDay, setStartDay] = React.useState<any>();
  const [endDay, setEndDay] = React.useState<any>('');
  const [withPicker, setWidthPicker] = React.useState(0);
  const [api, contextHolder] = notification.useNotification();
  const account = useAppSelector(selectAccount);

  const openNotification = () => {
    api.success({
      message: <MessageTitle>Thông báo</MessageTitle>,
      description: 'Đặt phòng thành công',
      className: 'custom-class',
      style: {
        width: 'fit-content',
      },
    });
  };

  React.useEffect(() => {
    if (isSuccess) {
      openNotification();
      setEndDay('');
      setStartDay('');
    }
  }, [isSuccess]);

  const handleOpenPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleBooking = async () => {
    try {
      if (startDay && endDay) {
        handleOrder(startDay.format(), endDay.format());
      }
    } catch (e) {
      console.log(e);
    }
  };

  useOnClickOutside(containerRef, () => {
    if (isOpenPopup == true) {
      setIsOpenPopup(false);
    }
  });

  React.useEffect(() => {
    const rangePicker = window.document.getElementById('range-picker');

    if (rangePicker) {
      setWidthPicker(rangePicker.offsetWidth / 2 - 22);
    }
  }, []);

  return (
    <>
      {' '}
      {contextHolder}{' '}
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
        <RangePickerWrapper id={'range-picker'} withPicker={withPicker}>
          <CRangePicker
            format={'DD-MM-YYYY'}
            value={[startDay, endDay]}
            onChange={(dates, dateStrings) => {
              if (dates) {
                dates[0] && setStartDay(dates[0]);
                dates[1] && setEndDay(dates[1]);
              }
            }}
            isOpenPopup={isOpenPopup}
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
                <CustomDateWrapper>
                  <CustomDateTitle>Chọn ngày</CustomDateTitle>
                  <CustomDateDescription>
                    Thêm ngày đi để biết giá chính xác
                  </CustomDateDescription>
                </CustomDateWrapper>
                {panelNode}
              </CalendarWrapper>
            )}
            cellRender={(current, info) => {
              if (info.type !== 'date') return info.originNode;

              const style: React.CSSProperties = {};
              if (
                current.format() === startDay ||
                current.format() === endDay
              ) {
                style.border = '1px solid #1677ff';
                style.borderRadius = '50%';
                return <RenderDate>{current.date()}</RenderDate>;
              }

              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
          ></CRangePicker>
        </RangePickerWrapper>
        <CustomerWrapper>
          <ChoiceCustomerWrapper
            isOpenPopup={isOpenPopup}
            onClick={() => handleOpenPopup()}
          >
            <CustomerText>Khách</CustomerText>
            <CustomerTitle>
              {adults && <Customer>{adults + children} khách</Customer>}

              {1 ? <Customer>, {babies} em bé</Customer> : <></>}
              {1 ? <Customer>, {pets} thú cưng</Customer> : <></>}
            </CustomerTitle>
            <IconArrowDownWrapper isOpenPopup={isOpenPopup}>
              <ArrowBottomIcon
                color={'#000'}
                width={20}
                height={20}
              ></ArrowBottomIcon>
            </IconArrowDownWrapper>
          </ChoiceCustomerWrapper>
          <PopupChoiceCustomer ref={containerRef} isOpenPopup={isOpenPopup}>
            <PopupItem>
              <CustomerTextWrapper>
                <PopupCustomerText>Người lớn</PopupCustomerText>
                <PopupCustomerDetailText>
                  Từ 13 tuổi trở lên
                </PopupCustomerDetailText>
              </CustomerTextWrapper>
              <RaiseButtonWrapper>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(false, CUSTOMER_TYPE.ADULTS)
                  }
                >
                  <p>-</p>
                </RaiseButton>
                <CustomerCount>{adults}</CustomerCount>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(true, CUSTOMER_TYPE.ADULTS)
                  }
                >
                  <p>+</p>
                </RaiseButton>
              </RaiseButtonWrapper>
            </PopupItem>
            <PopupItem>
              <CustomerTextWrapper>
                <PopupCustomerText>Trẻ em</PopupCustomerText>
                <PopupCustomerDetailText>Độ tuổi 2-12</PopupCustomerDetailText>
              </CustomerTextWrapper>
              <RaiseButtonWrapper>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(false, CUSTOMER_TYPE.CHILDREN)
                  }
                >
                  <p>-</p>
                </RaiseButton>
                <CustomerCount>{children}</CustomerCount>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(true, CUSTOMER_TYPE.CHILDREN)
                  }
                >
                  <p>+</p>
                </RaiseButton>
              </RaiseButtonWrapper>
            </PopupItem>
            <PopupItem>
              <CustomerTextWrapper>
                <PopupCustomerText>Em bé</PopupCustomerText>
                <PopupCustomerDetailText>Dưới 2 tuổi</PopupCustomerDetailText>
              </CustomerTextWrapper>
              <RaiseButtonWrapper>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(false, CUSTOMER_TYPE.BABIES)
                  }
                >
                  <p>-</p>
                </RaiseButton>
                <CustomerCount>{babies}</CustomerCount>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(true, CUSTOMER_TYPE.BABIES)
                  }
                >
                  <p>+</p>
                </RaiseButton>
              </RaiseButtonWrapper>
            </PopupItem>
            <PopupItem>
              <CustomerTextWrapper>
                <PopupCustomerText>Thú cưng</PopupCustomerText>
                <PopupCustomerDetailText
                  style={{
                    fontWeight: theme.font.weight.bold,
                    textDecoration: 'underline',
                  }}
                >
                  Bạn sẽ mang theo động vật phục vụ?
                </PopupCustomerDetailText>
              </CustomerTextWrapper>
              <RaiseButtonWrapper>
                <RaiseButton
                  onClick={() =>
                    handleChangeCustomer(false, CUSTOMER_TYPE.PETS)
                  }
                >
                  <p>-</p>
                </RaiseButton>
                <CustomerCount>{pets}</CustomerCount>
                <RaiseButton
                  onClick={() => handleChangeCustomer(true, CUSTOMER_TYPE.PETS)}
                >
                  <p>+</p>
                </RaiseButton>
              </RaiseButtonWrapper>
            </PopupItem>

            <PopupDescription>
              Chỗ ở này cho phép tối đa 8 khách, không tính em bé. Không được
              phép mang theo thú cưng.
            </PopupDescription>
            <CloseButtonWrapper>
              <CloseButton onClick={() => handleOpenPopup()}>Đóng</CloseButton>
            </CloseButtonWrapper>
          </PopupChoiceCustomer>
          {account?.account?.user?.id ? (
            <BookRoomButton onClick={() => handleBooking()}>
              Đặt phòng
            </BookRoomButton>
          ) : (
            <></>
          )}
          <DeductionWrapper>
            <Deduction>Bạn vẫn chưa bị trừ tiền</Deduction>
          </DeductionWrapper>
          <CostWrapper>
            <RoomCostWrapper>
              <TitleCost>$295 x 5 đêm </TitleCost>
              <RoomCost>$1.475</RoomCost>
            </RoomCostWrapper>
            <RoomCostWrapper>
              <TitleCost>Phí dịch vụ lưu trú</TitleCost>
              <RoomCost>$85</RoomCost>
            </RoomCostWrapper>
            <HorizontalLine></HorizontalLine>
            <RoomCostWrapper>
              <TotalTitle>Tổng trước thuế</TotalTitle>
              <TotalCost>$1.560</TotalCost>
            </RoomCostWrapper>
          </CostWrapper>
        </CustomerWrapper>
      </OrderWrapper>
    </>
  );
};

export default Order;
