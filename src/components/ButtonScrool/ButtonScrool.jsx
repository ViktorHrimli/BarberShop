import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import { ContainerBtnScrool, ButtonScroll } from './ButtonScroll.styled';

const ButtonScrool = () => {
  const [isShow, setIsShow] = useState(false);
  const [, setCoord] = useState(0);

  const onClickScrollButton = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    const wtf = e => {
      setCoord(e.pageYOffset);
      if (window.pageYOffset > 584) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    window.addEventListener('scroll', wtf);
    return () => {
      window.removeEventListener('scroll', wtf);
    };
  }, [setCoord]);

  return (
    <ContainerBtnScrool>
      {isShow && (
        <ButtonScroll onClick={onClickScrollButton} type="button">
          V
        </ButtonScroll>
      )}
    </ContainerBtnScrool>
  );
};

export { ButtonScrool };
