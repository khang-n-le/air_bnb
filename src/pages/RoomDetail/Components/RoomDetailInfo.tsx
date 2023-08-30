import React from 'react';
import {
  ButtonShowAll,
  Description,
  DescriptionWrapper,
  Extensions,
  ExtensionsItem,
  ExtensionsItemTitle,
  ExtensionsItemWrapper,
  ExtensionsTitle,
  IconWrapper,
  RoomDetailWrapper,
  ShowMore,
  TranslateItem,
  UtilityContentWrapper,
  UtilityDescription,
  UtilityTitle,
  UtilityWrapper,
  Wrapper,
} from './styled';
import {
  AirConditionerIcon,
  BackYardIcon,
  BalconyIcon,
  BeachWayIcon,
  BreakFastIcon,
  DoorIcon,
  HairDryerIcon,
  MedalOutLineIcon,
  PoolIcon,
  RightDerectionIcon,
  SmokeAlarmIcon,
  TranslateIcon,
  TVIcon,
  WifiIcon,
} from 'components';
import { theme } from 'styled';

const RoomDetailInfo = ({ data }: { data: any }) => {
  return (
    <Wrapper>
      <RoomDetailWrapper style={{ gap: '20px' }}>
        <UtilityWrapper>
          <IconWrapper>
            <DoorIcon
              width={24}
              height={24}
              color={theme.colors.black}
            ></DoorIcon>
          </IconWrapper>

          <UtilityContentWrapper>
            <UtilityTitle>Tự nhận phòng</UtilityTitle>
            <UtilityDescription>
              Bạn có thể gặp nhân viên trực cửa để nhận phòng.
            </UtilityDescription>
          </UtilityContentWrapper>
        </UtilityWrapper>{' '}
        <UtilityWrapper>
          <IconWrapper>
            <MedalOutLineIcon
              width={24}
              height={24}
              color={theme.colors.black}
            ></MedalOutLineIcon>
          </IconWrapper>

          <UtilityContentWrapper>
            <UtilityTitle>Sajjad là Chủ nhà siêu cấp</UtilityTitle>
            <UtilityDescription>
              Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá
              cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời
              cho khách.
            </UtilityDescription>
          </UtilityContentWrapper>
        </UtilityWrapper>
        <UtilityWrapper>
          <IconWrapper>
            {' '}
            <PoolIcon
              width={24}
              height={24}
              color={theme.colors.black}
            ></PoolIcon>
          </IconWrapper>

          <UtilityContentWrapper>
            <UtilityTitle>Lặn ngụp</UtilityTitle>
            <UtilityDescription>
              Đây là một trong số ít chỗ ở có bể bơi tại khu vực này.
            </UtilityDescription>
          </UtilityContentWrapper>
        </UtilityWrapper>
      </RoomDetailWrapper>
      <RoomDetailWrapper>
        <TranslateItem>
          <TranslateIcon
            height={16}
            width={16}
            color={theme.colors.black}
          ></TranslateIcon>

          <p style={{ marginLeft: '12px' }}>
            {' '}
            Một số thông tin đã được dịch tự động.{' '}
          </p>
          <p
            style={{
              fontWeight: theme.font.weight.bold,
              textDecoration: 'underline',
            }}
          >
            Hiển thị ngôn ngữ gốc
          </p>
        </TranslateItem>
        <DescriptionWrapper>
          <Description>{data.moTa}</Description>
        </DescriptionWrapper>
        <br />
        <ShowMore>
          <p style={{ textDecoration: 'underline', marginRight: '4px' }}>
            Hiển thị thêm
          </p>
          <RightDerectionIcon
            width={12}
            height={12}
            color={theme.colors.black}
          ></RightDerectionIcon>
        </ShowMore>
      </RoomDetailWrapper>
      <RoomDetailWrapper style={{ borderBottom: '1px solid #f1f1f1' }}>
        <ExtensionsTitle>Nơi này có những gì cho bạn</ExtensionsTitle>
        <Extensions>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <BeachWayIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></BeachWayIcon>
              </IconWrapper>
              <ExtensionsItemTitle>
                Lối ra bãi biển – Hướng biển
              </ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <WifiIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></WifiIcon>
              </IconWrapper>
              <ExtensionsItemTitle>Wi-fi</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <PoolIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></PoolIcon>
              </IconWrapper>
              <ExtensionsItemTitle>Bể bơi Chung –</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <TVIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></TVIcon>
              </IconWrapper>
              <ExtensionsItemTitle>TV</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          {data.dieuHoa ? (
            <ExtensionsItemWrapper span={12}>
              <ExtensionsItem>
                <IconWrapper>
                  <AirConditionerIcon
                    width={24}
                    height={24}
                    color={theme.colors.black}
                  ></AirConditionerIcon>
                </IconWrapper>
                <ExtensionsItemTitle>Điều hòa nhiệt độ</ExtensionsItemTitle>
              </ExtensionsItem>
            </ExtensionsItemWrapper>
          ) : (
            <></>
          )}

          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <BalconyIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></BalconyIcon>
              </IconWrapper>
              <ExtensionsItemTitle>
                Sân hiên hoặc ban công riêng
              </ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <BackYardIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></BackYardIcon>
              </IconWrapper>
              <ExtensionsItemTitle>Sân sau</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <HairDryerIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></HairDryerIcon>
              </IconWrapper>
              <ExtensionsItemTitle>Máy sấy tóc</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <BreakFastIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></BreakFastIcon>
              </IconWrapper>
              <ExtensionsItemTitle>Bữa sáng</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
          <ExtensionsItemWrapper span={12}>
            <ExtensionsItem>
              <IconWrapper>
                <SmokeAlarmIcon
                  width={24}
                  height={24}
                  color={theme.colors.black}
                ></SmokeAlarmIcon>
              </IconWrapper>
              <ExtensionsItemTitle>Máy báo khói</ExtensionsItemTitle>
            </ExtensionsItem>
          </ExtensionsItemWrapper>
        </Extensions>
        <ButtonShowAll>Hiển thị tất cả 32 tiện nghi</ButtonShowAll>
      </RoomDetailWrapper>
    </Wrapper>
  );
};

export default RoomDetailInfo;
