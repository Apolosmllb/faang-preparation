const directory = [
  { name: "manuel", age: 23, id: 1 },
  { name: "marcos", age: 19, id: 2 },
  { name: "apolos", age: 19, id: 3 },
];

const registration = [
  { name: "apolos", email: "apolos@gmail.com", id: 1 },
  { name: "marcos", email: "marcos@gmail.com", id: 2 },
  { name: "manuel", email: "manuel@gmail.com", id: 3, available: true },
];

const joinArrays = (arr1, arr2, key = "name") => {
  const hash_map = new Map();
  const res = [];

  for (item of arr1) {
    if (!hash_map.has(item[key])) hash_map.set(item[key], item);
  }

  for (item of arr2) {
    if (hash_map.has(item[key]))
      res.push({ ...hash_map.get(item[key]), ...item });
  }

  return res;
};

console.log(joinArrays(directory, registration, "name"));
