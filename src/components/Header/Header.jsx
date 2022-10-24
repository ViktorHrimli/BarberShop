import Media from 'react-media';
import img_1 from '../img/DeskGalerFourjpg.jpg';
import img_2 from '../img/ContactsMob.jpg';
import img_3 from '../img/DeskGalerThree.jpg';
import img_4 from '../img/GMF.jpg';
import img_5 from '../img/GMT.jpg';
import { cardContext } from 'components/Context/context';
import { HeaderStyle, ButtonStyle, LogoImg } from './Header.styled';
import { Nav } from './Nav/Nav';
import { Hero } from './Hero/Hero';
import { Box } from 'CommonStyle/Common.styled';
import { Bar } from 'components/Header/Bar/Bar';
import { useContext, useEffect, useState } from 'react';

export const Header = () => {
  const images = [img_1, img_2, img_3, img_4, img_5];
  // const authContext = useContext(cardContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wtf = setInterval(() => {
      if (index === 4) {
        return setIndex(0);
      } else {
        setIndex(prev => (prev += 1));
      }
    }, 8000);

    return () => {
      clearInterval(wtf);
    };
  }, [index]);

  return (
    <Box display="flex" alignItems="flex-end" width={['auto', 768, 1280]}>
      <Media query="(min-width: 768px)" render={() => <Bar />} />
      <HeaderStyle
        mobile={images[index]}
        tablet={images[index]}
        desktop={images[index]}
      >
        <Box px={[20, 15, 0]} py={[40]}>
          <Box
            width={[350, 550, 1070]}
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
