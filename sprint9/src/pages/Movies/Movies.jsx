// import React from "react";
// import Row from "../Home/Row";
// import SecondaryNavBar from "../../navigation/components/SecondaryNavBar/SecondaryNavBar";
// import requests from "../../services/Requests";
// import { RowContainer } from "../Movies/Movies.styles";

// function Movies() {
//   return (
//     <>
//       <SecondaryNavBar />
//       <RowContainer>
//         <Row title="Popular" fetchURL={requests.requestPopular} />
//         <Row title="Top rated" fetchURL={requests.requestTopRated} />
//         <Row title="Trending" fetchURL={requests.requestTrending} />
//         <Row title="Up coming" fetchURL={requests.requestUpcoming} />
//       </RowContainer>
//     </>
//   );
// }

// export default Movies;

import React from "react";
import Main from "../Home/Main";
import Row from "../Home/Row";
import requests from "../../services/Requests";
import MovieTrailer from "../../navigation/components/MovieTrailer/MovieTrailer";
import { useState } from "react";
import { GreatContainer } from "../Home/Home.styles";

function Movies () {
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

export default Movies;