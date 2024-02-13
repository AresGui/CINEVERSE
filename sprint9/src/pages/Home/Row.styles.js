import styled from "styled-components";

export const ImageAndTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  > p {
    padding: 0 5px;
    margin: 5px 0;
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 450px;
  margin: 5px 15px 4px 0px;
  border-radius: 18px;
  //overflow: hidden;
  position: relative;

  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  @media (max-width: 560px) {
    width: 150px;
    height: 250px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  object-fit: cover;
`;

export const AnotherContainer = styled.div`
  position: relative;
`;

export const StyledRow = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 10px 5px;
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
  /* overflow-y: hidden; */
  /* flex-wrap: nowrap; */
  position: relative;
  /* overflow-x: hidden; */
`;

export const BigContainer = styled.div`
  max-width: 100%;
  /* position: relative; */
  font-family: "Narnoor", serif;
  font-size: 1.1rem;
  color: #fff;
  margin: 0 50px;

  @media (max-width: 560px) {
    h2 {
      font-size: 1.8rem;
      margin: 5px 0;
    }
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -50px;
  z-index: 2;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  z-index: 2;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const IconDiv = styled.button`
  position: absolute;
  bottom: 5px;
  left: 5px;
  background: transparent;
  border: none;
`;

// export const SubContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
// `;
