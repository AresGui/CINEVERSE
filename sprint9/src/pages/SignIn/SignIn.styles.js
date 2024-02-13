import styled from "styled-components";
import { TextWrapper } from "../LandingPage/LandingPage.styles";

export const MainDiv2 = styled.div`
  /* width: 300px; */
  max-width: 80%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 20px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
`;

export const TextContainer = styled(TextWrapper)`
  margin: 0px 20px;
  font-family: "Narnoor", serif;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
  font-family: "Narnoor", serif;
  font-size: 2.3rem;
  margin: 0px;
`;

export const Text = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const FormButton = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  background-color: #e07a5f;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eab69f;
  }
`;
export const SignupInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;

export const SignupRedirect = styled.a`
  list-style: none;
  text-decoration: none;
  align-items: start;
  color: #eab69f;
`;
