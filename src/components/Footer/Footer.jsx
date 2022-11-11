import { Box } from 'CommonStyle/Common.styled';
import { Forms } from './Form/Forms';
import { Contacts } from './Constacts/Constacts';
import { LinkBar } from './LinkBar/LinkBar';

export const Footer = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}
      >
        <Forms />
        <Contacts />
      </Box>
      <LinkBar />
    </Box>
  );
};
