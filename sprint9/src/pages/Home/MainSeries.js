import React, { useEffect, useState } from "react";
import axios from "axios";
import series from "../../services/SeriesRequests";
import {
  MainImage,
  MainContainer,
  Image,
  TextDiv,
  PlayIcon,
} from "./Main.styles";
import { LeftArrow, RightArrow } from "./Main.styles";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { FaRegCirclePlay } from "react-icons/fa6";
import SecondaryNavBar from "../../navigation/components/SecondaryNavBar/SecondaryNavBar";

function MainSeries({ setSelectedSeriesTitle, setisOpen }) {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  /* const movie = movies[Math.floor(Math.random() * movies.length)]; */

  useEffect(() => {
    axios.get(series.popular).then((response) => {
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

  const manageClick = (movie) => {
    setSelectedSeriesTitle(movie?.name);
    setisOpen(true);
  };

  return (
    <MainContainer>
      <MainImage>
        <SecondaryNavBar />
        <LeftArrow>
          <TbArrowBadgeLeft size={40} onClick={slideLeft} />
        </LeftArrow>
        <Image
          src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
          alt={movie?.name}
        />
        <RightArrow>
          <TbArrowBadgeRight size={40} onClick={slideRight} />
        </RightArrow>
        <TextDiv>
          <h1>{movie?.name}</h1>
          <PlayIcon onClick={() => manageClick(movie)}>
            <FaRegCirclePlay size={30} />
          </PlayIcon>
          {/* <p>
                    Released: {movie?.release_date}
                </p> */}
          <p>{movie?.overview}</p>
        </TextDiv>
      </MainImage>
    </MainContainer>
  );
}

export default MainSeries;
