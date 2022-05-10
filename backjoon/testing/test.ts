const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();

const dp: number[][] = [[Number(inputList[0][0])]];
const input = inputList.slice(2).map((item) => item.split(" ").map(Number));

input.map((item, i) => {
  console.log(item);

  // item.map((item, j) => {
  //   dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j + 1]);
  // });
});

console.log(dp);
