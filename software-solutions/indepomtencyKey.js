//cd software-solutions node --watch indepomtencyKey.js
import crypto from "crypto";

// const indempotencykey = crypto.randomUUID();
const indempotencykey = "24a7486f-09cf-4a46-b4ae-104a32402f60";
const payload = {
  userId: 10,
  id: 214,
  title: "consequuntur aut ut fugit similique",
  completed: false,
};

const maketRequest = async () => {
  const response = {
    error: null,
    response: null,
  };

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({ ...payload }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Idempotency-Key": indempotencykey,
      },
    });
    response.response = await res.json();
  } catch (err) {
    response.error = err.message;
  }

  return { ...response };
};

let result;

let shoulRetry = true;
let i = 0;

while (shoulRetry && i < 10) {
  const { error, response } = await maketRequest();
  console.log("res :", response, "error :", error);

  if (error) {
    shoulRetry = shoulRetry(response);

    if (shoulRetry) {
      // exponential back-off
    }
  } else {

    shoulRetry = false;
    result = response;
  }
  i++;
}
