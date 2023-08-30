import { Button, Col, DatePicker, Row } from 'antd';
import styled, { keyframes } from 'styled-components';
const { RangePicker } = DatePicker;
export const Wrapper = styled.div``;

export const RoomDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  border-top: 1px solid #f1f1f1;
`;

export const UtilityContentWrapper = styled.div`
  margin-left: 16px;
`;

export const UtilityTitle = styled.h3`
  margin: 0px;
  margin-bottom: 4px;
  line-height: 20px;
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const UtilityDescription = styled.p`
  line-height: 20px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
`;

export const UtilityWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const TranslateItem = styled.div`
  display: flex;
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.normal};
  line-height: 18px;
`;

export const Description = styled.p`
  line-height: 26px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
`;

export const DescriptionWrapper = styled.div`
  padding-top: 32px;
`;

export const ShowMore = styled.div`
  display: flex;
  align-items: center;

  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
`;

export const ExtensionsTitle = styled.h2`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.lg};
  line-height: 26px;
  padding-bottom: 24px;
`;

export const Extensions = styled(Row)``;

export const ExtensionsItemWrapper = styled(Col)`
  padding-bottom: 16px;
`;

export const ExtensionsItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ExtensionsItemTitle = styled.p`
  line-height: 20px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
  margin-left: 16px;
`;

const ButtonAnimation = keyframes`
  50%{
    transform: scale(0.5);
  }
  
  0%,100%{
    transform: scale(1);
  }


`;

export const ButtonShowAll = styled(Button)`
  height: 48px;
  width: fit-content;

  border-color: #222222;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  margin-top: 24px;

  &:active {
    color: red;
    animation: ${ButtonAnimation} ease 4s;
  }
`;

export const CommentWrapper = styled.div`
  padding: 48px 0px;
`;

export const CommentUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentUsername = styled.p`
  line-height: 20px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
`;

export const CommentDate = styled.p`
  line-height: 20px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
`;

export const CommentUserWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const CommentContentWrapper = styled.div`
  margin-left: 12px;
`;

export const CommentContent = styled.p`
  line-height: 24px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.sm};
`;

export const TotalComment = styled.p`
  line-height: 26px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.lg};
`;

export const TotalContent = styled.p`
  line-height: 18px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
  margin-bottom: 32px;
`;

export const CreateCommentWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const SubmitCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const SubmitButton = styled(Button)`
  width: fit-content;
`;

export const OrderWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  position: sticky;
  top: 100px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 20px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.sm};
`;

export const Price = styled.p`
  line-height: 26px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.lg};
  margin-right: 5px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Rating = styled.p`
  text-decoration: underline;
`;

export const RatingNumber = styled.p`
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const PriceAndRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CRangePicker = styled(RangePicker)<{ isOpenPopup: boolean }>`
  height: 56px;
  width: 100%;
  align-items: end;
  padding: 0px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  .ant-picker-input {
    height: 100%;
    position: relative;
    padding: 26px 12px 10px !important;
  }

  .ant-picker-input:first-child {
    border-right: 1px solid #f1f1f1;
  }

  .ant-picker-input:first-child:before {
    position: absolute;
    content: 'NHẬN PHÒNG';
    top: 10px;
    line-height: 12px;
    font-weight: 800;
    font-size: ${p => p.theme.font.size.xxs};
  }

  .ant-picker-input:nth-child(3):before {
    position: absolute;
    content: 'TRẢ PHÒNG';
    top: 10px;
    line-height: 12px;
    font-weight: 800;
    font-size: ${p => p.theme.font.size.xxs};
  }
`;

export const RangePickerWrapper = styled.div`
  display: flex;

  .ant-picker-range-separator,
  .ant-picker-suffix,
  .ant-picker-suffix {
    display: none;
  }

  .ant-picker-active-bar {
    width: 110px !important;
  }
`;

export const CustomDateWrapper = styled.div``;

export const CustomDateTitle = styled.h2`
  line-height: 26px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.lg};
`;

export const CustomDateDescription = styled.p`
  height: 36px;
  line-height: 18px;
  padding-top: 8px;
  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
`;

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 26px;
  justify-content: space-between;
`;

export const FooterLeft = styled.div`
  display: flex;
`;

export const FooterRight = styled.div`
  display: flex;
  line-height: 18px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.xs};
  align-items: center;

  button {
    margin-left: 16px;
    line-height: 18px;
    font-weight: ${p => p.theme.font.weight.bold};
    font-size: ${p => p.theme.font.size.xs};
  }
`;

export const CalendarWrapper = styled.div`
  padding: 26px 34px;

  .ant-picker-cell-inner {
    //color: white;
  }

  .ant-picker-cell-inner:before {
    //background-color: black !important;
    z-index: 0;
  }

  .ant-picker-cell-inner:has(:before) {
  }

  .ant-picker-cell-range-end > .ant-picker-cell-inner {
    background-color: black;
  }
`;

export const ChoiceCustomerWrapper = styled.div<{ isOpenPopup: boolean }>`
  position: relative;
  border: 1px solid rgb(217, 217, 217);
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 36px 10px 12px;

  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  ${p => p.isOpenPopup && `  border-color: #4096ff;`};

  &:hover {
    border-color: #4096ff;
  }
`;

export const CustomerText = styled.p`
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.medium};
`;

export const CustomerTitle = styled.div`
  display: flex;
`;

export const Customer = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  line-height: 18px !important;
`;

export const CustomerWrapper = styled.div`
  position: relative;
`;

export const IconArrowDownWrapper = styled.div<{ isOpenPopup: boolean }>`
  position: absolute;
  right: 10px;
  cursor: pointer;

  transform: ${p => (p.isOpenPopup ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const PopupChoiceCustomer = styled.div<{ isOpenPopup: boolean }>`
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 2px 6px,
    rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  box-sizing: border-box !important;
  padding: 16px;
  flex-direction: column;
  gap: 24px;
  min-width: 280px;
  background-color: white;

  position: absolute;
  top: 58px;
  right: 0px;

  display: ${p => (p.isOpenPopup ? 'flex' : 'none')};
`;

export const PopupItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupCustomerText = styled.p`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
`;

export const PopupCustomerDetailText = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.normal};
  line-height: 18px;
  color: rgb(34, 34, 34);
`;

export const RaiseButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const RaiseButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #b0b0b0;
  cursor: pointer;
  display: flex;
  //align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${p => p.theme.font.size.lg};

  p {
    line-height: 26px;
  }
`;

export const CustomerCount = styled.div``;

export const PopupDescription = styled.p`
  color: rgb(34, 34, 34);
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.normal};
  line-height: 16px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  text-decoration: underline;

  font-weight: ${p => p.theme.font.weight.bold};
  width: fit-content;
  padding: 10px;
  background-color: transparent;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BookRoomButton = styled.button`
  background-color: ${p => p.theme.colors.primary.main};
  color: white;
  padding: 14px 24px;
  width: 100%;
  height: 48px;
  border-radius: 8px;

  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 20px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`;

export const DeductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const Deduction = styled.p``;

export const RoomCostWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  color: rgb(34, 34, 34);

  &:nth-child(2) {
    margin-top: 16px;
  }
`;

export const TitleCost = styled.p`
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.normal};
  line-height: 20px;
  text-decoration: underline;
`;

export const RoomCost = styled.p`
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.normal};
  line-height: 20px;
`;

export const CostWrapper = styled.div`
  margin-top: 24px;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  border-top: 1px solid rgb(113, 113, 113);
  margin: 24px 0px;
`;

export const TotalTitle = styled.p`
  font-size: 16px !important;
  line-height: 20px !important;
  color: rgb(34, 34, 34) !important;
  font-weight: ${p => p.theme.font.weight.bold} !important;
`;

export const TotalCost = styled.p`
  font-size: 16px !important;
  line-height: 20px !important;
  color: rgb(34, 34, 34) !important;
  font-weight: ${p => p.theme.font.weight.bold} !important;
`;

export const RenderDate = styled.div`
  border-radius: 50%;
  background-color: rgb(39, 39, 39);
  width: 30px;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 12px;
  z-index: 10;
  position: relative;
`;

export const MessageTitle = styled.h2`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
`;
