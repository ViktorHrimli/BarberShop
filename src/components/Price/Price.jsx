import { Box } from 'CommonStyle/Common.styled';
import {
  BoxPrice,
  BorderLinePrice,
  PriceText,
  PriceTitle,
  PriceButton,
} from './Price.styled';

import { ListPriceComp } from './ListPrice/ListPriceItem';
export const Price = ({ mob, tab, desk }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={[480, 768, 1280]}
    >
      <BoxPrice mob={mob} tab={tab} desk={desk}>
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
        <PriceButton type="button">Онлайн-запись</PriceButton>
      </BoxPrice>
    </Box>
  );
};
