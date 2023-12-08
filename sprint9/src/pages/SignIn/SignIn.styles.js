import styled from 'styled-components';
import { TextWrapper, MainDiv } from '../LandingPage/LandingPage.styles';

export const MainDiv2 = styled(MainDiv)`
margin-top:0px;
`;

export const TextContainer = styled(TextWrapper)`
margin: 0px 20px;
 font-family: 'Narnoor', serif;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
font-family: 'Narnoor', serif;
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
  background-color: #8bac4a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #b2d963;
  }
`
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
color: #edf2bc;
`;
