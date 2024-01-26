export default function Movie({ params }: { params: { id: string } }) {
  console.log("🚀 ~ Movie ~ movieId:", params);

  return <div>My Post: {params.id}</div>;
}
