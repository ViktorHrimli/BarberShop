import { Box } from 'CommonStyle/Common.styled';
import {
  ListConteinerStats,
  ConteinerStat,
  StatsNumber,
  TextStat,
} from './StatList.styled';

export const StatList = () => {
  return (
    <Box display="flex" gridGap={[30]} mt={[44]} ml={[0, 'auto']}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <ListConteinerStats>
          <li>
            <ConteinerStat>
              <StatsNumber>60</StatsNumber>
              <TextStat>Довольных клиентов в день</TextStat>
            </ConteinerStat>
          </li>

          <li>
            <ConteinerStat>
              <StatsNumber>20</StatsNumber>
              <TextStat>Лучших мастеров Киева </TextStat>
            </ConteinerStat>
          </li>
        </ListConteinerStats>
      </Box>
      <Box mt={[44]}>
        <ListConteinerStats>
          <li>
            <ConteinerStat>
              <StatsNumber>50</StatsNumber>
              <TextStat>Наград за отличный сервис </TextStat>
            </ConteinerStat>
          </li>
          <li>
            <ConteinerStat>
              <StatsNumber>100</StatsNumber>
              <TextStat>Подарков постоянным клиентам</TextStat>
            </ConteinerStat>
          </li>
        </ListConteinerStats>
      </Box>
    </Box>
  );
};
