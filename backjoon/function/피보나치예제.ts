// const fib = (n: number): number => {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// };

// dp로 피보나치
// const fs = require("fs");
// // const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();
// const map = new Map();
// map.set(0, 0);
// map.set(1, 1);
// map.set(2, 2);

// for (let i = 3; i <= inputN; i++) map.set(i, (map.get(i - 1) + map.get(i - 2)) % 15746);

// console.log(map.get(inputN));

// map보다 배열로하면 더 빠름!
// const fs = require("fs");
// // const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();

// const dp: number[] = [];
// dp[0] = 0;
// dp[1] = 1;
// dp[2] = 2;
// for (let i = 3; i <= inputN; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
// console.log(dp[inputN]);
