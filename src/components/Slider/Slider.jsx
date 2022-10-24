import { useEffect, useState } from 'react';

import img_1 from '../img/DeskGalerFourjpg.jpg';
import img_2 from '../img/ContactsMob.jpg';
import img_3 from '../img/DeskGalerThree.jpg';
import img_4 from '../img/GMF.jpg';
import img_5 from '../img/GMT.jpg';

const images = [img_1, img_2, img_3, img_4, img_5];

export function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wtf = setInterval(() => {
      if (index === 4) {
        return setIndex(0);
      } else {
        setIndex(prev => (prev += 1));
      }
    }, 1000);

    return () => {
      clearInterval(wtf);
    };
  }, [index]);

  return images[index];
}
