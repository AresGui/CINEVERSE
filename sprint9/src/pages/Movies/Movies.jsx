import React from "react";
import Row from "../Home/Row";
import SecondaryNavBar from "../../navigation/components/SecondaryNavBar/SecondaryNavBar";
import requests from "../../services/Requests";
import { RowContainer } from "../Movies/Movies.styles";

function Movies() {
  return (
    <>
      <SecondaryNavBar />
      <RowContainer>
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="Top rated" fetchURL={requests.requestTopRated} />
        <Row title="Trending" fetchURL={requests.requestTrending} />
        <Row title="Up coming" fetchURL={requests.requestUpcoming} />
      </RowContainer>
    </>
  );
}

export default Movies;
