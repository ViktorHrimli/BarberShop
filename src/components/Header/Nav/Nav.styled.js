import styled from 'styled-components';
import { Button } from 'CommonStyle/Common.styled';

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: ${p => p.theme.space[5]}px;
  @media screen and (max-width: 767px) {
    margin-top: 3rem;
    margin-bottom: 10rem;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 1280px) {
    grid-gap: ${p => p.theme.space[7]}px;

    margin-left: 40px;
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
`;

export const ButtonNav = styled(Button)``;
