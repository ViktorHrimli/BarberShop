import styled from 'styled-components';
import { theme } from 'Thema';
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.white};
}
h1,h2,h3 {
  padding: 0%;
  margin: 0;
   font-family: ${theme.fonts.heading};
}

a {
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
export const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lx};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Button = styled.button`
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
`;

export const Paragraph = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.secondary};
  text-transform: uppercase;
`;

export const ParagraphTitleText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xsm};
  line-height: 26px;
  color: ${p => p.theme.colors.text};
`;

export const Border = styled.span`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
`;
