import React, { useState } from "react";
import {
  NavbarContainer,
  LogoLanding,
  StyledWord,
  // LinksContainer,
  // StyledLink,
  ToggleButton,
  ToggleBar,
} from "./MainNavBar.styles";

const MainNavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoLanding>
        <StyledWord>Cine</StyledWord>Verse
      </LogoLanding>
      <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} href="#">
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
      </ToggleButton>
      {/* <LinksContainer isOpen={isMenuOpen}>
        <StyledLink href="/Signin">SIGN IN</StyledLink>
        <StyledLink href="/Signup">SIGN UP</StyledLink>
      </LinksContainer> */}
    </NavbarContainer>
  );
};

export default MainNavBar;
