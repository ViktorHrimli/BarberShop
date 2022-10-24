import {
  PriceTitleText,
  ListPriceItem,
  BorderListPrice,
  ConteinerBackGround,
  ListPriceConteiner,
} from './ListPriceItem.styled';
import { Box } from 'CommonStyle/Common.styled';

export const ListPriceComp = () => {
  return (
    <ConteinerBackGround>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems={['flex-start']}
        width={[350, 690, 1170]}
        mt={[20]}
        mb={[30]}
        px={[0]}
        gridGap={[20]}
      >
        <Box
          display="flex"
          flexDirection="column"
          width={[350, 690, 1170]}
          px={[0]}
          py={[0]}
        >
          <ListPriceConteiner>
            <ListPriceItem>
              <PriceTitleText>
                Мужская стрижка <BorderListPrice></BorderListPrice> от 300 грн
              </PriceTitleText>
            </ListPriceItem>
            <ListPriceItem>
              <PriceTitleText>
                Стрижка бороды <BorderListPrice></BorderListPrice>
                от 200 грн
              </PriceTitleText>
            </ListPriceItem>
            <ListPriceItem>
              <PriceTitleText>
                Стрижка усов <BorderListPrice></BorderListPrice>
                от 200 грн
              </PriceTitleText>
            </ListPriceItem>
            <ListPriceItem>
              <PriceTitleText>
                Бритье опасной бритвой <BorderListPrice></BorderListPrice>
                от 200 грн
              </PriceTitleText>
            </ListPriceItem>
          </ListPriceConteiner>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width={[350, 690, 1170]}
          px={[0]}
          py={[0]}
        >
          <ListPriceConteiner>
            <ListPriceItem>
              <PriceTitleText>
                Стрижка у стажера <BorderListPrice></BorderListPrice>
                от 50 грн
              </PriceTitleText>
            </ListPriceItem>
            <ListPriceItem>
              <PriceTitleText>
                Стрижка под насадку <BorderListPrice></BorderListPrice>
                от 200 грн
              </PriceTitleText>
            </ListPriceItem>
            <ListPriceItem>
              <PriceTitleText>
                Детская стрижка (до 12 лет)
                <BorderListPrice></BorderListPrice>
                от 300 грн
              </PriceTitleText>
            </ListPriceItem>
            <ListPriceItem>
              <PriceTitleText>
                Камуфлирование седины <BorderListPrice></BorderListPrice>
                от 200 грн
              </PriceTitleText>
            </ListPriceItem>
          </ListPriceConteiner>
        </Box>
      </Box>
    </ConteinerBackGround>
  );
};
