import styled from 'styled-components';

export const ConteinerBarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
`;

export const BarListLink = styled.ul`
  color: ${p => p.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 40px;
`;

export const BarLinkCopir = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.text};
`;

export const BorderBarLinks = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;
