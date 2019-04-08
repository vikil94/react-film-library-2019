import React from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'


const FilmListing = ({film}) => {

    const filmList = TMDB.films.map((film) => {
     return (
       <FilmRow film={film} key={film.id} />
        );
    })

    return (
  <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {filmList}
        </div>
  </div>      
    );
};

export default FilmListing;