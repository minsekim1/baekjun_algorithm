const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();

const dp: number[] = inputList.slice(1).map(Number);
const stair: number[] = new Array(...dp);

dp.map((item, i) => (i < 3 ? null : (dp[i] = Math.max(dp[i - 2] + stair[i], stair[i - 1] + stair[i] + dp[i - 3]))));

console.log(dp, stair);
