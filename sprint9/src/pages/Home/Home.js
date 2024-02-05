import React from "react";
import Main from "./Main";
import Row from "./Row";
import requests from "../../services/Requests";
import MovieTrailer from "../../navigation/components/MovieTrailer/MovieTrailer";
import { useState } from "react";
import { GreatContainer } from "./Home.styles";

function Home() {
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log(selectedMovieTitle);
  console.log(isOpen);

  return (
    <div style={{ position: "relative" }}>
      <MovieTrailer movieTitle={selectedMovieTitle} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Main
        setSelectedMovieTitle={setSelectedMovieTitle}
        setIsOpen={setIsOpen}
      />
      <GreatContainer>
        <Row
          title="Top rated"
          fetchURL={requests.requestTopRated}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setIsOpen={setIsOpen}
        />
        <Row
          title="Trending"
          fetchURL={requests.requestTrending}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setIsOpen={setIsOpen}
        />
        <Row
          title="Popular"
          fetchURL={requests.requestPopular}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setIsOpen={setIsOpen}
        />
        {/* <Row title='Horror' fetchURL={requests.requestHorror} /> */}
        <Row
          title="Up coming"
          fetchURL={requests.requestUpcoming}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setIsOpen={setIsOpen}
        />
      </GreatContainer>
    </div>
  );
}

export default Home;
