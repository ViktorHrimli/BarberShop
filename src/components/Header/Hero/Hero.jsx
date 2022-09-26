import { Box } from 'CommonStyle/Common.styled';
import {
  HeaderTitle,
  HeaderTitleText,
  HeaderText,
  BorderLine,
} from './Hero.styled';

export const Hero = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        mt={[100, 150, 200]}
        pl={[0, 40, 80]}
      >
        <BorderLine></BorderLine>
        <HeaderText>A HAIR SALON FOR MAN IN KYIV</HeaderText>
      </Box>
      <Box pl={[0, 40, 80]} mt={[20, 20, 20]}>
        <HeaderTitle>BarberShop</HeaderTitle>
        <HeaderTitleText>
          Мы эксперты в модных мужских стрижках. Работаем быстро, осторожно и со
          вкусом.
        </HeaderTitleText>
      </Box>
    </div>
  );
};
