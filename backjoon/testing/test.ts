const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputN: number = +fs.readFileSync("./dev/stdin").toString().trim();

const input = inputList.slice(2).map((item) => item.split(" ").map(Number));
let resultList: number[] = [Number(inputList[1][0])];
input.map((row, i) => {
  const temp: number[] = [];
  row.map((item, j) => {
    if (j == resultList.length) temp[j] = resultList[resultList.length - 1] + item;
    else if (j == 0) temp[j] = resultList[j] + item;
    else temp[j] = Math.max(resultList[j - 1], resultList[j]) + item;
  });
  resultList = temp;
  // console.log(temp.join(" "));
});
console.log(Math.max(...resultList));
