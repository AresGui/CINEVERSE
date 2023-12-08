import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  LinksContainer,
  StyledLink,
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
      <div>
        <Logo href="/">FILMFLIX</Logo>
      </div>
      <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} href="#">
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
      </ToggleButton>
      <LinksContainer isOpen={isMenuOpen}>
        <StyledLink href="/Signin">SIGN IN</StyledLink>
        <StyledLink href="/Signup">SIGN UP</StyledLink>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default MainNavBar;
