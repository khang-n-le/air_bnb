import {
  OrderWrapper,
  Price,
  PriceAndRatingWrapper,
  PriceWrapper,
  Rating,
  RatingNumber,
  RatingWrapper,
} from './styled';
import { StarIcon } from '../../../components';

const Order = ({ data }: { data: any }) => {
  console.log('data1', data);
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
    </OrderWrapper>
  );
};

export default Order;
