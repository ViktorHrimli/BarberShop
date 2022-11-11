import { scroller } from 'react-scroll';
import { cardContext } from 'components/Context/context';
import { Box } from 'CommonStyle/Common.styled';
import {
  BoxPrice,
  BorderLinePrice,
  PriceText,
  PriceTitle,
  PriceButton,
} from './Price.styled';

import { ListPriceComp } from './ListPrice/ListPriceItem';
import { useContext } from 'react';
export const Price = () => {
  const authContext = useContext(cardContext);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={[350, 768, 1280]}
      name="scroll--price"
    >
      <BoxPrice
        mob={authContext.priceMob}
        tab={authContext.priceTablet}
        desk={authContext.priceDeskt}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr="auto"
        >
          <BorderLinePrice></BorderLinePrice>
          <PriceText>Проведи время в компании лучших мастеров</PriceText>
        </Box>
        <PriceTitle>Услуги и цены</PriceTitle>
        <ListPriceComp />
        <PriceButton
          onClick={e => {
            scroller.scrollTo('scroll--form', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
          }}
          type="button"
        >
          Онлайн-запись
        </PriceButton>
      </BoxPrice>
    </Box>
  );
};
