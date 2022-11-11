import styled from 'styled-components';
import { BiListUl } from 'react-icons/bi';
import { FaBtc } from 'react-icons/fa';

export const HeaderStyle = styled.header`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 580px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${p => p.mobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 576px;
    height: 690px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: 40px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
      url(${p => p.tablet});
  }
  @media screen and (min-width: 1280px) {
    width: 1068px;
    height: 680px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
      url(${p => p.desktop});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: 40px;
  }

  transition: background-image 250ms, cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const LogoImg = styled(FaBtc)`
  display: inline-flex;
  width: 60px;
  height: 60px;
  color: ${p => p.theme.colors.white};
  margin-right: auto;
  margin-bottom: auto;
`;

export const ButtonStyle = styled(BiListUl)`
  display: inline-flex;
  margin-left: auto;
  margin-bottom: auto;
  width: 40px;
  height: 40px;
  color: ${p => p.theme.colors.white};
`;
