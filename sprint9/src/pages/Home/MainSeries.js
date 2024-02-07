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

function MainSeries({ videoKey, setSelectedSeriesTitle, setIsOpen }) {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  /* const movie = movies[Math.floor(Math.random() * movies.length)]; */

  useEffect(() => {
    axios.get(series.popular).then((response) => {
      setMovies(
        response.data.results.filter(
          (movie) => movie.overview && movie.backdrop_path
        )
      );

      if (videoKey === null) {
        setCurrentMovieIndex(+1);
      }
    });
  }, [videoKey]);

  const movie = movies[currentMovieIndex];

  const slideLeft = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const manageClick = (movie) => {
    setSelectedSeriesTitle(movie?.name);
    setIsOpen(true);
  };

  //   const renderImage = movie.overview && movie.backdrop_path ? (
  //     <Image
  //     src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
  //     alt={movie?.name}
  //   />
  // ) : setCurrentMovieIndex((prevIndex) => prevIndex + 1);

  return (
    <MainContainer>
      <MainImage>
        <SecondaryNavBar />
        <LeftArrow>
          <TbArrowBadgeLeft size={40} onClick={slideLeft} />
        </LeftArrow>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.name}
        />
        {/* {movie.overview && movie.backdrop_path ? (
    <Image
      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      alt={movie?.name}
    />
  ) : setCurrentMovieIndex((prevIndex) => prevIndex + 1)} */}
        {/* {renderImage} */}
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
