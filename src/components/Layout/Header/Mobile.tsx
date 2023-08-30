import React from 'react'
import {
  AdditionalInfoWrapper,
  AddressText,
  AddressWrapper,
  DotDividerBox,
  DurationText,
  DurationTextBox,
  FilterButton,
  FilterButtonBox,
  FilterIconWrapper,
  GuestText,
  GuestTextBox,
  SearchBar,
  SearchButtonBox,
  SearchButtonContainer,
  SearchButtonContent,
  SearchIconBox
} from './mobileStyled'
import { SearchButton } from './styled'
import { FilterIcon, SearchIcon } from 'components/Icons'
import { theme } from 'styled'

type Props = {}

const Mobile = (props: Props) => {
  return (
    <SearchButtonContainer>
      <SearchBar>
        <SearchButtonBox>
          <SearchButton style={{ width: '100%', height: '100%', backgroundColor: 'transparent', padding: '0' }}>
            <SearchIconBox>
              <SearchIcon width={16} height={16} styles={{ display: 'block' }} color={theme.colors.text.primary} />
            </SearchIconBox>
            <SearchButtonContent>
              <AddressWrapper>
                <AddressText>Địa điểm bất kỳ</AddressText>
              </AddressWrapper>
              <AdditionalInfoWrapper>
                <DurationTextBox>
                  <DurationText>
                    tuần bất kỳ
                  </DurationText>
                </DurationTextBox>
                <DotDividerBox>
                  •
                </DotDividerBox>
                <GuestTextBox>
                  <GuestText>
                    Thêm khách
                  </GuestText>
                </GuestTextBox>
              </AdditionalInfoWrapper>
            </SearchButtonContent>
          </SearchButton>
        </SearchButtonBox>
        <FilterButtonBox>
          <FilterButton>
            <FilterIconWrapper>
              <FilterIcon width={16} height={16} styles={{ display: 'block' }} />
            </FilterIconWrapper>
          </FilterButton>
        </FilterButtonBox>
      </SearchBar>
    </SearchButtonContainer>
  )
}

export default Mobile