// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString();

// let count = Number(inputList[0]);
// inputList.shift();
// let max = Number.MIN_SAFE_INTEGER;
// let min = Number.MAX_SAFE_INTEGER;
// let sum = 0;
// const map = new Map();

// const list = inputList
//   .map((item) => {
//     const n = Number(item);
//     sum += n;
//     if (n > max) max = n;
//     if (n < min) min = n;
//     return n;
//   })
//   .sort((a, b) => a - b);
// list.map((item) => {
//   const n = Number(item);
//   let count = map.get(n);
//   if (count) map.set(n, count + 1);
//   else map.set(n, 1);
// });

// const middle =
//   count % 2 === 1 ? list[Math.floor(count / 2)] : (list[Math.floor(count / 2) - 1] + list[Math.floor(count / 2)]) / 2;

// let freNum = Number.MIN_SAFE_INTEGER;
// let freCount = -1;
// let isDup = false;
// map.forEach((v, k) => {
//   if (freCount < v) {
//     freCount = v;
//     freNum = k;
//     isDup = false;
//   } else if (freCount == v && !isDup) {
//     freNum = k;
//     isDup = true;
//   }
// });

// console.log(`${Math.round(sum / count)}\n${middle}\n${freNum}\n${max - min}`);
