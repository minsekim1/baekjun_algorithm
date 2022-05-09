// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// // const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();

// const dp: number[] = [];
// dp[0] = 0;
// dp[1] = 1;
// dp[2] = 1;
// dp[3] = 1;
// dp[4] = 2;
// dp[5] = 2;
// dp[6] = 3;
// dp[7] = 4;
// dp[8] = 5;
// dp[9] = 7;
// dp[10] = 9;
// let max = 100;
// for (let i = 11; i <= max; i++) dp[i] = dp[i - 1] + dp[i - 5];

// let result = "";
// inputList.slice(1).map((item) => {
//   const n = Number(item);
//   result += dp[n] + "\n";
// });

// console.log(result.trimEnd());
