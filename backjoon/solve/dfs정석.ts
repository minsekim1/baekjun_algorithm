// const fs = require("fs");
// let [M, N] = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((x) => +x);
// let result = "";
// let arr = [];
// let checkedArr = new Array(M).fill(false);

// let dfs = (length) => {
//   if (length === N) {
//     result += arr.join(" ") + "\n";
//     return;
//   }
//   for (var i = 0; i < M; i++) {
//     if (checkedArr[i]) continue;
//     checkedArr[i] = true;
//     arr.push(i + 1);
//     dfs(length + 1);
//     arr.pop();
//     checkedArr[i] = false;
//   }
//   return result;
// };

// console.log(dfs(0).trim());
