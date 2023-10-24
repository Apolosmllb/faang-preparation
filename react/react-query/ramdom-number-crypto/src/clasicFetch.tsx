import "./App.css";
import { useReducer } from "react";
import { useRandom } from "./useRamdom";

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
export const App = () => {
  //const [count, setCount] = useState(0);
  const [reTryKey, retryFetch] = useReducer((x) => x + 1, 0);
  const { isloading, data, error } = useRandom(reTryKey);

  return (
    <>
      <div>
        <h2>Ramdon Number</h2>
        {isloading ? (
          <h5>Loading...</h5>
        ) : error ? (
          <h6>{error}</h6>
        ) : (
          <h2>{data}</h2>
        )}

        <button onClick={retryFetch} disabled={isloading}>
          New Number
        </button>
      </div>
    </>
  );
};

export default App;
