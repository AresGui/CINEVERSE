const key = 'af929f85de6377607702be056fc0ba2e';

const series = {
    airingToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
    onTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
    popular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
};

export default series;




