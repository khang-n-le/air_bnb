import React from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {
    AirBnbLogoIcon,
    HeartOutlinedIcon,
    InboxIcon,
    SearchIcon,
    UserIcon,
} from 'components/Icons'
import { CTabBar, CTabBarItem } from './mobileStyled'

type Props = {}

const TabBarMobile = (props: Props) => {
    const tabs = [
        {
            key: 'home',
            title: 'Khám phá',
            icon: <SearchIcon width={24} height={24} color='#B0B0B0' styles={{ display: 'block' }} />,
        },
        {
            key: 'wishlists',
            title: 'Yêu thích',
            icon: <HeartOutlinedIcon width={24} height={24} color='#fff' styles={{ display: 'block', stroke: '#B0B0B0', strokeWidth: 2 }} />,
        },
        {
            key: 'trips',
            title: 'Chuyến đi',
            icon: <AirBnbLogoIcon width={24} height={24} color='#B0B0B0' styles={{ display: 'block' }} />,
        },
        {
            key: 'inbox',
            title: 'Hộp thư',
            icon: <InboxIcon width={24} height={24} color='#B0B0B0' styles={{ display: 'block' }} />,
        },
        {
            key: 'accountSetting',
            title: 'Hồ sơ',
            icon: <UserIcon width={24} height={24} color='#B0B0B0' styles={{ display: 'block' }} />,
        },
    ]

    return (
        <CTabBar style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: 'white', zIndex: '1' }}>
            {tabs.map(item => (
                <CTabBarItem key={item.key} icon={item.icon} title={item.title} style={{ padding: '16px 8px' }} />
            ))}
        </CTabBar>
    )
}

export default TabBarMobile