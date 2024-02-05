import React from "react";
import Main from "./Main";
import Row from "./Row";
import requests from "../../services/Requests";
import MovieTrailer from "../../navigation/components/MovieTrailer/MovieTrailer";
import { useState } from "react";
import { GreatContainer } from "./Home.styles";

function Home() {
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  const [isOpen, setisOpen] = useState(false);
  console.log(selectedMovieTitle);
  console.log(isOpen);

  return (
    <div style={{ position: "relative" }}>
      <MovieTrailer movieTitle={selectedMovieTitle} isOpen={isOpen} setisOpen={setisOpen}/>
      <Main
        setSelectedMovieTitle={setSelectedMovieTitle}
        setisOpen={setisOpen}
      />
      <GreatContainer>
        <Row
          title="Top rated"
          fetchURL={requests.requestTopRated}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setisOpen={setisOpen}
        />
        <Row
          title="Trending"
          fetchURL={requests.requestTrending}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setisOpen={setisOpen}
        />
        <Row
          title="Popular"
          fetchURL={requests.requestPopular}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setisOpen={setisOpen}
        />
        {/* <Row title='Horror' fetchURL={requests.requestHorror} /> */}
        <Row
          title="Up coming"
          fetchURL={requests.requestUpcoming}
          setSelectedMovieTitle={setSelectedMovieTitle}
          setisOpen={setisOpen}
        />
      </GreatContainer>
    </div>
  );
}

export default Home;
