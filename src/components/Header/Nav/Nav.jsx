import { Events, animateScroll as scroll, scroller } from 'react-scroll';
import { Box } from 'CommonStyle/Common.styled';
import { useEffect } from 'react';
import { ListNav, TextNav, ButtonNav } from './Nav.styled';

export const Nav = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = name => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  const navPageClick = event => {
    event.preventDefault();
    if (event.currentTarget.name === 'button') {
      return scrollToBottom();
    }
    scrollTo(event.currentTarget.type);
  };
  return (
    <Box display="flex" mt={[0, 13]} gridGap={[0, 55, 0]} alignItems="baseline">
      <Box>
        <ListNav>
          <li>
            <a onClick={navPageClick} type="scroll--about" href="/">
              <TextNav>О нас</TextNav>
            </a>
          </li>
          <li>
            <a onClick={navPageClick} type="scroll--price" href="/">
              <TextNav>Услуги и цены</TextNav>
            </a>
          </li>
          <li>
            <a onClick={navPageClick} type="scroll--masters" href="/">
              <TextNav>Мастера</TextNav>
            </a>
          </li>
          <li>
            <a onClick={navPageClick} type="scroll--contact" href="/">
              <TextNav>Контакты</TextNav>
            </a>
          </li>
        </ListNav>
      </Box>
      <Box
        display="flex"
        flexDirection={['row', 'column', 'row-reverse']}
        ml={[0, 0, 258]}
        gridGap={[0, 20, 40]}
        alignItems="center"
      >
        <ButtonNav onClick={navPageClick} type="button" name="button">
          Онлайн-запись
        </ButtonNav>
        <TextNav>+38 044 111 11 11</TextNav>
      </Box>
    </Box>
  );
};
