import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledRow,
  BigContainer,
  ImageContainer,
  LeftArrow,
  RightArrow,
  Image,
  ImageAndTitleDiv,
} from "./Row.styles";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
// import MovieTrailer from "../../navigation/components/MovieTrailer/MovieTrailer";

function Row({ title, fetchURL, setSelectedMovieTitle, setisOpen }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const manageClick = (movie) => {
    setSelectedMovieTitle(movie?.title);
    setisOpen(true);
  };

  return (
    <BigContainer>
      <h2>{title}</h2>
      <div>
        <StyledRow id={`slider-${title}`}>
          <LeftArrow>
            <TbArrowBadgeLeft size={40} onClick={slideLeft} />
          </LeftArrow>
          {movies.map((movie) => (
            <ImageAndTitleDiv key={movie.id}>
              {movie.title && movie.backdrop_path && (
                <ImageContainer onClick={() => manageClick(movie)}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
                    alt={movie?.title}
                  />
                </ImageContainer>
              )}
              {movie.title && <p>{movie.title}</p>}
            </ImageAndTitleDiv>
          ))}
          <RightArrow>
            <TbArrowBadgeRight size={40} onClick={slideRight} />
          </RightArrow>
        </StyledRow>
      </div>
    </BigContainer>
  );
}

export default Row;
