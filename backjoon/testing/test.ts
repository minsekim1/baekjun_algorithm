const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let map = new Map();

const getParent = (n: string): string => {
  if (n === map.get(n)) return n;
  const p = getParent(map.get(n));
  map.set(n, p);
  return p;
};

const unionParent = (n1: string, n2: string) => {
  const n11 = getParent(n1);
  // const n22 = getParent(n2);
  map.set(n2, n11);
};

const equalParent = (n1: string, n2: string) => getParent(n1) === getParent(n2);

let result = "";
inputList.map((item) => {
  if (item.indexOf(" ") === -1) {
    map = new Map();
    return;
  }
  const [n1, n2] = item.split(" ");
  let count = 0;
  unionParent(n1, n2);
  map.forEach((v, k) => {
    if (equalParent(v, n2)) count++;
  });
  result += count + "\n";
});
console.log(result.trimEnd());
