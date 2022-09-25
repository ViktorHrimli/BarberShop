import { HeaderStyle, IconsStyle, LogoImg } from './Header.styled';
import { Nav } from './Nav/Nav';
import { Hero } from './Hero/Hero';
import { Box } from 'CommonStyle/Common.styled';
import { Bar } from 'components/Header/Bar/Bar';
export const Header = ({ mobile, logo, tablet, desktop }) => {
  return (
    <Box display="flex" alignItems="flex-end" width={[480, 768, 1280]}>
      <Bar />
      <HeaderStyle mobile={mobile} tablet={tablet} desktop={desktop}>
        <Box px={[40, 15]} py={[40]}>
          <Box
            width={[400, 550, 1070]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Nav />
            <LogoImg></LogoImg>
            <IconsStyle type="button">Burger</IconsStyle>
          </Box>
          <Hero />
        </Box>
      </HeaderStyle>
    </Box>
  );
};
