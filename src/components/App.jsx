import { Box } from 'CommonStyle/Common.styled';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Price } from './Price/Price';
import { Stats } from './Stat/Stat';
import mobile from './img/Mobile.jpg';
import logo from './img/Logo.jpg';
import heroTab from './img/HeroTab.jpg';
import desk from './img/DesktopHero.jpg';
import firstTable from './img/About_one_tablet.jpg';
import secondTable from './img/About_sec_tablet.jpg';
import cardOne from './img/About_desktop_fir.jpg';
import cardSec from './img/About_desktop_sec.jpg';
import priceMob from './img/priceMobile.jpg';
import priceTablet from './img/PriceTablet.png';
import priceDeskt from './img/destopPrice.jpg';

export const BarberShop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Header mobile={mobile} logo={logo} tablet={heroTab} desktop={desk} />
      <About
        first={firstTable}
        second={secondTable}
        desk={cardOne}
        deskSec={cardSec}
      />
      <Price mob={priceMob} tab={priceTablet} desk={priceDeskt} />
      <Stats />
    </Box>
  );
};
