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
}
h1,h2,h3 {
  padding: 0%;
  margin: 0;
   font-family: ${theme.fonts.heading};
}

a {
  text-decoration: none;
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
