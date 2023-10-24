import { useEffect, useState } from "react";

export type RandomFetchResponse = {
  data: number | undefined;
  error: string | null;
  isloading: boolean;
};

export const ERRORS = {
  "0001": "El cliente no tiene una subscripción activa",
  "0002": "El cliente necesita una cachetada",
  "0003": "El cliente no tiene una mesita de noche",
};

export const useRandom = (reTryKey: any): RandomFetchResponse => {
  const [result, setResult] = useState<RandomFetchResponse>({
    data: undefined,
    error: null,
    isloading: false,
  });

  useEffect(() => {
    setResult({ ...result, isloading: true });
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.random.org/integers/?num=1&min=1&max=5000&col=1&base=10&format=plain&rnd=new"
        );
        const data = await res.json();
        setResult({ ...result, data: data, isloading: false });
        //throw new Error("0001");
      } catch (err: Error | any) {
        let errMessage =
          ERRORS[err.message as keyof typeof ERRORS] ?? "Something went wrong";

        setResult({ ...result, error: errMessage, isloading: false });
      }
    };
    fetchData();
  }, [reTryKey]);

  return result;
};
