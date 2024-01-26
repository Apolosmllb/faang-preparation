import "./App.css";
import { useState } from "react";
import responseMovies from "./mocks/res.json";
import withouResult from "./mocks/no-result.json";
import { resMovie } from "./types/movie";
import { Movie } from "./movie";

function App() {
  const movies = responseMovies?.Search;
  const hasMovies = movies.length > 0;
  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form aria-aria-label="This for is used for serch movies">
          <input type="text" placeholder="Star Wars, avengers ..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <Movie movies={movies} />
        ) : (
          <div className="empty">
            <h2>No results found</h2>
            <p>Try different keywords</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
