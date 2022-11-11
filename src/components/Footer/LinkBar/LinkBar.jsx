import { Box } from 'CommonStyle/Common.styled';
import {
  BarListLink,
  BorderBarLinks,
  ConteinerBarLink,
  BarLinkCopir,
  BarListItemLink,
} from './LinkBar.styled';

export const LinkBar = () => {
  return (
    <Box
      display="flex"
      alignItems={['flex-start', 'flex-start', 'flex-start']}
      justifyContent={['center', 'space-between']}
      width={[350, 690, 1170]}
      px={[20, 40, 55]}
      py={[24, 56, 55]}
    >
      <Box display="flex" alignItems="flex-start" mt={[44, 0]}>
        <BarLinkCopir>Copyright 2020</BarLinkCopir>
      </Box>
      <ConteinerBarLink>
        <Box
          display="flex"
          width={[240]}
          alignItems={['center']}
          gridGap={[20]}
        >
          <BorderBarLinks></BorderBarLinks>
          <BarListLink>
            <BarListItemLink>
              <p>Instagram</p>
            </BarListItemLink>
            <BarListItemLink>
              <p>Youtube</p>
            </BarListItemLink>
          </BarListLink>
        </Box>
      </ConteinerBarLink>
    </Box>
  );
};
