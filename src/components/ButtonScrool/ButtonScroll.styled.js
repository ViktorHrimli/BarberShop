import styled from 'styled-components';

const ContainerBtnScrool = styled.div`
  position: fixed;
  bottom: 6%;
  right: 6%;
`;

const ButtonScroll = styled.button`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid black;
  padding: 2px;
  outline: none;
  color: white;
  background-color: transparent;
  transform: rotate(180deg);
  scale: 1.5;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: orange;
  z-index: 10;
`;

export { ContainerBtnScrool, ButtonScroll };
