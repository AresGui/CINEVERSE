import React from "react";
import Main from "./Main";
import Row from "./Row";
import requests from "../../services/Requests";

function Home() {
  return (
    <div>
      <Main />
      <Row title="Top rated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      {/* <Row title='Horror' fetchURL={requests.requestHorror} /> */}
      <Row title="Up coming" fetchURL={requests.requestUpcoming} />
    </div>
  );
}

export default Home;
