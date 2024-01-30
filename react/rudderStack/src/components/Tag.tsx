export default function Tag({
  tag,
  setSearchTag,
}: {
  tag: string;
  setSearchTag: any;
}) {
  const handleClick = () => {
    setSearchTag(tag);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-700 w-28 h-7 rounded-md text-gray-100 text-center truncate"
    >
      <p>{tag}</p>
    </button>
  );
}
