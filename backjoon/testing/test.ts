const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
// const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputNumber: number = +fs.readFileSync("./dev/stdin").toString().trim();

const set: Set<string> = new Set();
inputList.map((item) => {
  //영어 대소문자만 있는경우
  if (item.match(/[A-Z]/gi)) set.add(item);
});
const list: string[] = [];
set.forEach((item) => list.push(item));

console.log(
  list.sort((a, b) => (a.length != b.length ? (a.length > b.length ? 1 : -1) : b.localeCompare(a))).join("\n")
);
// console.log(list);
