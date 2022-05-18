// 부모를 찾는 함수
const getParent = (parent: number[], n: number): number => {
  if (parent[n] == n) return n;
  return getParent(parent, parent[n]);
};
// 노드를 연결하는 함수
const unionParent = (parent: number[], n1: number, n2: number) => {
  //parent[index] = getParent(parent, n);
  n1 = getParent(parent, n1);
  n2 = getParent(parent, n2);
  if (n1 < n2) parent[n2] = n1;
  else parent[n1] = n2;
};
// 부모를 비교하는 함수
const findParent = (parent: number[], n1: number, n2: number) => {
  console.log(getParent(parent, n1), getParent(parent, n2));

  return getParent(parent, n1) == getParent(parent, n2);
};

const list = [0, 1, 2, 3, 4, 5, 6];

console.log("1과 2는 연결되어있나요?", findParent(list, 2, 3));
unionParent(list, 3, 2);
console.log("1과 2는 연결되어있나요?", findParent(list, 2, 3));
console.log(list);
