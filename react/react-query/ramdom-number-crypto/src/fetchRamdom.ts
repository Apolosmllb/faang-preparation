import axios from "axios";
export const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=5000&col=1&base=10&format=plain&rnd=new"
  );
  const number = await res.text();

  return +number;
};

export const getRandomNumberFromAxios = async (): Promise<number> => {
  const res = await axios.get(
    "https://www.random.org/integers/?num=1&min=1&max=5000&col=1&base=10&format=plain&rnd=new"
  );
  return res.data;
};
