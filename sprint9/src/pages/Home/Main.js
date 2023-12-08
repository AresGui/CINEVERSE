import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../services/Requests';
import { MainImage, MainContainer, Image } from './Main.styles';
import { LeftArrow, RightArrow } from './Row.styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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
    }

    const slideRight = () => {
        setCurrentMovieIndex((prevIndex) =>
            prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );

    }


    return (
        <MainContainer>
            <MainImage>
                <LeftArrow>
                    <MdChevronLeft size={40} onClick={slideLeft} />
                </LeftArrow>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <RightArrow>
                    <MdChevronRight size={40} onClick={slideRight} />
                </RightArrow>
            </MainImage>
            <div>
                <h1>{movie?.title}</h1>
                {/*  <div>
                    <button>
                        Play
                    </button>
                </div> */}
                <p>
                    Released: {movie?.release_date}
                </p>
                <p>
                    {movie?.overview}
                </p>
            </div>
        </MainContainer>

    )
}

export default Main