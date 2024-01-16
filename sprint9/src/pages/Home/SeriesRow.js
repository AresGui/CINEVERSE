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
  IconDiv,
  ImageAndTitleDiv,
} from "./Row.styles";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { FaRegCirclePlay } from "react-icons/fa6";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  /*  const [selectedMovie, setSelectedMovie] = useState(null); */

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
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

  /*   const handleClick = (movie) => {
          setSelectedMovie(movie);
      }; */

  return (
    <BigContainer>
      <div>
        <h2>{title}</h2>
        <div>
          <StyledRow id={`slider-${title}`}>
            <LeftArrow>
              <TbArrowBadgeLeft size={40} onClick={slideLeft} />
            </LeftArrow>
            {movies.map((movie) => (
              <ImageAndTitleDiv key={movie.id}>
                <ImageContainer>
                  <Image
                    src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
                    alt={movie?.name}
                  />
                  <IconDiv>
                    <FaRegCirclePlay size={30} />
                  </IconDiv>
                </ImageContainer>
                {movie?.name && <p>{movie?.name}</p>}
              </ImageAndTitleDiv>
            ))}
            <RightArrow>
              <TbArrowBadgeRight size={40} onClick={slideRight} />
            </RightArrow>
          </StyledRow>
        </div>
      </div>
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
    </BigContainer>
  );
}

export default Row;
