import styled from 'styled-components';
export const ListConteinerStats = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 30px;
`;

export const ConteinerStat = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 134px;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  background-color: ${p => p.theme.colors.background};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 20px 40px;
    width: 130px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 20px;
    width: 130px;
  }
`;

export const StatsNumber = styled.span`
  font-size: ${p => p.theme.fontSizes.slm};
  color: ${p => p.theme.colors.black};
  line-height: ${p => p.theme.lineHeights.heading};
`;

// export const Plus = styled.span`
//   position: absolute;
//   top: 20px;
//   right: 62px;
//   font-size: ${p => p.theme.fontSizes.m};
//   color: ${p => p.theme.colors.accent};
//   line-height: ${p => p.theme.lineHeights.heading};
// `;

export const TextStat = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
`;
