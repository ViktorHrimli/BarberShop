import { Box } from 'CommonStyle/Common.styled';
import { cardContext } from './Context/context';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Price } from './Price/Price';
import { Stats } from './Stat/Stat';
import { Masters } from './Masters/Masters';
import { Gallery } from './Gallery/Gallery';
import { card } from 'components';
import { Footer } from './Footer/Footer';
export const BarberShop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <cardContext.Provider value={card}>
        <Header />
        <About />
        <Price />
        <Stats />
        <Masters />
        <Gallery />
        <Footer />
      </cardContext.Provider>
    </Box>
  );
};
