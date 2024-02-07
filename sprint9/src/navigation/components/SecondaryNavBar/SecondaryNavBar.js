import React from "react";
import {
  NavbarContainer,
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
// import Search from "./Search";
import { useLocation } from 'react-router-dom';

const SecondaryNavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  return (
    <NavbarContainer>
      <LogoLanding href="/Movies">
        <StyledWord>Cine</StyledWord>Verse
      </LogoLanding>
      <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} href="#">
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
        <ToggleBar></ToggleBar>
      </ToggleButton>
      <LinksContainer isOpen={isMenuOpen}>
        <LiLeft>
          <StyledLink href="/Movies" active={location.pathname === '/Movies'}>Movies</StyledLink>
        </LiLeft>
        <LiRight>
          <StyledLink href="/Series" active={location.pathname === '/Series'}>TV Series</StyledLink>
        </LiRight>
        {/* <Search /> */}
      </LinksContainer>
    </NavbarContainer>
  );
};

export default SecondaryNavBar;
