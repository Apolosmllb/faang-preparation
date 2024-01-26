"use client";
import { useRouter } from "next/navigation";

type movie = {
  id: number;
  title: string;
  description: string;
};

export default function Movies() {
  const router = useRouter();
  const movies: movie[] = [
    {
      id: 1,
      title: "The Godfather",
      description: "The aging patriarch of an reluctant son.",
    },
    {
      id: 2,
      title: "The Godfather 2",
      description: "The aging patriarch of an reluctant son.",
    },
  ];

  const handleClick = (movie: movie) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <div>
      <h1>Bobbies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <button
              className="bg-orange-300 rounded-md"
              onClick={() => handleClick(movie)}
            >
              seleccionar
            </button>
            <br></br>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}
