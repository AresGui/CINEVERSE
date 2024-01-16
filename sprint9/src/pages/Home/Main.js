import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../services/Requests";
import { MainImage, MainContainer, Image, TextDiv } from "./Main.styles";
import { LeftArrow, RightArrow } from "./Main.styles";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { FaRegCirclePlay } from "react-icons/fa6";
import SecondaryNavBar from "../../navigation/components/SecondaryNavBar/SecondaryNavBar";

function Main() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  /* const movie = movies[Math.floor(Math.random() * movies.length)]; */

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[currentMovieIndex];

  const slideLeft = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <MainContainer>
      <MainImage>
        <SecondaryNavBar />
        <LeftArrow>
          <TbArrowBadgeLeft size={40} onClick={slideLeft} />
        </LeftArrow>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <RightArrow>
          <TbArrowBadgeRight size={40} onClick={slideRight} />
        </RightArrow>
        <TextDiv>
          <h1>{movie?.title}</h1>
          <div>
            <FaRegCirclePlay size={30} />
          </div>
          {/* <p>
                    Released: {movie?.release_date}
                </p> */}
          <p>{movie?.overview}</p>
        </TextDiv>
      </MainImage>
    </MainContainer>
  );
}

export default Main;
