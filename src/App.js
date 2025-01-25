
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import { useState } from "react";
import tempMovieData from './tempMovieData.json';
export default function App() {
  const [movies, setMovies] = useState(tempMovieData || []);

  return (
    <>
      <NavBar movies={movies} setMovies={setMovies} />
      <MainContent movies={movies} setMovies={setMovies} />
    </>
  );
}
