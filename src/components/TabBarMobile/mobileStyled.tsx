import { TabBar } from "antd-mobile";
import { styled } from "styled-components";

export const CTabBar = styled(TabBar)`
    border-top: 1px solid ${p => p.theme.colors.border.light};
`

export const CTabBarItem = styled(TabBar.Item)`
    &.adm-tab-bar-item.adm-tab-bar-item-active {
        color: ${p => p.theme.colors.primary.main} !important;
    }

`