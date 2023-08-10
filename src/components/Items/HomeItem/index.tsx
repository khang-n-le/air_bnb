import { CardBedAmount, CardBookingDuration, CardDescription, CardItem, CardPrice, CardPriceBox, CardTitle } from './styled'

type Props = {
    bedAmount: string,
    roomName: string,
    roomImage: string,
    roomDescription: string,
    roomPrice: string
}

const HomeItem = (props: Props) => {
    return (
        <CardItem
            hoverable
            bordered={false}
            cover={<img alt="Home Image" src={props.roomImage} />}>
            <CardTitle>{props.roomName}</CardTitle>
            <CardDescription>{props.roomDescription}</CardDescription>
            <CardBedAmount>{props.bedAmount} giường</CardBedAmount>
            <CardBookingDuration>Ngày 23 - Ngày 28 tháng 10</CardBookingDuration>
            <CardPriceBox><CardPrice>${props.roomPrice}</CardPrice> / đêm</CardPriceBox>
        </CardItem>
    )
}

export default HomeItem