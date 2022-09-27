import styled from 'styled-components';

export const BorderLineAbout = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const BorderAboutText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.black};
  text-transform: uppercase;
`;

export const ImgAbout = styled.img``;

export const AboutTitle = styled.h2`
  width: 330px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lx};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.05em;

  @media screen and (min-width: 1280px) {
    width: 480px;
    line-height: ${p => p.theme.lineHeights.heading};
    font-size: ${p => p.theme.fontSizes.slm};
  }
`;

export const AboutTitleText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primary};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 330px;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const AboutText = styled.p`
  width: 400px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primary};
  line-height: ${p => p.theme.lineHeights.body};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 330px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const ButtonAbout = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.s};
  padding: 12px 20px;
  background: transparent;
  margin-top: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.m};
  letter-spacing: 0.1em;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  cursor: pointer;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 55px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 40px;
  }

  :hover,
  :focus {
    background: ${p => p.theme.colors.accent};
  }
`;
