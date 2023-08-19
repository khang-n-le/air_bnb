import { Button, DatePicker, Form, Input, Select } from "antd";
import { styled } from "styled-components";

export const CFormSignup = styled(Form)`
padding-right: 24px;
font-family: ${p => p.theme.font.family};
    
    & .ant-form-item{
        font-family: inherit;
    } 

    & .ant-form-item .ant-form-item-label {
        font-weight: ${p => p.theme.font.weight.bold};
        font-family: ${p => p.theme.font.family};
        
    }
`

export const CInput = styled(Input)`
        /* &.ant-input:hover{
            border-color: ${p => p.theme.colors.black};
        } */

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

export const CInputPassword = styled(Input.Password)`
    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover{
        border-color: ${p => p.theme.colors.black};
        border-inline-end-width: none;
    }

    &.ant-input-affix-wrapper:focus, &.ant-input-affix-wrapper-focused{
        border-color: ${p => p.theme.colors.black};
        box-shadow: none;
        border-width: 2px;
        outline: 0;
    }

    &.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused{
        box-shadow: none;
        border-inline-end-width: 2px
    }
`

export const CDatePicker = styled(DatePicker)`
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

export const CSelect = styled(Select)`
    &.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
        border-color: ${p => p.theme.colors.black};
    }

    &.ant-select-focused.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) .ant-select-selector {
        border-color: ${p => p.theme.colors.black};
        box-shadow: none;
        border-width: 2px;
    }
`

export const SubmitButton = styled(Button)`
    width: 100%;
    margin: 12px 0;
    background-image: linear-gradient(to right, ${p => p.theme.colors.primary.dark} 0, ${p => p.theme.colors.primary.main} 51%, ${p => p.theme.colors.primary.dark} 100%);
    background-size: 200%;
    transition: all .5s;

    &:hover {
        background-position: right center;
    }

    &.ant-btn:not(:disabled):focus-visible {
        outline: none ;
        outline-offset: 0;
        transition: none;
    }
`

export const LoginNav = styled.p`
    text-align: center;
`

export const LoginNavButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    font-weight: ${p => p.theme.font.weight.bold};
    color: ${p => p.theme.colors.primary.main};

    &:hover {
    color: ${p => p.theme.colors.primary.light};
    }
`

export const AlertBox = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: ${p => p.theme.colors.red[50]};
    margin: 20px 0;
    border: 1px solid ${p => p.theme.colors.red[300]};
    border-radius: ${p => p.theme.radius.md};
`

export const AlertText = styled.p`
margin-left: ${p => p.theme.spacing.xs};
font-weight: ${p => p.theme.font.weight.medium};
`