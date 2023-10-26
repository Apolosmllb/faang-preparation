export function Item({
  id,
  name,
  handleRemove,
}: {
  id: string;
  name: string;
  handleRemove: () => void;
}) {
  return (
    <li key={id}>
      {name}
      <button onClick={handleRemove}>⛔</button>
    </li>
  );
}
