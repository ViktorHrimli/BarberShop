import { Box } from 'CommonStyle/Common.styled';
import {
  MastersTitle,
  BorderMastersText,
  BorderLineMasters,
} from './Masters.styled';
import { MastersList } from './MastersList/MastersList';

export const Masters = ({
  mob1,
  mob2,
  mob3,
  tab1,
  tab2,
  tab3,
  desk1,
  desk2,
  desk3,
}) => {
  return (
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      justifyContent="center"
      width={[420, 690, 1170]}
      gridGap={[0, 0, 130]}
      px={[30, 40, 55]}
      py={[84, 100, 130]}
      background="#f7f7f7"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        width={[420, 330, 500]}
        gridGap={[20]}
      >
        <BorderLineMasters></BorderLineMasters>
        <BorderMastersText>для настоящих ценителей атмосферы</BorderMastersText>
      </Box>
      <MastersTitle>Наши мастера</MastersTitle>
      <MastersList
        mob1={mob1}
        mob2={mob2}
        mob3={mob3}
        tab1={tab1}
        tab2={tab2}
        tab3={tab3}
        desk1={desk1}
        desk2={desk2}
        desk3={desk3}
      />
    </Box>
  );
};
