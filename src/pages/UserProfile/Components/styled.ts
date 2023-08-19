import { Avatar, Button, DatePicker, Form, Input, Select } from "antd"
import { theme } from "styled"
import { styled } from "styled-components"

export const UserAvatarConatainer = styled.div``

export const UserAvatarCard = styled.div`
    position: sticky;
    top: 144px;
    font-family: ${p => p.theme.font.family};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    border-radius: ${p => p.theme.radius.xl};
    border: 1px solid rgba(0,0,0,0.04);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
`

export const AvatarBox = styled.div`
    text-align: center;
`

export const CAvatar = styled(Avatar)``

export const UserNameBox = styled.div`
    margin: 16px 0 4px;
    text-align: center;
`

export const UserName = styled.p`
    font-family: inherit;
    font-size: ${p => p.theme.font.size.xl};
    line-height: 1.3;
    font-weight: ${p => p.theme.font.weight.extraBold};
    letter-spacing: -1px;
`

export const UserRoleBox = styled.div``

export const UserRoleText = styled.p`
    font-family: inherit;
    font-size: ${p => p.theme.font.size.sm};
    font-weight: ${p => p.theme.font.weight.bold};
    line-height: 1.5;
`

export const UserInfoContainer = styled.div`
    font-family: ${p => p.theme.font.family};
`

export const UserInfoSectionTitleBox = styled.div``

export const UserInfoSectionTitle = styled.h2`
    font-family: inherit;
    font-size: ${p => p.theme.font.size.xl};
    color: ${p => p.theme.colors.text.primary};
    line-height: 1.2;
`

export const UserInfoList = styled.div`
    margin-top: 24px;
`

export const UserInfoItemWrapper = styled.div`
    border-bottom: 0.8px solid rgb(235, 235, 235);
`

export const UserInfoContentBox = styled.div`
    display: flex;
    padding: 24px 0;
`

export const UserInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    .disabled > p {
        color: ${p => p.theme.colors.text.disabled};
    }
`

export const UserInfoItemTitleBox = styled.div``

export const UserInfoItemTitle = styled.p`
    font-weight: ${p => p.theme.font.weight.bold};
    margin-bottom: 4px;
    color: ${p => p.theme.colors.text.primary};
    font-family: inherit;
    font-size: ${p => p.theme.font.size.sm};

`

export const UserInfoItemTextBox = styled.div``

export const UserInfoItemText = styled.p`
    font-family: inherit;
    color: ${p => p.theme.colors.text.secondary};
    font-size: ${p => p.theme.font.size.xs};
`

export const UserInfoItemButtonBox = styled.div``

export const UserInfoItemButton = styled(Button)`
    border: none;
    box-shadow: none;
    font-weight: ${p => p.theme.font.weight.medium};
    color: ${p => p.theme.colors.text.primary};
    padding: 0;
    margin-left: auto;
    height: auto;

    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover,
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):active
    {
        color: ${p => p.theme.colors.text.primary};
        border: none;
    }

    &.ant-btn:not(:disabled):focus-visible {
        outline: none;
        outline-offset: 0;
        transition: none;
    }

    & span {
    font-family: inherit;
    text-decoration: underline;
    }

    &.ant-btn-default:disabled, 
    &.ant-btn-default.ant-btn-disabled {
        background-color: transparent;
    }
`

export const UserInfoForm = styled(Form)``

export const TextInput = styled(Input)`
    &.ant-input:hover {
            border-color: ${p => p.theme.colors.black} !important;
        }

        & .ant-input:hover {
            border-color: ${p => p.theme.colors.black} !important;
        }

        & .ant-input:focus, 
        & .ant-input-focused {
            border-color: ${p => p.theme.colors.black} !important;
            border-width: 2px;
            box-shadow: none;
        }

        &.ant-input:focus {
            border-color: ${p => p.theme.colors.black};
            box-shadow: none;
            border-width: 2px;
        }

        &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus {
            box-shadow: none;
            border-inline-end-width: 2px
        }
`

export const SelectInput = styled(Select)`
    &.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
        border-color: ${p => p.theme.colors.black};
    }

    &.ant-select-focused.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) .ant-select-selector {
        border-color: ${p => p.theme.colors.black};
        box-shadow: none;
        border-width: 2px;
    }
`

export const DatePickerInput = styled(DatePicker)`
    &.ant-picker {
            width: 100% ;
    }

    &.ant-picker:hover, &.ant-picker-focused {
        border-color: ${p => p.theme.colors.black};
    }

    &.ant-picker-focused {
        box-shadow: none;
        border-width: 2px;
    }
`

export const UserInfoFormButton = styled(Button)`
    background-color: ${p => p.theme.colors.text.primary};
    color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight.medium};
    border: none;

    &:hover {
        color: ${p => p.theme.colors.white} !important;
        background-color: ${p => p.theme.colors.black};
        border-color: transparent !important;
    }

    &.ant-btn:not(:disabled):focus-visible {
        outline: none;
        outline-offset: 0;
        transition: none;
    }
`