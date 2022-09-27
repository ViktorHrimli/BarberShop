import styled from 'styled-components';

export const BackgroundConstacts = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${p => p.bg});
  background-position: center;
  background-size: cover;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 20px;
  width: 418px;
`;

export const ContactBorderLine = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const ContactBorderText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
`;

export const ContactText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xsm};
  line-height: 30px;
  color: ${p => p.theme.colors.secondary};
  text-transform: uppercase;
`;

export const ContactTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.slm};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  line-height: 49px;
  letter-spacing: 0.05em;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;
