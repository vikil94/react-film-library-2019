import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = ({ film }) => {

    const handleDetailsClick = () => {
        console.log(`Film details for ${film.title}`)
    }

    return (
        <article className='film-row'>
            <FilmPoster film={film} />
            <div className='film-summary' onClick={handleDetailsClick}>
                <h1>{film.title}</h1>
                <p>{new Date(film.release_date).getFullYear()}</p>
                <Fave />
            </div>
        </article>
    )
}

export default FilmRow;