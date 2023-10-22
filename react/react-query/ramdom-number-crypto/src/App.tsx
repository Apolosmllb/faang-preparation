import "./App.css";
import { useRandom } from "./useRamdom";

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
export const App = () => {
  //const [count, setCount] = useState(0);
  const { loading, data, error } = useRandom();

  return (
    <>
      <div>
        <h2>Ramdon Number</h2>
        {loading ? <h2>Loading...</h2> : <h2>{data}</h2>}
        {!loading && error && <h2>{error}</h2>}
      </div>
    </>
  );
};

export default App;
