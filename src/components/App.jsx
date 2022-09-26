import { Box } from 'CommonStyle/Common.styled';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Price } from './Price/Price';
import { Stats } from './Stat/Stat';
import { Masters } from './Masters/Masters';
import { card } from 'components';
export const BarberShop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Header
        mobile={card.mobile}
        logo={card.logo}
        tablet={card.heroTab}
        desktop={card.desk}
      />
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
      <Masters
        mob1={card.fmm}
        mob2={card.smm}
        mob3={card.tmm}
        tab1={card.ftm}
        tab2={card.stm}
        tab3={card.ttm}
        desk1={card.fdm}
        desk2={card.sdm}
        desk3={card.tdm}
      />
    </Box>
  );
};
