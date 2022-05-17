const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const input: number = +fs.readFileSync("./dev/stdin").toString().trim();

const list: number[] = Array.from({ length: Number(inputList[0]) + 1 }).map((item, i) => i);
const getParent = (n: number): number => {
  if (list[n] == n) return n;
  return (list[n] = getParent(list[n]));
};

const unionParent = (n1: number, n2: number) => {
  const a = getParent(n1);
  const b = getParent(n2);
  if (a > b) list[a] = b;
  else list[b] = a;
};
const findParent = (n1: number, n2: number): boolean => {
  return getParent(n1) === getParent(n2);
};

let isPass = true;
const distance = Number(inputList[1]);
inputList.slice(2).map((item, i) => {
  if (i == list.length - 1) {
    const list = item.split(" ");
    for (let i = 0; i < distance - 1; i++) {
      if (!findParent(Number(list[i]), Number(list[i + 1]))) {
        isPass = false;
        break;
      }
    }
  } else
    item.split(" ").map((item, j) => {
      if (Number(item) === 1) unionParent(i + 1, j + 1);
    });
});
console.log(list);

console.log(isPass ? "YES" : "NO");
