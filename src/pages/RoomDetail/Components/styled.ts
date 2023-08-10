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
  margin-top: 48px;
  position: sticky;
  top: 0px;
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

export const CRangePicker = styled(RangePicker)`
  height: 56px;
  width: 100%;
  align-items: end;
  padding: 0px;

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
