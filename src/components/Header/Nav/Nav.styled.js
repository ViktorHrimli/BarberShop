import styled from 'styled-components';

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: ${p => p.theme.space[5]}px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const TextNav = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.1em;

  :hover {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const ButtonNav = styled.button`
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
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
