import express from "express";
import { threadsService } from "../threads/multi-threads.js";
import { main } from "../threads/hash_test.js";

const app = express();

app.get("/", async function (req, res) {
  const result = await main();
  res.status(200).json(result);

  //res.send("Hello World");
});

app.listen(3000);
