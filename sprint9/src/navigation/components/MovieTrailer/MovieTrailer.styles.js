import styled from "styled-components";

export const BigContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.isOpen === false && "none"};
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
  display: flex;

  /* height: 100vh;
  width: 100%;
  font-size: 22px; */

  /* width: 500px; */
  /* height: 500px; */
  /* z-index: 1000; */
  /* top: 0;
  left: 0; */
`;
