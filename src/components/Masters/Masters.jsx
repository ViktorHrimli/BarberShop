import { Box } from 'CommonStyle/Common.styled';
import {
  MastersTitle,
  BorderMastersText,
  BorderLineMasters,
  WtfList,
} from './Masters.styled';
import { MastersList } from './MastersList/MastersList';

export const Masters = ({ masters }) => {
  return (
    <Box
      display="flex"
      flexDirection={['column']}
      alignItems={['center', 'center', 'flex-start']}
      justifyContent="center"
      width={[420, 690, 1170]}
      gridGap={[0, 0, 0]}
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
      <WtfList>
        <MastersList masters={masters} />
      </WtfList>
    </Box>
  );
};
