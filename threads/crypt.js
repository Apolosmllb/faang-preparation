import { workerData, parentPort } from "worker_threads";
import crypto from "crypto";

const hash = (hashInput) => {
  for (let i = 0; i < 500000; i++) {
    hashInput = crypto.createHash("sha256").update(hashInput).digest("hex");
  }
  return hashInput;
};

const result = hash(workerData.hashInput);

parentPort.postMessage(result);
