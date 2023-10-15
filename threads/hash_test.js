import cryto from "crypto";
import { Worker } from "worker_threads";
// const hash = (input) =>
//   new Promise((resolve, _) => {
//     const start = Date.now();
//     for (let i = 0; i < 50000; i++) {
//       input = cryto.createHash("sha256").update(input).digest("hex");
//       console.log(`hashing done in ${Date.now() - start} ms`);
//       resolve(input);
//     }
//   });

const doHash = (hashInput) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const worker = new Worker("./threads/crypt.js", {
      workerData: { hashInput },
    });

    worker.once("message", (result) => {
      console.log(
        `Worker [${worker.threadId}] done in ${Date.now() - start} ms`
      );
      resolve(result);
    });
    worker.once("error", (err) => reject(err));
  });
};

export const main = async () => {
  const start = Date.now();

  const hashes = await Promise.all([
    doHash("Hash this text 50k times!"),
    doHash("Hash this text 50k times!"),
    doHash("Hash this text 50k times!"),
    doHash("Hash this text 50k times!"),
    doHash("Hash this text 50k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
  ]);

  console.log(`Main done in ${Date.now() - start} ms`);
  return hashes;
};
