import styled from "styled-components";

export const BigContainer = styled.div`
  position: fixed;
  z-index: 1000;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: ${({isOpen}) => isOpen === false && "none"};

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);

  /* width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: fixed;
    /* top: 0;
    left: 0; 
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center; */
`;

export const TrailerContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;

  display: flex;
  position: relative;

  /* height: 100vh;
  width: 100%;
  font-size: 22px; */

  /* width: 500px; */
  /* height: 500px; */
  /* z-index: 1000; */
  /* top: 0;
  left: 0; */
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 15%;
  top: 10%;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #6c757d;
  }
`;
