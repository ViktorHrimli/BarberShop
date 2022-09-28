import styled from 'styled-components';
import { Border, Title, Button, Paragraph } from 'CommonStyle/Common.styled';

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 84px 30px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${p => p.mob});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${p => p.tab});
    width: 688px;
    padding: 100px 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1170px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${p => p.desk});
    padding: 130px 55px;
  }
`;
export const BorderLinePrice = styled(Border)``;

export const PriceText = styled(Paragraph)`
  margin-left: ${p => p.theme.space[5]}px;
`;

export const PriceTitle = styled(Title)`
  font-size: ${p => p.theme.fontSizes.slm};
  color: ${p => p.theme.colors.white};
  line-height: 49px;
  letter-spacing: 0.05em;
  margin-top: 20px;
  margin-right: auto;

  margin-right: auto;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const PriceButton = styled(Button)``;
