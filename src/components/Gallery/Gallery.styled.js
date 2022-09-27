import styled from 'styled-components';

export const GalleryBorderLine = styled.span`
  display: inline-flex;
  width: 60px;
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

export const GalleryBorderText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.black};
  text-transform: uppercase;
`;
