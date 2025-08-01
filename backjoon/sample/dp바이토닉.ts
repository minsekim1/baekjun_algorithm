// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const input = inputList[1].split(" ").map(Number);
// const dp: number[] = [];
// const rdp: number[] = [];
// if (input.length == 0) console.log(0);
// else if (input.length == 1) console.log(1);
// else if (input.length == 2) console.log(2);
// else {
//   if (input.length > 0) {
//     dp[0] = 1;
//   }
//   for (let i = 1; i < input.length; i++) {
//     const dpList = dp.filter((item, j) => input[j] < input[i]);
//     dp[i] = (dpList.length == 0 ? 0 : Math.max(...dpList)) + 1;
//   }
//   for (let i = input.length - 1; i >= 0; i--) {
//     const dpList = rdp.filter((item, j) => input[j] < input[i]);
//     rdp[i] = (dpList.length == 0 ? 0 : Math.max(...dpList)) + 1;
//     // console.log(rdp[i], i, dpList);
//   }
//   let result = 0;
//   for (let i = 0; i <= input.length; i++) {
//     if (result < dp[i] + rdp[i] - 1) result = dp[i] + rdp[i] - 1;
//   }

//   // console.log(Math.max(...dp));
//   // console.log(dp, rdp, result);
//   console.log(result);
// }
