import styled from "styled-components";
import film from "../../assets/popcorn.jpg";

export const Background = styled.div`
  background-image: url(${film});
  /* background-image: url(${film}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  box-sizing: border-box;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 80px 10px;
  margin: 0;
  height: 100vh;
  width: 50%;
  color: white;
  background: rgba(0, 0, 0, 0.8);

  @media (max-width: 560px) {
    padding: 0;
    margin: 0px;
  }
`;

export const LogoLanding = styled.h1`
  font-family: sans-serif;
  font-size: 4.1rem;
  line-height: 1.5;
  margin-bottom: 0;

  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

export const StyledWord = styled.span`
  font-family: sans-serif;
  font-size: 4.1rem;
  color: #e07a5f;
  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

export const TextWrapper = styled.div`
  font-family: "Narnoor", serif;
  font-size: 1.5rem;
  margin-top: 0;
  justify-content: center;

  @media (max-width: 560px) {
    font-size: 1rem;
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
  width: 250px;
  height: auto;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  letter-spacing: 1px;
  /* display: inline-block; */

  &:hover {
    background-color: #eab69f;
    color: white;
  }

  @media (max-width: 560px) {
    font-size: 0.9rem;
  }
`;
