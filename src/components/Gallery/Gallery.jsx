import Media from 'react-media';
import { Box } from 'CommonStyle/Common.styled';
import {
  GalleryBorderLine,
  GalleryBorderText,
  GalleryList,
} from './Gallery.styled';

export const Gallery = ({ mob, tab, desk }) => {
  return (
    <Box
      display="flex"
      flexDirection={['column']}
      alignItems={['center', 'flex-start', 'flex-start']}
      justifyContent="center"
      width={[420, 690, 1170]}
      px={[30, 40, 55]}
      py={[84, 100, 130]}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        width={[420, 330, 500]}
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
            render={() => <img src={mob} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={tab} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={desk} alt="" />}
          />
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <img src={mob} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={tab} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={desk} alt="" />}
          />
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <img src={mob} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={tab} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={desk} alt="" />}
          />
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => <img src={mob} alt="" />}
          />
          <Media
            query="(min-width: 768px) and (max-width: 1279px)"
            render={() => <img src={tab} alt="" />}
          />
          <Media
            query="(min-width: 1280px)"
            render={() => <img src={desk} alt="" />}
          />
        </li>
      </GalleryList>
    </Box>
  );
};
