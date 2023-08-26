import React from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { CBreadcrumb, CBreadcrumbItem, CContent, CFooter, CHeader, CLayout, CMenu, CSider } from './styled';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

type Props = {}

const Desktop = (props: Props) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <CLayout style={{ minHeight: '100vh' }}>
            <CSider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <CMenu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </CSider>
            <CLayout>
                <CHeader style={{ padding: 0, background: colorBgContainer }} />
                <CContent style={{ margin: '0 16px' }}>
                    <CBreadcrumb style={{ margin: '16px 0' }}>
                        <CBreadcrumbItem>User</CBreadcrumbItem>
                        <CBreadcrumbItem>Bill</CBreadcrumbItem>
                    </CBreadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        Bill is a cat.
                    </div>
                </CContent>
                <CFooter style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</CFooter>
            </CLayout>
        </CLayout>
    )
}

export default Desktop