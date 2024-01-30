export default function Input({ setSearchText }: { setSearchText: any }) {
  //const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="input__container flex-grow w-[80%]">
      <input
        onChange={handleChange}
        className="bg-[#cccccc] rounded-lg py-2.5 px-6 w-full"
        placeholder="Tipea el título acá"
      ></input>
    </div>
  );
}
