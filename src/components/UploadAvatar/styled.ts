import { Button, Upload } from "antd";
import { styled } from "styled-components";

export const UploadAvatarButton = styled.div`
    position: relative;
    margin-top: -16px;
    z-index: 1;
`

export const UploadInput = styled.input`
    display: none;
`

export const UploadLabel = styled.label`
    cursor: pointer;
    display: inline-block;
    background-color: ${p => p.theme.colors.white};
    padding: 8px 16px;
    border-radius: ${p => p.theme.radius.xl};
    box-shadow: ${p => p.theme.shadows.lg};
`

export const UploadLabelContent = styled.span`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing.xxs};
`

export const UploadLabelIcon = styled.span``

export const UploadLabelText = styled.p`
        font-family: ${p => p.theme.font.family};
        font-weight: ${p => p.theme.font.weight.medium};
`