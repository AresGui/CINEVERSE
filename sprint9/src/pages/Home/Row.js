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

function Row({ title, fetchURL }) {
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

  return (
    <BigContainer>
      <h2>{title}</h2>
      <div>
        <StyledRow id={`slider-${title}`}>
          {movies.map((movie) => (
            <ImageAndTitleDiv key={movie.id}>
              <ImageContainer>
                <LeftArrow>
                  <TbArrowBadgeLeft size={40} onClick={slideLeft} />
                </LeftArrow>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
                <RightArrow>
                  <TbArrowBadgeRight size={40} onClick={slideRight} />
                </RightArrow>
              </ImageContainer>
              <p>{movie?.title}</p>
            </ImageAndTitleDiv>
          ))}
        </StyledRow>
      </div>
    </BigContainer>
  );
}

export default Row;
