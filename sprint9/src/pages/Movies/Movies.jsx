import React from 'react'
import Row from '../Home/Row'
import SecondaryNavBar from '../../navigation/components/SecondaryNavBar/SecondaryNavBar';
import requests from '../../services/Requests';

function Movies() {

  return (
    <>
      <SecondaryNavBar />
      <Row title='Popular' fetchURL={requests.requestPopular} />
      <Row title='Top rated' fetchURL={requests.requestTopRated} />
      <Row title='Trending' fetchURL={requests.requestTrending} />
      <Row title='Horror' fetchURL={requests.requestHorror} />
      <Row title='Up coming' fetchURL={requests.requestUpcoming} />
    </>
  )
}


export default Movies
