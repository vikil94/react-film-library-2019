import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';


const App = () => {
  return (
    <main className="film-library">
      <FilmListing  />
      <FilmDetails  />
    </main>
  );
}

export default App;
