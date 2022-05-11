const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();

const dp: number[] = [];

let idx = 1;
for (let i = 0; i < inputN; i++){
  dp[i] = idx;
}