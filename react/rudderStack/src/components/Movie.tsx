import { MovieType } from "../mock/movies";

export default function Movie({ movie }: { movie: MovieType }) {
  return (
    <div className="w-72 p-4 bg-slate-50 rounded-lg">
      <img className="rounded-lg" src={movie.URL} alt={movie.title} />
      <h6 className="text-center">{movie.title}</h6>
    </div>
  );
}
