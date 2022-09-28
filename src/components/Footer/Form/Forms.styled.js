import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ConteinerBg = styled.div`
  display: block;
  background-image: url(${p => p.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const FormsTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lx};
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.white};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.05em;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 500px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.slm};
  }
`;
export const FormSubmit = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 44px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Input = styled(Field)`
  width: 418px;
  padding-bottom: 8px;
  background-color: transparent;
  color: rgba(157, 164, 189, 0.4);
  border: none;
  border-bottom: ${p => p.theme.borders.normal} rgba(157, 164, 189, 0.4);
  outline: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 330px;
  }

  @media screen and (min-width: 1280px) {
    width: 260px;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  }
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Message = styled(Field)`
  width: 418px;
  padding-bottom: 65px;
  color: rgba(157, 164, 189, 0.4);
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: ${p => p.theme.borders.normal} rgba(157, 164, 189, 0.4);
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 690px;
  }

  @media screen and (min-width: 1280px) {
    width: 550px;
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  }
`;

export const ButtonSubmitForm = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.s};
  padding: 12px 38px;
  background: transparent;
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.m};
  letter-spacing: 0.1em;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  cursor: pointer;

  :hover,
  :focus {
    background: ${p => p.theme.colors.accent};
  }
`;
