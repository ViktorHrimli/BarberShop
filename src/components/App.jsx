import { Box } from 'CommonStyle/Common.styled';
import { Header } from './Header/Header';
import mobile from './img/Mobile.jpg';
import logo from './img/Logo.jpg';
import heroTab from './img/HeroTab.jpg';
import desk from './img/DesktopHero.jpg';

export const BarberShop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Header mobile={mobile} logo={logo} tablet={heroTab} desktop={desk} />
    </Box>
  );
};
