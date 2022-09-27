import { Box } from 'CommonStyle/Common.styled';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Price } from './Price/Price';
import { Stats } from './Stat/Stat';
import { Masters } from './Masters/Masters';
import { Gallery } from './Gallery/Gallery';
import { card } from 'components';
import masters from '../masters.json';
import { Footer } from './Footer/Footer';
export const BarberShop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Header mobile={card.mobile} tablet={card.heroTab} desktop={card.desk} />
      <About
        first={card.firstTable}
        second={card.secondTable}
        desk={card.cardOne}
        deskSec={card.cardSec}
      />
      <Price
        mob={card.priceMob}
        tab={card.priceTablet}
        desk={card.priceDeskt}
      />
      <Stats />
      <Masters masters={masters} />
      <Gallery mob={card.GMF} tab={card.GTF} desk={card.GDF} />
      <Footer />
    </Box>
  );
};
