import { Queue } from "./queque.js";

// console.time("test-0");
// const queque = new Queue([1, 2, 3, 4, 5]);
// console.timeEnd("test-0");

// console.time("test-1");
// console.log(queque.enqueue(4));
// console.timeEnd("test-1");

// console.time("test-1");
// console.log(queque.dequeue());
// console.timeEnd("test-1");

// console.time("test-4");
// console.log(queque.toArray());
// console.timeEnd("test-4");

// const arr = [1, 2, 3, 4, 5];
// arr.pop()
// console.log(arr);

// console.time("test-4");
// for (let i = 0 ; i < 100000000; i++){
//     arr.push(i)
// }
// console.timeEnd("test-4");

// console.time("test-6");
// for (let i = 0 ; i < 100000000; i++){
//     queque.push(i)
// }
// console.timeEnd("test-6");

// console.time("test-5");
// console.log(queque.toArray());
// console.timeEnd("test-5");



const ips = []
function getRandomIP() {
    const random = () => Math.floor(Math.random() * 255);
    return `${random()}.${random()}.${random()}.${random()}`;
}
for (let i = 0;  i<5 ; i++){
    ips.push(getRandomIP())
}
const recentIPsQueue =  Queue.fromArray(ips);

console.log(recentIPsQueue.toArray()); 
function addRecentIP(ip) {
  recentIPsQueue.enqueue(ip);
  if (recentIPsQueue.size() > 5) {
    recentIPsQueue.dequeue();
  }
}


addRecentIP('192.168.0.1');
addRecentIP('192.168.0.2');

console.log(recentIPsQueue.toArray()); 
