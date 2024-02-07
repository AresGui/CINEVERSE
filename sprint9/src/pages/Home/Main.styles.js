import styled from "styled-components";

export const MainContainer = styled.div`
  width: auto;
  height: auto;
  font-family: "Narnoor", serif;
  position: relative;
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    );
    z-index: 1;
  }
`;

export const Image = styled.img`
  display: block;
  height: 600px;
  width: 100%;
  object-fit: cover; //Para que la imagen no quede alargada
`;

export const TextDiv = styled.div`
  position: absolute;
  top: 75%; /* Position at the vertical center */
  left: 50%; /* Position at the horizontal center */
  transform: translate(-50%, -50%); /* Center the TextDiv */
  text-align: justify;
  color: white; /* Set text color */
  width: 60%; /* Adjust the width as needed */
  max-width: 800px; /* Set max-width for responsiveness */
  padding: 20px; /* Add padding as needed */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  z-index: 2;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 2;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 2;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const PlayIcon = styled.div`
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #e07a5f;
  }
`;
