import styled from 'styled-components';

export const Wrapper = styled.div``;

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
