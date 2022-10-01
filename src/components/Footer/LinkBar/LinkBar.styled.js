import styled from 'styled-components';
import { Paragraph, Border } from 'CommonStyle/Common.styled';

export const ConteinerBarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.white};
`;

export const BarListLink = styled.ul`
  color: ${p => p.theme.colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 40px;
`;
export const BarListItemLink = styled.li`
  :hover {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
`;
export const BarLinkCopir = styled(Paragraph)`
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.text};
`;

export const BorderBarLinks = styled(Border)`
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;
