import styled from 'styled-components';

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 84px 30px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${p => p.mob});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${p => p.tab});
    width: 688px;
    padding: 100px 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1170px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${p => p.desk});
    padding: 130px 55px;
  }
`;
export const BorderLinePrice = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const PriceText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-left: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.secondary};
  text-transform: uppercase;
`;

export const PriceTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.slm};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  line-height: 49px;
  letter-spacing: 0.05em;
  margin-top: 20px;
  margin-right: auto;

  margin-right: auto;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const PriceButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.s};
  padding: 12px 20px;
  background: transparent;
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.m};
  letter-spacing: 0.1em;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  cursor: pointer;

  :hover,
  :focus {
    background: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
