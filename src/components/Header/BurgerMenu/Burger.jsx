import { Nav } from '../Nav/Nav';
import { ConteinerBurger, ButtonBurger } from './Burger.styled';

const Burger = ({ mobile, onToggle, isShow }) => {
  return (
    <ConteinerBurger mobile={mobile} isShow={isShow}>
      <ButtonBurger onClick={onToggle} type="button">
        X
      </ButtonBurger>
      <Nav />
    </ConteinerBurger>
  );
};

export { Burger };
