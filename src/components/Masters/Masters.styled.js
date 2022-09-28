import styled from 'styled-components';
import { Border, Paragraph, Title } from 'CommonStyle/Common.styled';

export const BorderLineMasters = styled(Border)`
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;
export const WtfList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 64px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    grid-gap: 30px;
  }
`;

export const BorderMastersText = styled(Paragraph)`
  color: ${p => p.theme.colors.black};
`;

export const MastersTitle = styled(Title)`
  width: 330px;
  letter-spacing: 0.05em;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    width: 480px;
    line-height: ${p => p.theme.lineHeights.heading};
    font-size: ${p => p.theme.fontSizes.slm};
    margin-bottom: 44px;
  }
`;
