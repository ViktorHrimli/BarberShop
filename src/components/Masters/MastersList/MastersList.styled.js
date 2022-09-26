import styled from 'styled-components';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io';

export const ImgMob = styled.img`
  display: block;
`;

export const MastersLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: ${p => p.theme.space[4]}px;
`;

export const MastersItemsLinks = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.round};
`;

export const MastersItemsText = styled.p`
  font-size: ${p => p.theme.fontSizes.xsm};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
`;

export const MastersProf = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.accent};
`;

export const Inst = styled(IoLogoInstagram)`
  color: ${p => p.theme.colors.black};
  width: 20px;
  height: 20px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
export const Facebook = styled(IoLogoFacebook)`
  color: ${p => p.theme.colors.black};
  width: 20px;
  height: 20px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
export const LinkId = styled(IoLogoLinkedin)`
  color: ${p => p.theme.colors.black};
  width: 20px;
  height: 20px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
export const Twitter = styled(IoLogoTwitter)`
  color: ${p => p.theme.colors.black};
  width: 20px;
  height: 20px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
