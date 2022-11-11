import Media from 'react-media';
import { Box } from 'CommonStyle/Common.styled';
import {
  GalleryBorderLine,
  GalleryBorderText,
  GalleryList,
  ImgGallery,
} from './Gallery.styled';
import { galleryCard } from './index';
export const Gallery = () => {
  return (
    <Box
      display="flex"
      flexDirection={['column']}
      alignItems={['center', 'flex-start', 'flex-start']}
      justifyContent="center"
      width={[390, 690, 1170]}
      px={[0, 40, 55]}
      py={[84, 100, 130]}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        width={[330, 330, 500]}
        gridGap={[20]}
      >
        <GalleryBorderLine></GalleryBorderLine>
        <GalleryBorderText>
          На латинском языке “барба” означает “борода”
        </GalleryBorderText>
      </Box>
      <GalleryList>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <ImgGallery src={galleryCard.GMF} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={galleryCard.GTF} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={galleryCard.GDF} alt="" />}
          />
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <ImgGallery src={galleryCard.GMS} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={galleryCard.GTS} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={galleryCard.GDS} alt="" />}
          />
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <ImgGallery src={galleryCard.GMT} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={galleryCard.GTT} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={galleryCard.GDT} alt="" />}
          />
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <ImgGallery src={galleryCard.GMFour} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={galleryCard.GTFour} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={galleryCard.GDFour} alt="" />}
          />
        </li>
      </GalleryList>
    </Box>
  );
};
