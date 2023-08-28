import { Button } from "antd";
import { styled } from "styled-components";

export const SearchButtonContainer = styled.div`
    padding: 0.875rem 1.5rem 0 1.5rem;
    background-color: white;
`

export const SearchBar = styled.div`
    display: flex;
    width: 100%;
    min-width: 285px;
    min-height: 56px;
    flex-shrink: 0;
    border-radius: 62.5rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: #FFF;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.10);
`

export const SearchButtonBox = styled.div`
    width: 100%;
    min-width: 6.25rem;
`

export const SearchButton = styled(Button)`
`

export const SearchIconBox = styled.div`
    display: flex;
    padding: 0 1rem 0 1.25rem;
    justify-content: center;
`

export const SearchButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const AddressWrapper = styled.div`
    display: flex;
    align-self: stretch;
`

export const AddressText = styled.p`
    font-family: ${p => p.theme.font.family};
    color: ${p => p.theme.colors.text.primary};
    font-weight: ${p => p.theme.font.weight.bold};
    font-size: ${p => p.theme.font.size.xs};
    letter-spacing: -0.9px;
    line-height: 1.25;
`

export const AdditionalInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.25;
`

export const DurationTextBox = styled.span`
`

export const DurationText = styled.p`
    font-size: ${p => p.theme.font.size.xxs};
    font-family: ${p => p.theme.font.family};
`

export const DotDividerBox = styled.div`
    padding: 0 5px;
`

export const GuestTextBox = styled.span``

export const GuestText = styled.p`
    font-size: ${p => p.theme.font.size.xxs};
    font-family: ${p => p.theme.font.family};

`

export const FilterButtonBox = styled.div`
    display: flex;
    align-items: center;
`

export const FilterButton = styled(Button)`
    border: none;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    width: 100%;
    height: 100%;
`

export const FilterIconWrapper = styled.div`
    border: 1px solid ${p => p.theme.colors.border.main};
    border-radius: 25px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`