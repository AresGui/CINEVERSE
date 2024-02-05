import React, { useEffect, useState } from "react";
import "./MovieTrailer.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import {
  BigContainer,
  TrailerContainer,
  CloseContainer,
} from "./MovieTrailer.styles";
import { RiCloseCircleFill } from "react-icons/ri";

const MovieTrailer = ({ movieTitle, isOpen, setisOpen }) => {
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const url = await movieTrailer(movieTitle);
        setVideoURL(url);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    handleSearch();
  }, [movieTitle]);

  return (
    <BigContainer isOpen={isOpen} onClick={() => setisOpen(false)}>
      <TrailerContainer>
        <CloseContainer>
          <RiCloseCircleFill
            size={40}
            onClick={() => setisOpen(false)}
          ></RiCloseCircleFill>
        </CloseContainer>
        <ReactPlayer url={videoURL} controls={true} />
      </TrailerContainer>
    </BigContainer>
  );
};

export default MovieTrailer;
