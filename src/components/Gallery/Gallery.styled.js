import styled from 'styled-components';
import { Border, Paragraph } from 'CommonStyle/Common.styled';

export const GalleryBorderLine = styled(Border)`
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;
export const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 30px;
  margin-top: 44px;

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    grid-gap: 30px;
  }
`;

export const ImgGallery = styled.img`
  width: 390px;
`;
export const GalleryBorderText = styled(Paragraph)`
  color: ${p => p.theme.colors.black};
`;
