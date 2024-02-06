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
  AnotherContainer,
} from "./Row.styles";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";

function Row({ title, fetchURL, setSelectedSeriesTitle, setIsOpen }) {
  const [movies, setMovies] = useState([]);
  /*  const [selectedMovie, setSelectedMovie] = useState(null); */

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);

      // .filter((movie) => movie.backdrop_path)
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  const manageClick = (movie) => {
    setSelectedSeriesTitle(movie?.name);
    setIsOpen(true);
  };

  return (
    <BigContainer>
      <h2>{title}</h2>
      <AnotherContainer>
        <LeftArrow>
          <TbArrowBadgeLeft size={40} onClick={slideLeft} />
        </LeftArrow>
        <StyledRow id={`slider-${title}`}>
          {movies.map((movie) => (
           <ImageAndTitleDiv key={movie.id}>
              {movie.name && movie.backdrop_path && (
              <ImageContainer onClick={() => manageClick(movie)}>
                <Image
                  src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
                  alt={movie?.name}
                />
              </ImageContainer>
              )}
              {movie.name && movie.backdrop_path && <p>{movie?.name}</p>}
            </ImageAndTitleDiv>
          
          ))}
        </StyledRow>
        <RightArrow>
          <TbArrowBadgeRight size={40} onClick={slideRight} />
        </RightArrow>
        {/*  {selectedMovie && (
                <div>
                    <h1>{selectedMovie.name}</h1>
                    <div>
                        <button>Play</button>
                    </div>
                    <p>Released: {selectedMovie.release_date}</p>
                    <p>{selectedMovie.overview}</p>
                </div>
            )} */}
      </AnotherContainer>
    </BigContainer>
  );
}

export default Row;
