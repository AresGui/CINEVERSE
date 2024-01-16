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
  LogoLanding,
  StyledWord,
} from "../MainNavBar/MainNavBar.styles";
import { useState } from "react";

const SecondaryNavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoLanding href="/Home">
        <StyledWord>Cine</StyledWord>Verse
      </LogoLanding>
      <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} href="#">
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
      </ToggleButton>
      <LinksContainer isOpen={isMenuOpen}>
        <div>
          <search>Search</search>
        </div>
        <LiLeft>
          <StyledLink href="/Movies">Movies</StyledLink>
        </LiLeft>
        <LiRight>
          <StyledLink href="/Series">TV Series</StyledLink>
        </LiRight>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default SecondaryNavBar;
