// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// 계수정렬은 음수에는 적용 못한다.

// function countingSort(array: number[]) {
//   const max = Math.max(...array);
//   const count = new Array(max + 1).fill(0);
//   const result: number[] = [];
//   array.forEach((val) => count[val]++);
//   // 누적합을 구합니다.
//   for (let i = 0; i < max; i++) count[i + 1] += count[i];
//   array.forEach((val) => {
//     // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를  집어넣습니다.
//     result[count[val] - 1] = val;
//     count[val]--;
//   });
//   return result;
// }
// console.log(inputList.slice(1).map(Number));
