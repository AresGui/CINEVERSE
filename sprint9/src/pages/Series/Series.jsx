import React from "react";
import SecondaryNavBar from "../../navigation/components/SecondaryNavBar/SecondaryNavBar";
import SeriesRow from "../Home/SeriesRow";
import series from "../../services/SeriesRequests";
// import { RowContainer } from "./Series.styles";
import MainSeries from "../Home/MainSeries";
import { useState } from "react";
import MovieTrailer from "../../navigation/components/MovieTrailer/MovieTrailer";
import { GreatContainer } from "../Home/Home.styles";

function Series() {
  const [selectedSeriesTitle, setSelectedSeriesTitle] = useState("");
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <SecondaryNavBar />
      <MovieTrailer
        movieTitle={selectedSeriesTitle}
        isOpen={isOpen}
        setisOpen={setisOpen}
      />
      <MainSeries
        setSelectedSeriesTitle={setSelectedSeriesTitle}
        setisOpen={setisOpen}
      />
      <GreatContainer>
        <SeriesRow title="Airing today" fetchURL={series.airingToday} setSelectedSeriesTitle={setSelectedSeriesTitle}
          setisOpen={setisOpen} />
        <SeriesRow title="On the air" fetchURL={series.onTheAir} setSelectedSeriesTitle={setSelectedSeriesTitle}
          setisOpen={setisOpen} />
        <SeriesRow title="Popular" fetchURL={series.popular} setSelectedSeriesTitle={setSelectedSeriesTitle}
          setisOpen={setisOpen} />
        <SeriesRow title="Top rated" fetchURL={series.topRated} setSelectedSeriesTitle={setSelectedSeriesTitle}
          setisOpen={setisOpen} />
      </GreatContainer>
    </div>
  );
}

export default Series;
