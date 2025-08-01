// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// // const inputNumber: number = +fs.readFileSync("./dev/stdin").toString().trim();

// // const int = (n: number) => Math.floor(n);

// const numList: bigint[] = inputList[1].split(" ").map(BigInt);
// const opList: number[] = inputList[2].split(" ").map(Number);
// let max = BigInt(Number.MIN_SAFE_INTEGER);
// let min = BigInt(Number.MAX_SAFE_INTEGER);
// const dfs = (n: number, opList: number[], result: bigint) => {
//   if (n == numList.length - 1) {
//     if (max < result) max = result;
//     if (min > result) min = result;
//     return;
//   }
//   for (let i = 0; i < 4; i++)
//     if (opList[i] !== 0) {
//       opList[i]--;
//       if (i == 0) dfs(n + 1, opList, result + numList[n + 1]);
//       else if (i == 1) dfs(n + 1, opList, result - numList[n + 1]);
//       else if (i == 2) dfs(n + 1, opList, result * numList[n + 1]);
//       else if (i == 3) dfs(n + 1, opList, BigInt((result / numList[n + 1]).toString().split(".")[0]));
//       opList[i]++;
//     }
// };
// dfs(0, opList, numList[0]);
// console.log(max + "\n" + min);
