// this is a initial test for multi-threads in node.js
import { Queue } from "./../data-structure/queque.js";
import os from "os";
//import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
const MILLON = 100000000;

export function threadsService() {
  return "Número de núcleos de la CPU: " + os.cpus().length;
  // if (isMainThread) {
  //   const worker = new Worker("./threads/test_threads.js", {
  //     workerData: "hello",
  //   });
  //   worker.on("message", (msg) =>
  //     console.log(`Worker message received: ${msg}`)
  //   );
  //   worker.on("error", (err) => console.error(err));
  //   worker.on("exit", (code) =>
  //     console.log(`Worker exited with code ${code}.`)
  //   );
  // } else {
  //   const data = workerData;
  //   parentPort.postMessage(`You said \"${data}\".`);
  // }
}
