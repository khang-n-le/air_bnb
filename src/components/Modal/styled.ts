import { Button, Form, Input, Modal } from "antd";
import { styled } from "styled-components";

export const CustomModal = styled(Modal)`
    &.ant-modal .ant-modal-content{
        padding-right: 0px !important;
    }

    &.ant-modal .ant-modal-title{
        text-align: center;
        font-size: ${p => p.theme.font.size.md};
        font-family: ${p => p.theme.font.family};
    }


`

export const Title = styled.h2`
    margin: ${p => p.theme.spacing.sm} 0 ${p => p.theme.spacing.xs};
    font-weight: ${p => p.theme.font.weight.bold};
    font-family: ${p => p.theme.font.family};
`

