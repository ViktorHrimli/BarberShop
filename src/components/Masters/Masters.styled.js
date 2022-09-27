import styled from 'styled-components';

export const BorderLineMasters = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;
export const WtfList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 64px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    grid-gap: 30px;
  }
`;

export const BorderMastersText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.black};
  text-transform: uppercase;
`;

export const MastersTitle = styled.h2`
  width: 330px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lx};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.05em;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    width: 480px;
    line-height: ${p => p.theme.lineHeights.heading};
    font-size: ${p => p.theme.fontSizes.slm};
    margin-bottom: 44px;
  }
`;
