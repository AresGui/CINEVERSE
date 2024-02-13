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
  object-fit: cover;
`;

export const TextDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: justify;
  color: white;
  width: 60%;
  max-width: 800px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;

  @media (max-width: 560px) {
    top: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;

    h1 {
      font-size: 1.8rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      line-height: 2;

      max-height: 8em;
      overflow: auto;
      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
      &::-webkit-scrollbar {
        width: 0;
      }
      position: relative;
      margin-bottom: 0;
    }
  }
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
