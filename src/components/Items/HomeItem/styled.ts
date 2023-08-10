import { Button, Card } from "antd";
import { styled } from "styled-components";

export const CardItem = styled(Card)`
    margin-bottom: 48px;

    &.ant-card .ant-card-cover img, &.ant-card .ant-card-cover img+.ant-image-mask {
        border-radius: ${p => p.theme.radius.lg};
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    & .ant-card-body {
        border-radius: 0 0 ${p => p.theme.radius.lg} ${p => p.theme.radius.lg};
        padding: 12px 0 0 0 ;
    }

    &.ant-card:not(.ant-card-bordered){
        box-shadow: none;
    }

    & .ant-card-cover {
        padding-top: 100%;
        position: relative;
        overflow: hidden;
    }
`

export const CardTitle = styled.p`
    font-size: ${p => p.theme.font.size.sm};
    color: ${p => p.theme.colors.text.primary};
    font-weight: ${p => p.theme.font.weight.bold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const CardDescription = styled.p`
    font-size: ${p => p.theme.font.size.sm};
    color: ${p => p.theme.colors.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const CardBedAmount = styled.p`
font-size: ${p => p.theme.font.size.sm};
    color: ${p => p.theme.colors.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const CardBookingDuration = styled.p`
font-size: ${p => p.theme.font.size.sm};
    color: ${p => p.theme.colors.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;`

export const CardPriceBox = styled.p`
    margin-top: 6px;
    color: ${p => p.theme.colors.text.primary};
`

export const CardPrice = styled.span`
    font-weight: ${p => p.theme.font.weight.extraBold};
`

export const RateWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding-left: 6px;
`

export const CardTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AddToFavButton = styled(Button)`
    width: 32px !important;
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    position: absolute;
    top: 12px;
    right: 12px;

    &.ant-btn:not(:disabled):focus-visible{
        outline: none;
        outline-offset: 0;
        transition: none;
    }
`