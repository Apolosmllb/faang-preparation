import "./App.css";
import { useQuery } from "@tanstack/react-query";
import {
  //getRandomNumberFromApi,
  getRandomNumberFromAxios,
} from "./fetchRamdom";

export const App = () => {
  const ramdomQuery = useQuery({
    queryKey: ["ramdomNumber"],
    queryFn: getRandomNumberFromAxios,
    retry: 1,
  });

  
  console.log("🚀 ~ file: App.tsx:14 ~ App ~ ramdomQuery:", ramdomQuery);
  //   // Mutations
  //   const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries({ queryKey: ["todos"] });
  //     },
  //   });

  return (
    <>
      <div>
        <h2>Ramdon Number</h2>
        {ramdomQuery.isFetching ? (
          <h5>Loading...</h5>
        ) : ramdomQuery.error ? (
          <h6>{ramdomQuery.error.message}</h6>
        ) : (
          <h2>{ramdomQuery.data}</h2>
        )}

        <button
          onClick={() => ramdomQuery.refetch()}
          disabled={ramdomQuery.isFetching}
        >
          New Number
        </button>
      </div>
    </>
  );
};

export default App;
