import React, { useState } from 'react'
import WatchedListBox from './WatchedListBox';
import MovieListBox from './MovieListBox';


const MainContent = ({movies, setMovies}) => {
  return (
    <main className="main">
      <MovieListBox movies={movies} setMovies={setMovies} />
      <WatchedListBox movies={movies} setMovies={setMovies} />
    </main>
  )
}

export default MainContent