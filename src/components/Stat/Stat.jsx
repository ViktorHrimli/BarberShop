import { Box } from 'CommonStyle/Common.styled';
import {
  BorderAboutText,
  BorderLineAbout,
} from 'components/About/About.styled';

import { StatTitle, StatTitleText } from './Stat.styled';
import { StatList } from './StatList/StatList';

export const Stats = () => {
  return (
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row-reverse']}
      alignItems="center"
      justifyContent="center"
      width={[400, 690, 1170]}
      gridGap={[0, 0, 130]}
      px={[30, 40, 55]}
      py={[84, 100, 130]}
    >
      <Box
        display="flex"
        flexDirection="column"
        width={[330, 500, 500]}
        gridGap={[20]}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width={[370, 500, 500]}
          gridGap={[20]}
        >
          <BorderLineAbout></BorderLineAbout>
          <BorderAboutText>Cтарая традиционная школа</BorderAboutText>
        </Box>
        <StatTitle>Почему приходят именно к нам?</StatTitle>
        <StatTitleText>
          О нас говорят только хорошее. Но лучше 1 раз увидеть и прочувствовать,
          чем 10 раз прочитать.
        </StatTitleText>
      </Box>

      <StatList />
    </Box>
  );
};
