import { Box } from 'CommonStyle/Common.styled';
import {
  BarListLink,
  BorderBarLinks,
  ConteinerBarLink,
  BarLinkCopir,
} from './LinkBar.styled';

export const LinkBar = () => {
  return (
    <Box
      display="flex"
      flexDirection={['column']}
      alignItems={['center', 'flex-start', 'flex-start']}
      justifyContent="center"
      width={[420, 690, 1170]}
      px={[30, 40, 55]}
      py={[44, 100, 130]}
    >
      <ConteinerBarLink>
        <Box mt={[20]}>
          <BarLinkCopir>Copyright 2020</BarLinkCopir>
        </Box>
        <Box
          display="flex"
          ml={['auto']}
          alignItems={['flex-start']}
          gridGap={[20]}
        >
          <BorderBarLinks></BorderBarLinks>
          <BarListLink>
            <li>
              <p>Instagram</p>
            </li>
            <li>
              <p>Youtube</p>
            </li>
          </BarListLink>
        </Box>
      </ConteinerBarLink>
    </Box>
  );
};
