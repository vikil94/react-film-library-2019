import React, { useState } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';


const FilmListing = () => {

    const filmList = TMDB.films.map((film) => {
        return (
            <FilmRow film={film} key={film.id} />

        )
    })

    const [filter, setFilter] = useState('all');
    const filterClass = (filter === 'all' ? 'faves' : 'all')

    const handleFilterClick = (filter) => {
        console.log(`Setting filter to ${filter}`)
        setFilter(filter)
        console.log(filterClass)

    }


    return (
        <div className="film-list">
            <h1 className="section-title">
                FILMS
            </h1>

            <div className={`film-list-filters ${filterClass}`}>
                <div className="film-list-filter" onClick={() => handleFilterClick('all')}>
                    ALL
                        <span className="section-count">{filmList.length}</span>
                </div>
                <div className="film-list-filter" onClick={() => handleFilterClick('fave')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
            {filmList}
        </div>

    )
}

export default FilmListing;