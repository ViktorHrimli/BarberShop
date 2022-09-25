import { Box } from 'CommonStyle/Common.styled';
import { ListNav, TextNav, ButtonNav } from './Nav.styled';

export const Nav = () => {
  return (
    <Box display="flex" mt={[0, 13]} gridGap={[0, 55]} alignItems="baseline">
      <Box>
        <ListNav>
          <li>
            <TextNav>О нас</TextNav>
          </li>
          <li>
            <TextNav>Услуги и цены</TextNav>
          </li>
          <li>
            <TextNav>Мастера</TextNav>
          </li>
          <li>
            <TextNav>Контакты</TextNav>
          </li>
        </ListNav>
      </Box>
      <Box display="flex" flexDirection={['column']} alignItems="center">
        <ButtonNav>Онлайн-запись</ButtonNav>
        <TextNav>+38 044 111 11 11</TextNav>
      </Box>
    </Box>
  );
};
