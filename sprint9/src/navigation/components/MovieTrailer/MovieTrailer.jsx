import React, { useEffect, useState } from "react";
import "./MovieTrailer.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { BigContainer, TrailerContainer } from "./MovieTrailer.styles";

const MovieTrailer = ({ movieTitle, isOpen }) => {
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
    <BigContainer isOpen={isOpen}>
      <TrailerContainer>
        <ReactPlayer url={videoURL} controls={true} />
      </TrailerContainer>
    </BigContainer>
  );
};

export default MovieTrailer;
