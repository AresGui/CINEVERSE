import React from "react";
import SecondaryNavBar from "../../navigation/components/SecondaryNavBar/SecondaryNavBar";
import SeriesRow from "../Home/SeriesRow";
import series from "../../services/SeriesRequests";
import { RowContainer } from "./Series.styles";

function Series() {
  return (
    <div>
      <SecondaryNavBar />
      <RowContainer>
        <SeriesRow title="Airing today" fetchURL={series.airingToday} />
        <SeriesRow title="On the air" fetchURL={series.onTheAir} />
        <SeriesRow title="Popular" fetchURL={series.popular} />
        <SeriesRow title="Top rated" fetchURL={series.topRated} />
      </RowContainer>
    </div>
  );
}

export default Series;
