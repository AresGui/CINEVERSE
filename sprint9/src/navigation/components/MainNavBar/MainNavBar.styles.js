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
    font-size: 2.5rem;
  }
`;
export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center !important;
  margin: 0;

  @media (max-width: 560px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")} !important;
    position: absolute;
    top: 40px;
    right: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    /* padding: 0;
    margin: 0;
    width: auto;
    border: 3px solid pink;*/
  }
`;

export const LiLeft = styled.li`
  list-style: none;
  /* margin: 0 7px; */
  display: flex;
  justify-content: right;
  align-items: center;
  /* padding: 0; */

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 560px) {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 0 15px;
    /* border: #b2d963 solid 3px; */
    background-color: rgba(255, 255, 255, 0.9);
    border: none;

    &:hover {
      background-color: #e07a5f;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Narnoor", serif;
  font-size: 1.5rem;
  /* color: white; */
  color: ${(props) => (props.active ? "#e07a5f" : "white")};
  display: flex;
  align-items: center;
  padding: 0 3px 5px 3px;
  margin: 0 10px;
  box-sizing: border-box;
  font-weight: bold;

  cursor: pointer;
  transition: color 0.3s ease-in-out;

  @media (max-width: 560px) {
    font-size: 1.5rem;
    color: black;
  }

  /* &:hover {
    color: #e07a5f;
  } */
`;

// export const LiRight = styled(LiLeft)`
//   @media (max-width: 560px) {
//     background-color: rgba(255, 255, 255);
//     border: none;
//   }
// `;

export const ToggleButton = styled.a`
  position: absolute;
  top: 10px;
  right: 90px;
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
