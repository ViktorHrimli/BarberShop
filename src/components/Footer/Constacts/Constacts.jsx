import { Box } from 'CommonStyle/Common.styled';
import {
  BackgroundConstacts,
  ContactBorderLine,
  ContactBorderText,
  ContactText,
  ContactTitle,
  ContactsList,
  IconsMail,
  IconsPhone,
  IconsMap,
} from './Constacts.styled';
import bgContacts from '../../img/ContactsMob.jpg';

export const Contacts = () => {
  return (
    <BackgroundConstacts bg={bgContacts}>
      <Box
        display="flex"
        flexDirection={['column']}
        alignItems={['center', 'flex-start', 'flex-start']}
        justifyContent="center"
        width={[420, 690, 530]}
        px={[30, 40, 55]}
        py={[84, 100, 130]}
      >
        <Box
          display="flex"
          flexDirection={['column', 'row', 'column']}
          alignItems={['center']}
          gridGap={[40]}
        >
          <Box
            display="flex"
            flexDirection={['column']}
            alignItems={['center', 'flex-start']}
            ml={[0, 0, 55]}
            gridGap={[40]}
          >
            <ContactTitle>Контакты</ContactTitle>

            <ContactsList>
              <li>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  gridGap={15}
                >
                  <IconsMap></IconsMap>
                  <ContactText>ул. Васильковая, 7А, Киев, 08132</ContactText>
                </Box>
              </li>
              <li>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  gridGap={15}
                >
                  <IconsPhone></IconsPhone>
                  <ContactText>+38 044 111 11 11</ContactText>
                </Box>
              </li>
              <li>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  gridGap={15}
                >
                  <IconsMail></IconsMail>
                  <ContactText>barbershop@email.com</ContactText>
                </Box>
              </li>
            </ContactsList>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={['flex-start']}
            justifyContent="center"
            mt={[0, 0, 0]}
            width={[403, 330, 350]}
            pl={[0, 0, 0]}
            gridGap={[20]}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gridGap={20}
            >
              <ContactBorderLine></ContactBorderLine>
              <ContactBorderText>время работы</ContactBorderText>
            </Box>
            <ContactText>Ежедневно с 9:00 до 22:00</ContactText>
          </Box>
        </Box>
      </Box>
    </BackgroundConstacts>
  );
};
