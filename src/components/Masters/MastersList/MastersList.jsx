import Media from 'react-media';
import { Box } from 'CommonStyle/Common.styled';
import {
  MastersItemsLinks,
  MastersLinksList,
  MastersItemsText,
  MastersProf,
  Facebook,
  Inst,
  LinkId,
  Twitter,
  ImgMob,
} from './MastersList.styled';
import { masterCard } from '../index.js';
export const MastersList = ({ masters }) => {
  return masters.map((item, indx) => {
    return (
      <li key={indx}>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          gridGap={[64, 64, 30]}
        >
          <Box
            display="flex"
            flexDirection={['column']}
            justifyContent="center"
            alignItems="center"
            gridGap={[30]}
          >
            <Media
              query="(max-width: 767px)"
              render={() => <ImgMob src={masterCard.fmm} />}
            />
            <Media
              query="(min-width: 768px) and (max-width: 1279px)"
              render={() => <ImgMob src={masterCard.ftm} />}
            />
            <Media
              query="(min-width: 1280px)"
              render={() => <ImgMob src={masterCard.fdm} />}
            />

            <Box
              display="flex"
              flexDirection={['column']}
              justifyContent="center"
              alignItems="center"
              gridGap={[3]}
            >
              <MastersItemsText>{item.name}</MastersItemsText>
              <MastersProf>{item.prof}</MastersProf>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <MastersLinksList>
                <MastersItemsLinks>
                  <Facebook></Facebook>
                </MastersItemsLinks>
                <MastersItemsLinks>
                  <Inst></Inst>
                </MastersItemsLinks>
                <MastersItemsLinks>
                  <LinkId></LinkId>
                </MastersItemsLinks>
                <MastersItemsLinks>
                  <Twitter></Twitter>
                </MastersItemsLinks>
              </MastersLinksList>
            </Box>
          </Box>
        </Box>
      </li>
    );
  });
};
