import React from "react";
import { useNavigate } from "react-router-dom";
// import MainNavBar from "../../navigation/components/MainNavBar/MainNavBar";
import {
  Background,
  Button,
  MainContainer,
  MainDiv,
  LogoLanding,
  TextWrapper,
  StyledWord,
} from "./LandingPage.styles";

function LandingPage() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/Signup");
  };

  return (
    <>
      <Background>
        {/* <MainNavBar /> */}
        <MainContainer>
          <MainDiv>
            <LogoLanding>
              <StyledWord>C</StyledWord>ine<StyledWord>V</StyledWord>erse
            </LogoLanding>
            <TextWrapper>
              <p>Iconic, award-winning series, movies, and more</p>
              <p>€6.95/month</p>
              <p>Cancel anytime</p>
            </TextWrapper>
            <Button onClick={handleButton}>SIGN UP NOW</Button>
          </MainDiv>
        </MainContainer>
      </Background>
    </>
  );
}

export default LandingPage;
