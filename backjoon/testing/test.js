const fs = require("fs");
const inputList = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const size = Number(inputList[0].split(" ")[0]);
const list = Array.from({ length: size + 1 }).map((item, i) => i);

const getParent = (list, n) => {
  if (list[n] == n) return n;
  return (list[n] = getParent(list, list[n]));
};
const unionParent = (list, n1, n2) => {
  const n3 = getParent(list, n1);
  const n4 = getParent(list, n2);
  if (n3 < n4) list[n4] = n3;
  else list[n3] = n4;
};
const findParent = (list, n1, n2) => {
  return getParent(list, n1) === getParent(list, n2);
};

let result = "";
inputList.slice(1).map((item) => {
  const [isAnswer, n1, n2] = item.split(" ").map(Number);
  if (isAnswer) result += findParent(list, n1, n2) ? "YES\n" : "NO\n";
  else unionParent(list, n1, n2);
});

console.log(result.trimEnd());
