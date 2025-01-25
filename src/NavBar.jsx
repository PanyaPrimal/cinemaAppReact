import React from 'react'
import { useState } from "react";
const NavBar = ({ movies, setMovies }) => {
  const [query, setQuery] = useState("");




  const Logo = () => {
    return (
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    )
  }

  const Search = () => {
    return (
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    )
  }

  const NumResult = () => {
    return(
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    )
  }

  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  )
}

export default NavBar