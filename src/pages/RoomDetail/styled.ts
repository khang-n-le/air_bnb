import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 80px auto 0px;

  width: 100%;
  max-width: 1120px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 24px;
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-weight: ${p => p.theme.font.weight.normal};
  font-size: ${p => p.theme.font.size.xs};
`;

export const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ShareItemWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.bold};
  gap: 8px;

  p {
    text-decoration: underline;
  }
`;

export const InteractWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RoomImageWrapper = styled.div`
  padding-top: 24px;
`;

export const RoomImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

export const HostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
  padding-bottom: 24px;
`;

export const HostTitle = styled.h1`
  font-size: ${p => p.theme.font.size.lg};
  line-height: 33px;
  margin-bottom: 8px;
  margin-top: 0px;
`;

export const RoomInfo = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
  padding-left: 0px;
  margin: 0px;
`;

export const RoomInfoItem = styled.li`
  display: flex;
  gap: 5px;

  p {
    font-size: ${p => p.theme.font.size.sm};
    font-weight: ${p => p.theme.font.weight.normal};
    line-height: 20px;
  }
`;

export const HostAvatarWrapper = styled.div`
  position: relative;
  width: fit-content;

  .medal-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0px;
    bottom: 10px;
    font-size: 22px;

    svg {
      fill: red;
    }
  }
`;

export const HostAvatar = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const OrderWrapper = styled.div`
  position: relative;
  height: 100%;
  margin-left: 20%;
  padding-top: 48px;
`;
