import React from "react";
import SeriesRow from "../Home/SeriesRow";
import series from "../../services/SeriesRequests";
// import { RowContainer } from "./Series.styles";
import MainSeries from "../Home/MainSeries";
import { useState } from "react";
import MovieTrailer from "../../navigation/components/MovieTrailer/MovieTrailer";
import { GreatContainer } from "../Home/Home.styles";

function Series() {
  const [selectedSeriesTitle, setSelectedSeriesTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <MovieTrailer
        movieTitle={selectedSeriesTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <MainSeries
        setSelectedSeriesTitle={setSelectedSeriesTitle}
        setIsOpen={setIsOpen}
      />
      <GreatContainer>
        <SeriesRow
          title="Airing today"
          fetchURL={series.airingToday}
          setSelectedSeriesTitle={setSelectedSeriesTitle}
          setIsOpen={setIsOpen}
        />
        <SeriesRow
          title="Top rated"
          fetchURL={series.topRated}
          setSelectedSeriesTitle={setSelectedSeriesTitle}
          setIsOpen={setIsOpen}
        />
        <SeriesRow
          title="On the air"
          fetchURL={series.onTheAir}
          setSelectedSeriesTitle={setSelectedSeriesTitle}
          setIsOpen={setIsOpen}
        />
        <SeriesRow
          title="Popular"
          fetchURL={series.popular}
          setSelectedSeriesTitle={setSelectedSeriesTitle}
          setIsOpen={setIsOpen}
        />
      </GreatContainer>
    </div>
  );
}

export default Series;
