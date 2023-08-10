import { StarIcon } from 'components/Icons'
import { AddToFavButton, CardBedAmount, CardBookingDuration, CardDescription, CardItem, CardNavigation, CardPrice, CardPriceBox, CardTitle, CardTitleWrapper, RateWrapper } from './styled'
import { theme } from 'styled'
import { HeartOutlinedIcon } from 'components/Icons/HeartOutlinedIcon'

type Props = {
    roomId: string,
    bedAmount: string,
    roomName: string,
    roomImage: string,
    roomDescription: string,
    roomPrice: string,
}

const HomeItem = (props: Props) => {
    return (
        <CardItem
            hoverable
            bordered={false}
            cover={<>
                <img alt="Home Image" src={props.roomImage} />
                <AddToFavButton
                    icon={<HeartOutlinedIcon width={24} height={24} styles={{ display: 'block' }} />}
                    shape='circle'
                >
                </AddToFavButton>
            </>}>
            <CardNavigation href={`/room/${props.roomId}`} />
            <CardTitleWrapper>
                <CardTitle>{props.roomName}</CardTitle>
                <RateWrapper>
                    <StarIcon color={theme.colors.black} width={14} height={14} />
                    4.8
                    <span>(210)</span>
                </RateWrapper>
            </CardTitleWrapper>
            <CardDescription>{props.roomDescription}</CardDescription>
            {props.bedAmount.length == 0 ? '' : <CardBedAmount>{props.bedAmount} giường</CardBedAmount>}
            <CardBookingDuration>Ngày 23 - Ngày 28 tháng 10</CardBookingDuration>
            <CardPriceBox><CardPrice>${props.roomPrice}</CardPrice> / đêm</CardPriceBox>
        </CardItem >
    )
}

export default HomeItem