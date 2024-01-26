export default function Movie({ params }: { params: { movieId: string } }) {
  return <div>Mi pelicula: {params.movieId}</div>;
}
