import styled from 'styled-components';
import { FaBtc } from 'react-icons/fa';

export const BarList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 80px;
    gap: 40px;
  }
`;

export const BarLogo = styled(FaBtc)`
  display: none;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: inline-flex;
    width: 60px;
    height: 60px;
    margin-bottom: 245px;
    color: ${p => p.theme.colors.black};
  }
`;

export const BorderBar = styled.span`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: inline-flex;
    margin-bottom: 20px;
    rotate: 90deg;
    width: 60px;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  }
`;

export const ItemBar = styled.li`
  rotate: 270deg;
`;
