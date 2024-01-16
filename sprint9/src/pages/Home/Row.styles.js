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
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 450px;
  margin: 5px 15px 4px 0px;
  border-radius: 18px;
  //overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  object-fit: cover;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

export const BigContainer = styled.div`
  max-width: 100%;
  position: relative;
  font-family: "Narnoor", serif;
  font-size: 1.1rem;
  color: #fff;
  margin: 0 50px;
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

export const IconDiv = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
`;
