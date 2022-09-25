import { Box } from 'CommonStyle/Common.styled';
import { BarList, ItemBar, BorderBar, BarLogo } from './Bar.styled';

export const Bar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      mb={[0, 90]}
      ml={[0, 45]}
    >
      <BarLogo />
      <BarList>
        <ItemBar>
          <p>Instagram</p>
        </ItemBar>
        <ItemBar>
          <p>YouTube</p>
        </ItemBar>
      </BarList>
      <BorderBar></BorderBar>
    </Box>
  );
};
