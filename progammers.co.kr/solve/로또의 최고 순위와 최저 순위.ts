// // 로또의 최고 순위와 최저 순위

// type caseProps = { lottos: number[]; win_nums: number[] };
// const testCase: caseProps = {
//   lottos: [45, 4, 35, 20, 3, 9],
//   win_nums: [20, 9, 3, 45, 4, 35],
// };

// function solution(lottos: caseProps["lottos"], win_nums: caseProps["win_nums"]) {
//   let zeroCount = 0;
//   let successCount = 0;
//   lottos.map((item) => {
//     if (item === 0) zeroCount++;
//     else if (win_nums.includes(item)) successCount++;
//   });

//   return [Math.min(7 - Math.min(successCount + zeroCount, 6), 6), Math.min(7 - successCount, 6)];
// }

// console.log(solution(testCase.lottos, testCase.win_nums));
