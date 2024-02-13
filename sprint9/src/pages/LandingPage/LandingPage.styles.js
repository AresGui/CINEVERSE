import styled from "styled-components";
import film from "../../assets/interstellar.jpg";

export const Background = styled.div`
  background-image: url(${film});
  /* background-image: url(${film}); */
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* height: 100vh; */
  /* box-sizing: border-box; */

  /* max-width: 100%;
  height: auto;
  width: auto; */

  @media (max-width: 560px) {
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
`;

export const MainDiv = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);

  @media (min-width: 900px) {
    max-width: 40%;
  }

  @media (min-width: 560px) {
    max-width: 55%;
  }

  @media (max-width: 560px) {
    max-width: 65%;
  }
`;

export const LogoLanding = styled.h1`
  font-family: sans-serif;
  font-size: 3.5rem;
  line-height: 1.5;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 3.3;
  }

  @media (max-width: 560px) {
    font-size: 2.5rem;
  }
`;

export const StyledWord = styled.span`
  font-family: sans-serif;
  /* font-size: 3.5rem; */
  color: #e07a5f;
  @media (max-width: 560px) {
    /* font-size: 2rem; */
  }
`;

export const TextWrapper = styled.div`
  font-family: "Narnoor", serif;
  font-size: 1.5rem;
  /* margin-top: 0; */
  /* justify-content: center; */

  p {
    margin: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 560px) {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: bolder;
  justify-content: center;
  background-color: #e07a5f;
  color: white;
  cursor: pointer;
  width: 50%;
  height: auto;
  padding: 10px;
  margin: 30px 0;
  border-radius: 9px;
  border: none;
  letter-spacing: 1px;
  /* display: inline-block; */

  &:hover {
    background-color: #eab69f;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 7px;
  }

  @media (max-width: 560px) {
    font-size: 0.9rem;
    /* padding: 3px; */
  }
`;
