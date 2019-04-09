

import React from 'react';

const FilmPoster = ({ film }) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title} />
    )
}

export default FilmPoster;