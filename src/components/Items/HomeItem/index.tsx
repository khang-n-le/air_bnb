import { StarIcon } from 'components/Icons';
import {
  AddToFavButton,
  CardBedAmount,
  CardBookingDuration,
  CardDescription,
  CardItem,
  CardNavigation,
  CardNumberOfGuests,
  CardPrice,
  CardPriceBox,
  CardTitle,
  CardTitleWrapper,
  RateWrapper,
} from './styled';
import { theme } from 'styled';
import { HeartOutlinedIcon } from 'components/Icons/HeartOutlinedIcon';

type Props = {
  roomId?: string;
  bedAmount?: string;
  roomName?: string;
  roomImage?: string;
  roomDescription?: string;
  roomPrice?: string;
  numberOfComments?: string;
  numberOfGuests?: string,
  arriveDate?: string,
  departureDate?: string
};

const HomeItem = (props: Props) => {
  return (
    <CardItem
      hoverable
      bordered={false}
      cover={
        <>
          <img alt="Home Image" src={props.roomImage} />
          <AddToFavButton
            icon={
              <HeartOutlinedIcon
                width={24}
                height={24}
                styles={{ display: 'block', stroke: 'white', strokeWidth: 2 }}
                color='rgba(0, 0, 0, 0.5)'
              />
            }
            shape="circle"
          ></AddToFavButton>
        </>
      }
    >
      <CardNavigation href={`/room/${props.roomId}`} />
      <CardTitleWrapper>
        <CardTitle>{props.roomName}</CardTitle>
        <RateWrapper>
          <StarIcon color={theme.colors.black} width={14} height={14} />
          4.8
          <span>{props.numberOfComments}</span>
        </RateWrapper>
      </CardTitleWrapper>
      <CardDescription>{props.roomDescription}</CardDescription>
      {!props.bedAmount ? (
        <></>
      ) : (
        <CardBedAmount>{props.bedAmount} giường</CardBedAmount>
      )}
      {!props.numberOfGuests ? (
        <></>
      ) : (
        <CardNumberOfGuests>{props.numberOfGuests} khách</CardNumberOfGuests>
      )}
      <CardBookingDuration>{props.arriveDate} - {props.departureDate}</CardBookingDuration>
      <CardPriceBox>
        <CardPrice>${props.roomPrice}</CardPrice> / đêm
      </CardPriceBox>
    </CardItem>
  );
};

export default HomeItem;
