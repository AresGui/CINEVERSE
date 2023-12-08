import React from "react";
import {
  NavbarContainer,
  Logo,
  ToggleButton,
  ToggleBar,
  LinksContainer,
  LiLeft,
  StyledLink,
  LiRight,
} from "../MainNavBar/MainNavBar.styles";
import { useState } from "react";

const SecondaryNavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <div>
        <Logo href="/Home">FILMFLIX</Logo>
      </div>
      <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} href="#">
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
      </ToggleButton>
      <LinksContainer isOpen={isMenuOpen}>
        <LiLeft>
          <StyledLink href="/Movies">MOVIES</StyledLink>
        </LiLeft>
        <LiRight>
          <StyledLink href="/Series">SERIES</StyledLink>
        </LiRight>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default SecondaryNavBar;
