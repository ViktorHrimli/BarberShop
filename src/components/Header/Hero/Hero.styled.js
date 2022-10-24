import styled from 'styled-components';
import {
  Paragraph,
  ParagraphTitleText,
  Border,
} from 'CommonStyle/Common.styled';

export const BorderLine = styled(Border)`
  display: inline-flex;
  width: 60px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
`;

export const HeaderText = styled(Paragraph)`
  margin-left: ${p => p.theme.space[5]}px;
`;

export const HeaderTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  line-height: 56px;
  letter-spacing: 0.05em;
  margin-top: 5px;
  margin-left: 2px;
  margin-right: auto;
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const HeaderTitleText = styled(ParagraphTitleText)`
  width: 306px;
  letter-spacing: 0.02em;
  margin-top: 20px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 350px;
  }
  @media screen and (min-width: 1280px) {
    width: 398px;
  }
`;
