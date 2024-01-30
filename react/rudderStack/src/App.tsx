//import "./global.css"
import "./index.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { MovieType, movies } from "./mock/movies";
import Movie from "./components/Movie";
import { tags } from "./mock/tags";
import Tag from "./components/Tag";
import { useEffect, useState } from "react";
import { debounce } from "./utils/debounce";

function App() {
  const [moviesArr, setMoviesArray] = useState<MovieType[]>(movies);
  // const [moviesArr, setMoviesArray] = useState<Array<MovieType>>(movies);

  const [searchText, setSearchText] = useState("");
  const [searchTag, setSearchTag] = useState("");

  const handleFindMovies = () => {
    const filteredMovies = findMovie(searchText);
    setMoviesArray(filteredMovies);
  };

  const findMovie = (query: string): any => {
    if (!query) return [...movies];
    const filtetMoviesArr = moviesArr.filter((movie) => query === movie.tag);
    if (filtetMoviesArr.length === 0) {
      return [...movies];
    } else {
      return [...filtetMoviesArr];
    }
  };

  //const debouncedOnChange = debounce(onChange, 500);

  useEffect(() => {
    const fn = debounce(findMovie, 600);
    console.log("🚀 ~ useEffect ~ fn:", fn(searchText));

    setMoviesArray(fn(searchText) ?? [...movies]);
  }, [searchText]);

  //tags
  useEffect(() => {
    if (!searchTag) return;
    const filtetMoviesArr = moviesArr.filter(
      (movie) => searchTag === movie.tag
    );
    if (filtetMoviesArr.length === 0) {
      setMoviesArray([...movies]);
    } else {
      setMoviesArray([...filtetMoviesArr]);
    }
  }, [searchTag]);

  //const findMovies = () => {};

  return (
    <div className="bg-black flex flex-col">
      <h1 className="text-4xl text-white flex justify-center py-10">
        Ready to Chill?
      </h1>
      <div className="flex flex-grow mx-8 gap-4 items-center">
        <Input setSearchText={setSearchText} />
        <Button setOnClick={handleFindMovies}>Find Movies</Button>
      </div>
      {/* tags */}
      <div className="flex justify-start flex-wrap gap-5 py-10 px-8">
        {tags.map((t: string) => (
          <Tag setSearchTag={setSearchTag} tag={t} key={t} />
        ))}
      </div>

      {/* movies */}
      <div className="flex justify-center	flex-wrap gap-5">
        {moviesArr.map((m: MovieType) => (
          <Movie movie={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}
export default App;
