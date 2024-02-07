import styled from "styled-components";

export const NavbarContainer = styled.nav`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
  z-index: 2;
  width: 100%;
  position: absolute;
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.a`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3.5rem;
  padding-left: 20px;
  /*  font-weight: bold; */
  color: inherit;
  text-decoration: none;
  text-transform: unset;

  @media (max-width: 560px) {
    font-size: 2.5rem;
  }
`;

export const LogoLanding = styled.a`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  padding-left: 20px;
  /*  font-weight: bold; */
  color: inherit;
  text-decoration: none;
  text-transform: unset;

  @media (max-width: 560px) {
    font-size: 2.5rem;
  }
`;

export const StyledWord = styled.span`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  color: #e07a5f;
  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;
export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center !important;
  margin: 0;

  @media (max-width: 560px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")} !important;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const LiLeft = styled.li`
  list-style: none;
  margin: 0 7px;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    /* background-color: #b2d963; */
  }

  @media (max-width: 560px) {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0;
    background-color: none;
    border: #b2d963 solid 3px;
    &:hover {
      /* background-color: #b2d963; */
    }
  }
  &:hover {
    /* background-color: #b2d963; */
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Narnoor", serif;
  font-size: 1.5rem;
  color: white;
  color: ${props => (props.active ? "#e07a5f" : "white")};
  display: flex;
  align-items: center;
  padding: 0 3px 5px 3px;
  margin: 0 10px;
  box-sizing: border-box;
  font-weight: bold;

  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e07a5f;
  }

  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

export const LiRight = styled(LiLeft)`
  &:hover {
  }

  @media (max-width: 560px) {
    background-color: transparent;

    &:hover {
    }
  }
`;

export const ToggleButton = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  @media (max-width: 560px) {
    /* display: ${({ isOpen }) => (isOpen ? "flex" : "none")} !important;  */
    display: flex;
  }
`;

export const ToggleBar = styled.span`
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;
