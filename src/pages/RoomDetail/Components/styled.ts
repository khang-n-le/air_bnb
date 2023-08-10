import { Button, Col, Row } from 'antd';
import styled, { keyframes } from 'styled-components';

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
`;
