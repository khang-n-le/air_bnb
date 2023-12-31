import {
  HostAvatar,
  HostAvatarWrapper,
  HostInfo,
  HostTitle,
  InteractWrapper,
  OrderWrapper,
  RateWrapper,
  RoomImage,
  RoomImageWrapper,
  RoomInfo,
  RoomInfoItem,
  ShareItemWrapper,
  ShareWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './styled';
import {
  HeartIcon,
  MedalIcon,
  StarIcon,
  TranslateIcon,
  UploadIcon,
} from 'components';
import { theme } from 'styled';
import React from 'react';
import { Col, Row } from 'antd';
import { RoomDetailInfo } from './Components';
import Comment from './Components/Comment';
import Order from './Components/Order';
import { CUSTOMER_TYPE } from 'utils';

interface DesktopType {
  data: any;
  handleChangeCustomer: (isPlus: boolean, customerType: CUSTOMER_TYPE) => void;
  adults: number;
  babies: number;
  children: number;
  pets: number;
  handleOrder: (startDay: string, endDay: string) => void;
  isSuccess: boolean;
}

const Desktop = ({
  data,
  handleChangeCustomer,
  adults,
  babies,
  children,
  pets,
  handleOrder,
  isSuccess,
}: DesktopType) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TranslateIcon color={'#000'} />
        <Title>{data.tenPhong}</Title>
      </TitleWrapper>

      <InteractWrapper>
        <RateWrapper>
          <p>
            <StarIcon
              color={theme.colors.black}
              width={14}
              height={14}
            ></StarIcon>{' '}
            4,88 · 34
          </p>
          <p style={{ textDecoration: 'underline' }}>đánh giá</p>·
          <p>
            <i className="fa-solid fa-medal"></i> Chủ nhà siêu cấp
          </p>
          ·<p style={{ textDecoration: 'underline' }}>Kiev, Ukraina</p>
        </RateWrapper>
        <ShareWrapper>
          <ShareItemWrapper>
            <UploadIcon
              color={theme.colors.black}
              width={16}
              height={16}
            ></UploadIcon>
            <p>Chia sẻ</p>
          </ShareItemWrapper>

          <ShareItemWrapper>
            {' '}
            <HeartIcon width={16} height={16}></HeartIcon>
            <p>Lưu</p>
          </ShareItemWrapper>
        </ShareWrapper>
      </InteractWrapper>
      <RoomImageWrapper>
        <RoomImage src={data.hinhAnh} alt={'room image'}></RoomImage>
      </RoomImageWrapper>
      <Row>
        <Col span={14}>
          <HostInfo>
            <div>
              {' '}
              <HostTitle>Khách sạn. Chủ nhà Sajjad</HostTitle>
              <RoomInfo>
                <RoomInfoItem>
                  <p>{data.khach} khách</p>
                </RoomInfoItem>
                <RoomInfoItem>
                  {' '}
                  <p> · </p>
                  <p>{data.phongNgu} phòng ngủ</p>
                </RoomInfoItem>
                <RoomInfoItem>
                  {' '}
                  <p> · </p>
                  <p>{data.giuong} giường</p>
                </RoomInfoItem>
                <RoomInfoItem>
                  {' '}
                  <p> · </p>
                  <p>{data.phongTam} phòng tắm riêng</p>
                </RoomInfoItem>
              </RoomInfo>
            </div>
            <HostAvatarWrapper>
              <HostAvatar
                src={
                  'https://a0.muscache.com/im/pictures/user/c74ad8cf-32dd-46ff-b5a0-10dec4892e4c.jpg?im_w=240'
                }
                alt={'host avatar'}
              ></HostAvatar>
              <div className={'medal-icon'}>
                <MedalIcon color={theme.colors.primary.main}></MedalIcon>
              </div>
            </HostAvatarWrapper>
          </HostInfo>
          <RoomDetailInfo data={data}></RoomDetailInfo>
        </Col>
        <Col span={10}>
          <OrderWrapper>
            <Order
              isSuccess={isSuccess}
              adults={adults}
              babies={babies}
              children={children}
              pets={pets}
              handleChangeCustomer={handleChangeCustomer}
              data={data}
              handleOrder={handleOrder}
            ></Order>
          </OrderWrapper>
        </Col>
      </Row>
      {data.id ? <Comment id={data.id}></Comment> : <></>}
    </Wrapper>
  );
};

export default Desktop;
