import Media from 'react-media';
import { HeaderStyle, ButtonStyle, LogoImg } from './Header.styled';
import { Nav } from './Nav/Nav';
import { Hero } from './Hero/Hero';
import { Box } from 'CommonStyle/Common.styled';
import { Bar } from 'components/Header/Bar/Bar';

export const Header = ({ mobile, tablet, desktop }) => {
  return (
    <Box display="flex" alignItems="flex-end" width={[480, 768, 1280]}>
      <Media query="(min-width: 768px)" render={() => <Bar />} />
      <HeaderStyle mobile={mobile} tablet={tablet} desktop={desktop}>
        <Box px={[40, 15, 0]} py={[40]}>
          <Box
            width={[400, 550, 1070]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Media query="(min-width: 768px)" render={() => <Nav />} />
            <Media query="(max-width: 767px)" render={() => <LogoImg />} />
            <Media
              query="(max-width: 767px)"
              render={() => <ButtonStyle type="button">Burger</ButtonStyle>}
            />
          </Box>
          <Hero />
        </Box>
      </HeaderStyle>
    </Box>
  );
};