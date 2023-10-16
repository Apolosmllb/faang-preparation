// Una transaction es duplicada, si tiene el mismo sourceAccount, targetAccount, category, amount y el tiempo es menor a 1 minuto de diferencia.

// Hacer una funcionalidad que agrupe las transaccciones duplicadas
// en una lista.

// Ejemplo:

// const exampleOutput = [
//   [
//     {
//       id: 1,
//       sourceAccount: "A",
//       targetAccount: "B",
//       amount: 100,
//       category: "eating_out",
//       time: "2018-03-02T10:33:00.000Z",
//     },
//     {
//       id: 2,
//       sourceAccount: "A",
//       targetAccount: "B",
//       amount: 100,
//       category: "eating_out",
//       time: "2018-03-02T10:33:50.000Z",
//     },
//     {
//       id: 3,
//       sourceAccount: "A",
//       targetAccount: "B",
//       amount: 100,
//       category: "eating_out",
//       time: "2018-03-02T10:34:30.000Z",
//     },
//   ],
//   [
//     {
//       id: 5,
//       sourceAccount: "A",
//       targetAccount: "C",
//       amount: 250,
//       category: "other",
//       time: "2018-03-02T10:33:00.000Z",
//     },
//     {
//       id: 6,
//       sourceAccount: "A",
//       targetAccount: "C",
//       amount: 250,
//       category: "other",
//       time: "2018-03-02T10:33:05.000Z",
//     },
//   ],
// ];

const transactions = [
  {
    id: 3,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:34:30.000Z",
  },
  {
    id: 1,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:00.000Z",
  },
  {
    id: 6,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:05.000Z",
  },
  {
    id: 4,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:36:00.000Z",
  },
  {
    id: 2,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:50.000Z",
  },
  {
    id: 5,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:00.000Z",
  },
];

const isValidTime = (time_1, time_2) => {
  const secondsDiff =
    (new Date(time_1).getTime() - new Date(time_2).getTime()) / 1000;

  return Math.abs(secondsDiff) < 60;
};

const isDuplicate = (o1 = {}, o2 = {}) => {
  if (!isValidTime(o1.time, o2.time)) return false;

  const ob_keys = Object.keys(o1).filter(
    (key) => key !== "id" && key !== "time"
  );

  for (let i = 0; i < ob_keys.length; i++) {
    if (o1[ob_keys[i]] !== o2[ob_keys[i]]) return false;
  }

  return true;
};

const sortTransactions = (transactions) => {
  if (!Array.isArray(transactions)) {
    throw new Error("no array given");
  }
  return [...transactions].sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );
};

const groupTransactions = (transactions) => {
  const transactions_sorted = sortTransactions(transactions);
  const res = {};
  transactions_sorted.forEach((transac) => {
    const { sourceAccount, targetAccount, amount, category } = transac;
    const key = `${sourceAccount}-${targetAccount}-${amount}-${category}`;

    if (res[key]) {
      const lastPos = res[key].length - 1;
      if (isDuplicate(res[key][lastPos], transac)) {
        res[key].push(transac);
      }
    } else {
      res[key] = [transac];
    }
  });

  return Object.values(res);
};

const group_transactions = groupTransactions(transactions);

console.log(group_transactions);
