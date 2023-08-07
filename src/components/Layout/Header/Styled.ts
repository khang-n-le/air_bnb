import styled from 'styled-components'
import { Button, Dropdown, Select } from 'antd'

interface Props {
    searchBarOpen?: boolean,
    onSearchByAddress?: boolean
}

export const Header = styled.header<Props>`
    position: relative;
    height: 80px;
    width: 100%;
    z-index: 100;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 0;
        background-color: ${p => p.theme.colors.white};
        opacity: 1;
        box-shadow: rgb(0 0 0 / 8%) 0 1px 0;

        transform-origin: 50% 0%;
        transform: ${props => (props.searchBarOpen ? 'scaleY(2)' : 'none')};
        transition: transform ${p => p.theme.transition.duration} cubic-bezier(0.2,0,0,1);
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding: 0 80px;
`

export const LogoWrapper = styled.div`
    flex: 1 0 140px;
`

export const LogoLink = styled.a`
    height: 80px;
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 2;
`

export const LogoLinkFull = styled.div``

export const SearchBarWrapper = styled.div`
    flex: 0 1 auto;
`

export const SearchButtonGroup = styled.div<Props>`
    display: inline-flex;
    border: 1px solid ${p => p.theme.colors.border.main};
    border-radius: ${p => p.theme.radius.xxl};
    align-items: center;
    box-shadow: ${p => p.theme.shadows.lg};
    transition: box-shadow ${p => p.theme.transition.duration},
                transform 0.25s ease,
                opacity 0.1s ease,
                visibility 0s 0.05s             
    ;

    transform-origin: 50% 0%;
    transform: ${props => (props.searchBarOpen ? 'matrix(2.85714, 0, 0, 1.375, 0, 79.75)' : 'scale(1,1) translateY(0)')}; 
    visibility: ${props => (props.searchBarOpen ? 'hidden' : 'visible')};
    opacity: ${props => (props.searchBarOpen ? 0 : 1)};

    &:hover {
        box-shadow: ${p => p.theme.shadows.md};
    }
`

export const SearchButton = styled(Button)`
    box-shadow: none;
    border: none;
    color: ${p => p.theme.colors.text.primary};
    font-weight: ${p => p.theme.font.weight.bold};
    display: flex;
    align-items: center;
    padding: 0;
    height: 48px;

    &:hover, &:active {
        color: ${p => p.theme.colors.text.primary} !important;
        border: none;
    }

    &:first-of-type {
        padding-left: 8px;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
    }

    &:last-of-type {
        padding-right: 8px;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        font-weight: ${p => p.theme.font.weight.normal};
        color: ${p => p.theme.colors.text.secondary};

        &:hover {
        color: ${p => p.theme.colors.text.secondary} !important;
        font-weight: ${p => p.theme.font.weight.normal};
        }
    }
`

export const SearchButtonLabel = styled.p`
    padding: 0 16px;
    font-size: ${p => p.theme.font.size.xs};
`

export const ButtonDivider = styled.span`
    height: 24px;
    width: 1px;
    background-color: ${p => p.theme.colors.border.main};
`

export const SearchIcon = styled(Button)`
    background-color: ${p => p.theme.colors.primary.main};
    color: ${p => p.theme.colors.white};
    border: none;
    box-shadow: none;

    &:hover {
        border: none !important;
        color: ${p => p.theme.colors.white} !important; 
        box-shadow: none;
    }
`
export const NavBarWrapper = styled.div`
    flex: 1 0 140px;
`

export const NavBarContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 80px;
    color: ${p => p.theme.colors.text.primary};
`

export const HostLink = styled.a`
    text-decoration: none;
    color: ${p => p.theme.colors.text.primary};
    background-color: transparent;
    font-weight: ${p => p.theme.font.weight.bold};
    font-size: ${p => p.theme.font.size.xs};
    position: relative;
    z-index: 1;
    padding: 12px;
    line-height: 18px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${p => p.theme.colors.white};
        border-radius: ${p => p.theme.radius.xxl};
        z-index: -1;
        transition: all ${p => p.theme.transition.duration};
    }

    &:hover::before {
        background-color: ${p => p.theme.colors.grey[200]};
    }
`

export const LanguageIconButton = styled(Button)`
    box-shadow: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 42px;
    width: 42px !important;
    padding: 0;
    margin-right: 8px;
    background-color: ${p => p.theme.colors.white};
    transition: all ${p => p.theme.transition.duration};

    &:hover {
        background-color: ${p => p.theme.colors.grey[200]};
        color: initial !important;
    }
`

export const ProfileDropdown = styled(Dropdown)`

`

export const ProfileButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    gap: 12px;
    height: 42px;
    padding: 5px 5px 5px 12px ;
    border-radius: ${p => p.theme.radius.xxl};
    border-color: ${p => p.theme.colors.border.main};
    transition: all ${p => p.theme.transition.duration};

    &:hover, &:focus {
        box-shadow: ${p => p.theme.shadows.md};
        border-color: ${p => p.theme.colors.border.main} !important;
    }

`
export const SearchNavWrapper = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 80px;
    z-index: 1;

    transform-origin: 50% 0%;
    transform: ${props => (props.searchBarOpen ? 'none' : 'matrix(0.35, 0, 0, 0.727273, 0, -42.1818)')};
    visibility: ${props => (props.searchBarOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.searchBarOpen ? 1 : 0)};
    transition: transform 0.25s ease,
                opacity 0.2s ease,
                visibility 0s ease;
`

export const SearchNavContent = styled.div``

export const SearchForm = styled.form`
    max-width: 850px;
    margin: 0 auto;
`

export const SearchNavBox = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchNavList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
`

export const SearchNavItem = styled.li``

export const SearchNavButton = styled(Button)`
    font-size: ${p => p.theme.font.size.sm};
    color: ${p => p.theme.colors.text.primary};
    padding: 8px 16px !important;
    
    &:hover {
        background-color: transparent !important;
        color: ${p => p.theme.colors.text.main} !important;
    }
    
    
    `
export const SearchNavButtonLabel = styled.div`
    position: relative;

    &::after {
        content: "";
        position: absolute;
        height: 2px;
        bottom: -6px;
        width: 100%;
        left: 0;
        background-color: ${p => p.theme.colors.primary.light};
        transform: scaleX(0);
        transition: all ${p => p.theme.transition.duration} cubic-bezier(0.2,0,0,1);
    }
    &:hover::after {
        transform: scaleX(1);
        opacity: 0.65;
    }
`

export const SearchInputBox = styled.div`
    display: flex;
    height: 66px;
    width: 100%;
    color: ${p => p.theme.colors.text.primary};
    position: relative;
    border: 1px solid ${p => p.theme.colors.border.main};
    border-radius: ${p => p.theme.radius.xl};
`

export const SearchInputFrame = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    flex: 1 1 0%;
`

export const SearchInputFrameDivider = styled.div`
    border-right: 1px solid ${p => p.theme.colors.border.main};
    height: 32px;
    flex: 0 0 0;
`

export const SearchInputAddressBox = styled.div`
    cursor: pointer;
    flex: 1.25 0 0%;
`
export const SearchInputRoomBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    flex: 1 0 0%;
`
export const SearchInputGuestBox = styled.div`
    flex: 1 0 0%;
    cursor: pointer;
`

export const SearchInputItem = styled.div`
    display: flex;
    flex: 1 0 0%;
    align-items: center;
    margin: -1px;
    position: relative;
`

export const SearchInputItemContent = styled.div`
    display: flex;
    flex: 1 0 0%;
    align-items: center;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${p => p.theme.radius.xl};
        z-index: -1;
        transition: all ${p => p.theme.transition.duration};
    }

    &:first-child:hover::after {
        background-color: ${p => p.theme.colors.grey[200]};
    }

`

export const SearchInputItemWrapper = styled.div`
    padding: 14px 24px;
    overflow: hidden;
    width: 100%;
    z-index: 1;

`

export const SearchInputLabel = styled.label<Props>`
    display: block;
    flex: 1 0 0%;
    min-width: 0;
    padding: 13px 32px;
    border-radius: ${p => p.theme.radius.xl};
    background-clip: padding-box;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${p => p.theme.radius.xl};
        z-index: -1;
        transition: all ${p => p.theme.transition.duration};
    }

    &:hover::after {
        background-color: ${p => p.theme.colors.grey[200]};
    }


    &:focus-within::after {
        background-color: ${p => p.theme.colors.white};
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
`

export const SearchInputTitle = styled.p`
    font-size: ${p => p.theme.font.size.xxs};
    line-height: 16px;
    font-weight: ${p => p.theme.font.weight.extraBold};
`

export const SearchInputPlaceholder = styled.p`
    font-size: ${p => p.theme.font.size.xs};
    font-weight: ${p => p.theme.font.weight.light};
    color: ${p => p.theme.colors.text.secondary};
`

export const SearchInput = styled(Select)`
    width: 100%;

    &:where(.css-dev-only-do-not-override-19gw05y).ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
        padding: 0;
        height: 22px;
    }

    &:where(.css-dev-only-do-not-override-19gw05y).ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input{
        height: 22px;
    }

    &:where(.css-dev-only-do-not-override-19gw05y).ant-select-single .ant-select-selector .ant-select-selection-search {
        inset-inline-start: 0;
        inset-inline-end: 0;
    }

    &:where(.css-dev-only-do-not-override-19gw05y).ant-select-single .ant-select-selector .ant-select-selection-item{
        line-height: 24px;
        font-weight: 700;
        color: ${p => p.theme.colors.text.primary};
    }

    &:where(.css-dev-only-do-not-override-19gw05y).ant-select-single .ant-select-selector .ant-select-selection-placeholder{
        line-height: 22px;
        color: ${p => p.theme.colors.text.secondary};
        font-family: inherit;
        font-size: 15px;
        font-weight: ${p => p.theme.font.weight.normal};
    }
`

export const SearchInputButtonBox = styled.div`
    padding-right: 8px;
    flex: 0 0 0%;
`

export const SearchInputIconButton = styled(Button)`
    width: 48px !important;
    height: 48px !important;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary.main};
    border: none;
    transition: all ${p => p.theme.transition.duration};

    &:hover {
        color: ${p => p.theme.colors.white} !important;
        background-image: linear-gradient(to right, ${p => p.theme.colors.primary.dark}, ${p => p.theme.colors.secondary.main});
    }
`

export const Overlay = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 99;

    visibility: ${props => props.searchBarOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.searchBarOpen ? 1 : 0};
`