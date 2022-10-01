import styled from 'styled-components';
import { FaBtc } from 'react-icons/fa';
import { Border } from 'CommonStyle/Common.styled';
export const BarList = styled.ul`
  color: ${p => p.theme.colors.black};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 80px;
  grid-gap: 40px;
`;

export const BarLogo = styled(FaBtc)`
  display: inline-flex;
  width: 60px;
  height: 60px;
  margin-bottom: 245px;
  color: ${p => p.theme.colors.black};
`;

export const BorderBar = styled(Border)`
  margin-bottom: 20px;
  rotate: 90deg;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;

export const ItemBar = styled.li`
  margin-top: 40px;

  rotate: 270deg;

  :hover {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
`;
