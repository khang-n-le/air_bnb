import styled from "styled-components";

export const Wrapper = styled.div<{ maxWidth?: number }>`
  max-width: ${p =>
        p.maxWidth ? `${p.maxWidth}px` : 'var(--max-width)'};
  width: 100%;
  padding: 0px 80px;

  @media only screen and (max-width: 1440px) {
    padding: 0px 40px;
  }
`;