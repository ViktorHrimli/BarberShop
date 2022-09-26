import styled from 'styled-components';
import { BiListUl } from 'react-icons/bi';
import { FaBtc } from 'react-icons/fa';

export const HeaderStyle = styled.header`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 580px;
    background-image: url(${p => p.mobile});
    background-position: center;
    background-size: cover;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 576px;
    height: 690px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: 40px;
    background-image: url(${p => p.tablet});
  }
  @media screen and (min-width: 1280px) {
    width: 1068px;
    height: 680px;
    background-image: url(${p => p.desktop});
    margin-left: auto;
    margin-right: 40px;
  }
`;

export const LogoImg = styled(FaBtc)`
  display: inline-flex;
  width: 60px;
  height: 60px;
  color: ${p => p.theme.colors.white};
  margin-right: auto;
  margin-bottom: auto;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
    color: ${p => p.theme.colors.black};
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const ButtonStyle = styled(BiListUl)`
  display: inline-flex;
  margin-left: auto;
  margin-bottom: auto;
  width: 40px;
  height: 40px;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
