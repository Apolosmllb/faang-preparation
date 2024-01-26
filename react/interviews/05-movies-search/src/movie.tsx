import { resMovie } from "./types/resMovie";
export function Movie({ movies }: { movies: resMovie[] }) {
  return (
    <ul className="movies">
      {movies.map((movie: resMovie) => (
        <li key={movie.imdbID}>
          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <span>{movie.Year}</span>
          </div>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}
