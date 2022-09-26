import { Box } from 'CommonStyle/Common.styled';
import {
  BorderLineAbout,
  BorderAboutText,
  AboutTitle,
  AboutTitleText,
  ButtonAbout,
  AboutText,
  ImgAbout,
  ImgAboutDesktop,
} from './About.styled';

export const About = ({ first, second, desk, deskSec }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={[420, 688, 1170]}
      px={[30, 40, 55]}
      py={[84, 100, 139]}
      gridGap={[0, 40]}
    >
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        width={[0, 330, 550]}
        gridGap={[0, 20]}
      >
        <ImgAbout src={first} alt="" />
        <ImgAbout src={second} alt="" />
        <ImgAboutDesktop src={desk} alt="" />
        <ImgAboutDesktop src={deskSec} alt="" />
      </Box>
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
          width={[420, 330, 500]}
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
        <ButtonAbout type="button">Онлайн запись</ButtonAbout>
      </Box>
    </Box>
  );
};