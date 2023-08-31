import { TabBar } from "antd-mobile";
import { styled } from "styled-components";

export const CTabBar = styled(TabBar)`
    border-top: 1px solid ${p => p.theme.colors.border.light};

    & .adm-tab-bar-item {
        color: ${p => p.theme.colors.text.secondary};
    }

    & .adm-tab-bar-item-active {
        color: ${p => p.theme.colors.primary.main};
    }

    & .adm-tab-bar-item-title-with-icon {
        margin-top: 4px;
    }

    & .adm-tab-bar-item-title {
        font-weight: ${p => p.theme.font.weight.bold};
        font-family: ${p => p.theme.font.family};
    }
`