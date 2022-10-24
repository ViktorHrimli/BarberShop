import { useContext } from 'react';
import Media from 'react-media';
import { animateScroll as scroll } from 'react-scroll';
import { Box } from 'CommonStyle/Common.styled';
import { cardContext } from 'components/Context/context';
import {
  BorderLineAbout,
  BorderAboutText,
  AboutTitle,
  AboutTitleText,
  ButtonAbout,
  AboutText,
  ImgAbout,
} from './About.styled';

export const About = () => {
  const authContext = useContext(cardContext);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={[350, 688, 1170]}
      px={[20, 40, 55]}
      py={[84, 100, 139]}
      gridGap={[0, 40]}
      name="scroll--about"
    >
      <Media
        query=" (min-width: 768px) and (max-width: 1279px)"
        render={() => {
          return (
            <Box
              display="flex"
              flexDirection={['column', 'column', 'row']}
              alignItems="center"
              width={[0, 330, 550]}
              gridGap={[0, 20]}
            >
              <ImgAbout src={authContext.firstTable} alt="" />
              <ImgAbout src={authContext.secondTable} alt="" />
            </Box>
          );
        }}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => {
          return (
            <Box
              display="flex"
              flexDirection={['column', 'column', 'row']}
              alignItems="center"
              width={[0, 330, 550]}
              gridGap={[0, 20]}
            >
              <ImgAbout src={authContext.cardOne} alt="" />
              <ImgAbout src={authContext.cardSec} alt="" />
            </Box>
          );
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gridGap={[20]}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width={[330, 330, 500]}
          gridGap={[20]}
        >
          <BorderLineAbout></BorderLineAbout>
          <BorderAboutText>О НАС</BorderAboutText>
        </Box>
        <AboutTitle>Лучший Барбершоп твоего города</AboutTitle>
        <AboutTitleText>
          Если ты хочешь добавить в свой образ больше уверенности – тебе точно к
          нам.
        </AboutTitleText>
        <AboutText>
          Мы команда, которая никогда не останавливается на достигнутом и жаждет
          перемен. И когда ты попадешь в руки нашего мастера, то уже никогда не
          сможешь быть прежним. Мы команда, которая всегда с клиентами "на одной
          волне". Поэтому, мы всегда готовы усовершенствовать каждого, кто к нам
          приходит!
        </AboutText>
        <ButtonAbout
          onClick={e => {
            scroll.scrollToBottom();
          }}
          type="button"
        >
          Онлайн запись
        </ButtonAbout>
      </Box>
    </Box>
  );
};
