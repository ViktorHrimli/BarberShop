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
