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
export const MastersList = ({
  mob1,
  mob2,
  mob3,
  tab1,
  tab2,
  tab3,
  desk1,
  desk2,
  desk3,
}) => {
  return (
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
        <ImgMob src={[mob1, tab1, desk1]} alt="" />

        <Box
          display="flex"
          flexDirection={['column']}
          justifyContent="center"
          alignItems="center"
          gridGap={[3]}
        >
          <MastersItemsText>John Smith</MastersItemsText>
          <MastersProf>Extreme Barber</MastersProf>
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
      <Box
        display="flex"
        flexDirection={['column']}
        justifyContent="center"
        alignItems="center"
        gridGap={[30]}
      >
        <ImgMob src={[mob2, tab2, desk2]} alt="" />

        <Box
          display="flex"
          flexDirection={['column']}
          justifyContent="center"
          alignItems="center"
          gridGap={[3]}
        >
          <MastersItemsText>John Smith</MastersItemsText>
          <MastersProf>Extreme Barber</MastersProf>
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
      <Box
        display="flex"
        flexDirection={['column']}
        justifyContent="center"
        alignItems="center"
        gridGap={[30]}
      >
        <ImgMob src={[mob3, tab3, desk3]} alt="" />

        <Box
          display="flex"
          flexDirection={['column']}
          justifyContent="center"
          alignItems="center"
          gridGap={[3]}
        >
          <MastersItemsText>John Smith</MastersItemsText>
          <MastersProf>Extreme Barber</MastersProf>
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
  );
};
