import styled from 'styled-components';

export const ConteinerBackGround = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  background: linear-gradient(180deg, #171a24 0%, rgba(23, 26, 36, 0.2) 100%);
`;

export const ListPriceConteiner = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: flex-start;
  grid-gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 40px;
  }
`;

export const ListPriceItem = styled.li`
  width: 358px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 610px;
  }

  @media screen and (min-width: 1280px) {
    width: 505px;
  }
`;

export const BorderListPrice = styled.span`
  display: inline-flex;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const PriceTitleText = styled.p`
  display: inline-flex;
  justify-content: space-between;
  width: 358px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.text};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 610px;
    font-size: ${p => p.theme.fontSizes.xsm};
  }

  @media screen and (min-width: 1280px) {
    width: 505px;
  }
`;
