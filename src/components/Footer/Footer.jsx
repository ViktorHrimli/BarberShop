import { Box } from 'CommonStyle/Common.styled';
import { Forms } from './Form/Forms';
import { Contacts } from './Constacts/Constacts';
import { LinkBar } from './LinkBar/LinkBar';

export const Footer = () => {
  return (
    <Box>
      <Forms />
      <Contacts />
      <LinkBar />
    </Box>
  );
};
