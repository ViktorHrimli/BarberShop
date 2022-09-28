import styled from 'styled-components';
import { Title } from 'CommonStyle/Common.styled';

export const StatTitle = styled(Title)`
  width: 330px;
  font-weight: ${p => p.theme.fontWeights.heading};
  letter-spacing: 0.05em;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 500;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    line-height: ${p => p.theme.lineHeights.heading};
    font-size: ${p => p.theme.fontSizes.slm};
  }
`;

export const StatTitleText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primary};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 500;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;
