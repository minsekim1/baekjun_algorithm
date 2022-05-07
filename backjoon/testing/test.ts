const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
const inputNumber: number = +fs.readFileSync("./dev/stdin").toString().trim();

const list: number[] = [];
// // 조합 : 중복없이 모든 경우. [4,3] 이랑 [3,4]랑 같음.
// const getCombinations = (arr: number[], num: number) => {
//   const results: number[][] = [];
//   // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
//   if (num === 1) return arr.map((v) => [v]);
//   arr.forEach((fixed, index, origin) => {
//     // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
//     const rest = origin.slice(index + 1);
//     // 나머지 배열을 기준으로 다시 조합을 실시한다.
//     // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//     const combinations = getCombinations(rest, num - 1);
//     // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
//     const attached = combinations.map((v) => [fixed, ...v]);
//     // 붙인 값을 결과 값에 넣어준다.
//     results.push(...attached);
//   });
//   return results;
// };

// // 순열 : 중복없이 모든 경우. [4,3] 이랑 [3,4]랑 다름.
// const getPermutations = (arr: number[], num: number) => {
//   const results: number[][] = [];
//   // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
//   if (num === 1) return arr.map((v) => [v]);
//   arr.forEach((fixed, index, origin) => {
//     // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     // 나머지 배열을 기준으로 다시 순열을 구한다.
//     // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//     const permutations = getPermutations(rest, num - 1);
//     // 기준값(fixed)에 순열(permutations)을 붙인다.
//     const attached = permutations.map((v) => [fixed, ...v]);
//     // 붙인 값을 결과 값에 넣어준다.
//     results.push(...attached);
//   });
//   return results;
// };

// 중복순열 : 중복포함 모든 경우. [4,3] 이랑 [3,4]랑 다름.
// const getPermutationsDup = (arr: number[], num: number) => {
//   const results: number[][] = [];
//   if (num === 1) return arr.map((v) => [v]);
//   arr.forEach((fixed, index, origin) => {
//     // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//     const permutations = getPermutationsDup(origin, num - 1);
//     // 기준값(fixed)에 순열(permutations)을 붙인다.
//     const attached = permutations.map((v) => [fixed, ...v]);
//     // 붙인 값을 결과 값에 넣어준다.
//     results.push(...attached);
//   });
//   return results;
// };
let start = +new Date();
let ANSWER = 0;
const size = inputNumber * inputNumber;
const nQueen = (prefix: number[], row: number) => {
  console.log(prefix.join(" ") + "\n");
  if (inputNumber === row) ANSWER++; //End Condition
  else
    for (let i = 0; i < inputNumber; i++) {
      //Continue Condition
      if (!prefix.includes(row * i)) {
        prefix.push(row * i);
        for (let col = 0; col + i < inputNumber && row + col < inputNumber; col++)
          if (!prefix.includes((row + col) * (i + col))) prefix.push((row + col) * (i + col));
        for (let col = 0; row + col < inputNumber && i - col < inputNumber; col++)
          if (!prefix.includes((row + col) * (i - col))) prefix.push((row + col) * (i - col));
        for (let col = 0; row + col < inputNumber; col++)
          if (!prefix.includes((row + col) * i)) prefix.push((row + col) * i);
        nQueen(prefix, row + 1);
        prefix.pop();
      }
    }
};
nQueen(list, 0);
let end = +new Date();
console.log(ANSWER);
console.log(end - start);
