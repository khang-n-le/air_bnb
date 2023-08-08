import {
  InteractWrapper,
  RateWrapper,
  RoomImage,
  RoomImageWrapper,
  ShareItemWrapper,
  ShareWrapper,
  Title,
  Wrapper,
} from './styled';
import { HeartIcon, StartIcon, UploadIcon } from 'components';
import { theme } from '../../styled';

interface DesktopType {
  data: any;
}

const Desktop = ({ data }: DesktopType) => {
  return (
    <Wrapper>
      <Title>{data.tenPhong}</Title>
      <InteractWrapper>
        <RateWrapper>
          <p>
            <StartIcon
              color={theme.colors.black}
              width={14}
              height={14}
            ></StartIcon>{' '}
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
    </Wrapper>
  );
};

export default Desktop;
