map.forEach((v, k) => console.log(v)); //=> value를 출력!
map.forEach((v, k) => console.log(k)); //=> key를 출력!

// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString();

// const n1 = Number(inputList[0]);
// const n2 = Number(inputList[1]);
// const n3 = Number(inputList[2]);
// const result = String(n1 * n2 * n3);

// const map = new Map();
// for (let i = 0; i < 43; i++) {
//   map.set(i, 0);
// }
// Array.from(result).map((item) => {
//   const n = Number(item);
//   const before = map.get(n);
//   map.set(n, before + 1);
// });

// map.forEach((v, k) => console.log(v));
