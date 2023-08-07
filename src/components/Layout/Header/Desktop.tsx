import type { MenuProps } from 'antd';
import { Button, Divider, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { LogoBrandIcon } from 'components/Icons/LogoBrandIcon';
import { ButtonDivider, Container, Header, HostLink, LanguageIconButton, LogoLink, LogoLinkFull, LogoWrapper, NavBarContent, NavBarWrapper, Overlay, ProfileButton, ProfileDropdown, SearchBarWrapper, SearchButton, SearchButtonGroup, SearchButtonLabel, SearchForm, SearchIcon, SearchInput, SearchInputAddressBox, SearchInputBox, SearchInputButtonBox, SearchInputFrame, SearchInputFrameDivider, SearchInputGuestBox, SearchInputIconButton, SearchInputItem, SearchInputItemContent, SearchInputItemWrapper, SearchInputLabel, SearchInputPlaceholder, SearchInputRoomBox, SearchInputTitle, SearchNavBox, SearchNavButton, SearchNavButtonLabel, SearchNavContent, SearchNavItem, SearchNavList, SearchNavWrapper } from './styled';
import { GlobeIcon } from 'components/Icons';
import { Bars } from 'components/Icons/Bars';
import { ProfileUser } from 'components/Icons/ProfileUser';
import { useState } from 'react';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a href="/">
        Đăng ký
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a href="/">
        Đăng nhập
      </a>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: (
      <a href="/">
        Cho thuê chỗ ở qua AirBnb
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a href="/">
        Trung tâm trợ giúp
      </a>
    ),
  },
];

const Desktop = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [isAddressSearch, setIsAddressSearch] = useState(false)

  const openSearchBarByAddressHandler = () => {
    setIsSearchBarOpen(true)
    setIsAddressSearch(true)
  }

  const closeSearcBarHandler = () => {
    console.log(isSearchBarOpen)
    setIsSearchBarOpen(false)
  }

  return (
    <>
      <Header searchBarOpen={isSearchBarOpen}>
        <Container className={'home-inner'}>
          {/* Logo Wrapper */}
          <LogoWrapper>
            <LogoLink href="/">
              <LogoLinkFull>
                <LogoBrandIcon width={102} height={32} styles={{ display: 'block' }} />
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
                          <SearchNavButton type='text' size='large'>
                            <SearchNavButtonLabel>
                              Chỗ ở
                            </SearchNavButtonLabel>
                          </SearchNavButton>
                        </SearchNavItem>
                        <SearchNavItem>
                          <SearchNavButton type='text' size='large'>
                            <SearchNavButtonLabel>
                              Trải nghiệm
                            </SearchNavButtonLabel>
                          </SearchNavButton>
                        </SearchNavItem>
                        <SearchNavItem>
                          <SearchNavButton type='link' size='large'>
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
                            <SearchInputLabel htmlFor='location-input' onSearchByAddress={isAddressSearch}>
                              <SearchInputTitle>
                                Địa điểm
                              </SearchInputTitle>
                              <SearchInput placeholder='Tìm kiếm điểm đến' id='location-input' />
                            </SearchInputLabel>
                          </SearchInputItem>
                        </SearchInputAddressBox>

                        <SearchInputFrameDivider />

                        <SearchInputRoomBox>
                          <SearchInputItem>
                            <SearchInputItemContent>
                              <SearchInputItemWrapper>
                                <SearchInputTitle>
                                  Nhận phòng
                                </SearchInputTitle>
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
                                <SearchInputTitle>
                                  Trả phòng
                                </SearchInputTitle>
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
                              <SearchInputTitle>
                                Khách
                              </SearchInputTitle>
                              <SearchInputPlaceholder>
                                Thêm khách
                              </SearchInputPlaceholder>
                            </SearchInputItemWrapper>

                            <SearchInputButtonBox>
                              <SearchInputIconButton shape="circle" icon={<SearchOutlined />} size='large' />
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
              <HostLink href="/">
                Cho thuê chỗ ở qua Airbnb
              </HostLink>
              <LanguageIconButton shape="circle" icon={<GlobeIcon width={16} height={16} color='initial' />}></LanguageIconButton>
              <ProfileDropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
                <ProfileButton>
                  <Bars width={16} height={16} styles={{ display: 'block' }} color='initial' />
                  <ProfileUser width={32} height={32} styles={{ display: 'block' }} />
                </ProfileButton>
              </ProfileDropdown>
            </NavBarContent>
          </NavBarWrapper>
        </Container>
      </Header>

      <Overlay searchBarOpen={isSearchBarOpen} onClick={closeSearcBarHandler} />
    </>
  )
};

export default Desktop;