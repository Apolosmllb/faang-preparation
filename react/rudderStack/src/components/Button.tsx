export default function Button({
  children,
  setOnClick
}: {
  children: React.ReactNode;
  setOnClick: () => any;
}) {
  const handleOnClick = () => {
    setOnClick(); // Llamar a la función sin pasar argumentos
  };
  return (
    <div className="button__container flex-grow">
      <button className="bg-red-600 px-4 py-3 text-sm rounded-md w-full text-white" onClick={handleOnClick}>
        {children}
      </button>
    </div>
  );
}
