import { Button, Form, Input, Modal } from "antd";
import { styled } from "styled-components";

export const CustomModal = styled(Modal)`
    &.ant-modal-header{
        padding-right: 24px;
    }

    &.ant-modal .ant-modal-content{
        padding-right: 0px !important;
    }

    &.ant-modal .ant-modal-title{
        text-align: center;
        font-size: ${p => p.theme.font.size.md};
        font-family: ${p => p.theme.font.family};
        padding-right: 24px;
    }
`

export const Title = styled.h2`
    margin: ${p => p.theme.spacing.xs} 0 ${p => p.theme.spacing.sm};
    padding-right: 24px;
    font-weight: ${p => p.theme.font.weight.bold};
    font-family: ${p => p.theme.font.family};
    text-align: center;
`

export const LogoBox = styled.div`
    margin-top: 24px;
    padding-right: 24px;
    text-align: center;
`

export const Logo = styled.img`
    width: 50px;
`