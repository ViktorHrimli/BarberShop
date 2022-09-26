import styled from 'styled-components';
export const BorderLine = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const HeaderText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-left: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.secondary};
`;

export const HeaderTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  line-height: 56px;
  letter-spacing: 0.05em;
  margin-top: 5px;
  margin-left: 2px;
  margin-right: auto;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const HeaderTitleText = styled.p`
  width: 306px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xsm};
  line-height: 26px;
  letter-spacing: 0.02em;
  margin-top: 20px;
  color: ${p => p.theme.colors.text};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 350px;
  }

  @media screen and (min-width: 1280px) {
    width: 398px;
  }
`;
