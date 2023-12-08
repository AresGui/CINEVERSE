import React from 'react'
import SecondaryNavBar from '../../navigation/components/SecondaryNavBar/SecondaryNavBar';
import SeriesRow from '../Home/SeriesRow';
import series from '../../services/SeriesRequests';

function Series() {
  return (
    <div>
      <SecondaryNavBar />
      <SeriesRow title='Airing today' fetchURL={series.airingToday} />
      <SeriesRow title='On the air' fetchURL={series.onTheAir} />
      <SeriesRow title='Popular' fetchURL={series.popular} />
      <SeriesRow title='Top rated' fetchURL={series.topRated} />
    </div>
  )
}

export default Series;
