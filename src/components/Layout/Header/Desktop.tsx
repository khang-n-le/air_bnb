import React from 'react';
import type { MenuProps } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { ButtonDivider, Container, Header, HeaderContent, HostLink, LanguageIconButton, LogoLink, LogoLinkFull, LogoWrapper, NavBarContent, NavBarWrapper, Overlay, ProfileButton, ProfileDropdown, SearchBarWrapper, SearchButton, SearchButtonGroup, SearchButtonLabel, SearchForm, SearchIcon, SearchInput, SearchInputAddressBox, SearchInputBox, SearchInputButtonBox, SearchInputFrame, SearchInputFrameDivider, SearchInputGuestBox, SearchInputIconButton, SearchInputItem, SearchInputItemContent, SearchInputItemWrapper, SearchInputLabel, SearchInputPlaceholder, SearchInputRoomBox, SearchInputTitle, SearchNavBox, SearchNavButton, SearchNavButtonLabel, SearchNavContent, SearchNavItem, SearchNavList, SearchNavWrapper } from './styled';
import { Bars, GlobeIcon, LogoBrandIcon } from 'components/Icons';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAccount, selectAppDevice, setLogOut } from 'slice';
import Avatar from 'components/Avatar';

const loggedOutItems: MenuProps['items'] = [
  {
    key: '1',
    label: 'Đăng ký',
  },
  {
    key: '2',
    label: 'Đăng nhập',
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: <a href="/">Cho thuê chỗ ở qua AirBnb</a>,
  },
  {
    key: '4',
    label: <a href="/">Trung tâm trợ giúp</a>,
  },
];

const Desktop = ({ locationList, onShowModal }: { locationList: any[], onShowModal: (key: string) => void }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);
  const [locationNameList, setLocationNameList] = React.useState<any[]>([]);
  const [selectedLocationId, setSelecedLocationId] = React.useState()
  const appDevice = useAppSelector(selectAppDevice);
  const dispatch = useAppDispatch()
  const { account, error, isAuthenticated } = useAppSelector(selectAccount);
  const id = account?.user.id;

  const loggedInItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Tin nhắn',
    },
    {
      key: '2',
      label: 'Thông báo',
    },
    {
      key: '3',
      label: 'Chuyến đi',
    },
    {
      key: '4',
      label: 'Danh sách yêu thích',
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: <a href="/">Cho thuê chỗ ở qua AirBnb</a>,
    },
    {
      key: '6',
      label: <a href={`/users/${id}`}>Tài khoản</a>,
    },
    {
      type: 'divider',
    },
    {
      key: '7',
      label: <a href="/">Trung tâm trợ giúp</a>,
    },
    {
      key: '8',
      label: 'Đăng xuất',
    },
  ]

  React.useEffect(() => {
    if (locationList.length > 0) {
      const locationNameListArr = locationList.map(location => {
        return {
          value: location.id,
          label: `${location.tenViTri}, ${location.tinhThanh}`
        }
      })
      setLocationNameList(locationNameListArr)
    }

  }, [locationList])

  const openSearchBarByAddressHandler = () => {
    setIsSearchBarOpen(true);
  };

  const closeSearcBarHandler = () => {
    setIsSearchBarOpen(false)
  }

  const scrollHandler = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setIsSearchBarOpen(false)
    }
  }

  window.onscroll = () => { scrollHandler() }


  const changeLocationHandler = (value: any) => {
    setSelecedLocationId(value)
  }

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    onShowModal(key)
  };

  const handleProfileMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '8') {
      dispatch(setLogOut({}))
    }
  };

  const profileMenuLoggedIn = {
    items: loggedInItems,
    onClick: handleProfileMenuClick
  };

  const profileMenuLoggedOut = {
    items: loggedOutItems,
    onClick: handleMenuClick
  };

  return (
    <>
      <Header searchBarOpen={isSearchBarOpen}>
        <Container maxWidth={appDevice.maxWidth} paddingLeft={appDevice.paddingLeft} paddingRight={appDevice.paddingRight}>
          <HeaderContent>
            {/* Logo Wrapper */}
            <LogoWrapper>
              <LogoLink href="/">
                <LogoLinkFull>
                  <LogoBrandIcon
                    width={102}
                    height={32}
                    styles={{ display: 'block' }}
                  />
                </LogoLinkFull>
              </LogoLink>
            </LogoWrapper>

            {/* Search Bar Wrapper */}
            <SearchBarWrapper>
              <div>
                {/* Search Button Group */}
                <SearchButtonGroup searchBarOpen={isSearchBarOpen}>
                  <SearchButton onClick={openSearchBarByAddressHandler}>
                    <SearchButtonLabel>Địa điểm bất kỳ</SearchButtonLabel>
                  </SearchButton>
                  <ButtonDivider />
                  <SearchButton onClick={openSearchBarByAddressHandler}>
                    <SearchButtonLabel>tuần bất kỳ</SearchButtonLabel>
                  </SearchButton>
                  <ButtonDivider />
                  <SearchButton onClick={openSearchBarByAddressHandler}>
                    <SearchButtonLabel>Thêm khách</SearchButtonLabel>
                    <SearchIcon shape="circle" icon={<SearchOutlined />} />
                  </SearchButton>
                </SearchButtonGroup>

                {/* Search Nav*/}
                <SearchNavWrapper searchBarOpen={isSearchBarOpen}>
                  <SearchNavContent>
                    <SearchForm>
                      <SearchNavBox>
                        <SearchNavList>
                          <SearchNavItem>
                            <SearchNavButton type="text" size="large">
                              <SearchNavButtonLabel>Chỗ ở</SearchNavButtonLabel>
                            </SearchNavButton>
                          </SearchNavItem>
                          <SearchNavItem>
                            <SearchNavButton type="text" size="large">
                              <SearchNavButtonLabel>
                                Trải nghiệm
                              </SearchNavButtonLabel>
                            </SearchNavButton>
                          </SearchNavItem>
                          <SearchNavItem>
                            <SearchNavButton type="link" size="large">
                              <SearchNavButtonLabel>
                                Trải nghiệm trực tuyến
                              </SearchNavButtonLabel>
                            </SearchNavButton>
                          </SearchNavItem>
                        </SearchNavList>
                      </SearchNavBox>

                      <SearchInputBox>
                        <SearchInputFrame>
                          <SearchInputAddressBox>
                            <SearchInputItem>
                              <SearchInputLabel htmlFor='location-input'>
                                <SearchInputTitle>
                                  Địa điểm
                                </SearchInputTitle>
                                <SearchInput showSearch
                                  allowClear
                                  suffixIcon={null}
                                  bordered={false}
                                  placeholder="Tìm kiếm điểm đến"
                                  optionFilterProp="children"
                                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                  filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                  }
                                  options={locationNameList}
                                  dropdownStyle={{ padding: '24' }}
                                  id='location-input'
                                  onChange={changeLocationHandler}
                                />
                              </SearchInputLabel>
                            </SearchInputItem>
                          </SearchInputAddressBox>

                          <SearchInputFrameDivider />

                          <SearchInputRoomBox>
                            <SearchInputItem>
                              <SearchInputItemContent>
                                <SearchInputItemWrapper>
                                  <SearchInputTitle>Nhận phòng</SearchInputTitle>
                                  <SearchInputPlaceholder>
                                    Thêm ngày
                                  </SearchInputPlaceholder>
                                </SearchInputItemWrapper>
                              </SearchInputItemContent>
                            </SearchInputItem>

                            <SearchInputFrameDivider />

                            <SearchInputItem>
                              <SearchInputItemContent>
                                <SearchInputItemWrapper>
                                  <SearchInputTitle>Trả phòng</SearchInputTitle>
                                  <SearchInputPlaceholder>
                                    Thêm ngày
                                  </SearchInputPlaceholder>
                                </SearchInputItemWrapper>
                              </SearchInputItemContent>
                            </SearchInputItem>
                          </SearchInputRoomBox>

                          <SearchInputFrameDivider />

                          <SearchInputGuestBox>
                            <SearchInputItemContent>
                              <SearchInputItemWrapper>
                                <SearchInputTitle>Khách</SearchInputTitle>
                                <SearchInputPlaceholder>
                                  Thêm khách
                                </SearchInputPlaceholder>
                              </SearchInputItemWrapper>

                              <SearchInputButtonBox>
                                <SearchInputIconButton
                                  href={`/Search/${selectedLocationId}`}
                                  shape="circle"
                                  icon={<SearchOutlined />}
                                  size="large"
                                />
                              </SearchInputButtonBox>
                            </SearchInputItemContent>
                          </SearchInputGuestBox>
                        </SearchInputFrame>
                      </SearchInputBox>
                    </SearchForm>
                  </SearchNavContent>
                </SearchNavWrapper>
              </div>
            </SearchBarWrapper>

            {/* NavBar Wrapper */}
            <NavBarWrapper>
              <NavBarContent>
                <HostLink href="/">Cho thuê chỗ ở qua Airbnb</HostLink>
                <LanguageIconButton
                  shape="circle"
                  icon={<GlobeIcon width={16} height={16} color="initial" />}
                ></LanguageIconButton>
                <ProfileDropdown
                  menu={isAuthenticated ? profileMenuLoggedIn : profileMenuLoggedOut}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <ProfileButton>
                    <Bars
                      width={16}
                      height={16}
                      styles={{ display: 'block' }}
                      color="initial"
                    />
                    {isAuthenticated && account?.user.avatar === '' &&
                      <Avatar size={32} backgroundColor='#222'>{account?.user.name?.[0].toUpperCase()}</Avatar>
                    }

                    {isAuthenticated && account?.user.avatar !== '' &&
                      <Avatar size={32} src={account?.user.avatar}></Avatar>
                    }

                    {!isAuthenticated &&
                      <Avatar size={32} backgroundColor='#9e9e9e' icon={<UserOutlined style={{ fontSize: '18px' }} />}></Avatar>
                    }
                  </ProfileButton>
                </ProfileDropdown>
              </NavBarContent>
            </NavBarWrapper>
          </HeaderContent>
        </Container>
      </Header>

      <Overlay searchBarOpen={isSearchBarOpen} onClick={closeSearcBarHandler} />
    </>
  );
};

export default Desktop;
