import styled, { keyframes } from 'styled-components';
const show = keyframes`
from {
    transform: translateX(-400px);
} to {
    transform: translateX(0px)
}
`;

const ConteinerBurger = styled.div`
  height: 90vh;
  width: 90%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${p => p.mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${show} 300ms;
`;

const ButtonBurger = styled.button`
  display: block;
  margin-left: auto;
  background-color: transparent;
  color: white;
`;

export { ConteinerBurger, ButtonBurger };
