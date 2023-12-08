import styled from "styled-components";
import film from "../../assets/film.jpg";

export const Background = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.3)
    ),
    url(${film});
  /* background-image: url(${film}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 50px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  height: auto;
  width: auto;
  color: white;
  background: rgba(19, 19, 18, 0.9);
  border: 5px black;
  border-radius: 5px;

  @media (max-width: 560px) {
    padding: 20px;
    margin: 0px 50px;
  }
`;

export const LogoLanding = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3.5rem;
  line-height: 1.5;
  margin: 5px 0;

  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

export const StyledWord = styled.span`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3.5rem;
  color: #b2d963;
  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

export const TextWrapper = styled.div`
  font-family: "Narnoor", serif;
  font-size: 1.3rem;

  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  font-family: "Narnoor", serif;
  font-size: 1.1rem;
  font-weight: bolder;
  background: none;
  background-color: #8bac4a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  width: 50%;
  padding: 5px;
  height: auto;
  border-radius: 5px;
  display: inline-block;

  &:hover {
    background-color: #b2d963;
  }

  @media (max-width: 560px) {
    font-size: 0.9rem;
  }
`;
