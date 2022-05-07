// let list: number[] = Array.from({ length: n }).map((item, i) => i + 1);

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

// // 중복순열 : 중복포함 모든 경우. [4,3] 이랑 [3,4]랑 다름.
// const getPermutationsDup = (arr: number[], num: number) => {
//   const results: number[][] = [];
//   if (num === 1) return arr.map((v) => [v]);
//   arr.forEach((fixed, index, origin) => {
//     // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//     const permutations = getPermutations(origin, num - 1);
//     // 기준값(fixed)에 순열(permutations)을 붙인다.
//     const attached = permutations.map((v) => [fixed, ...v]);
//     // 붙인 값을 결과 값에 넣어준다.
//     results.push(...attached);
//   });

//   return results;
// };
