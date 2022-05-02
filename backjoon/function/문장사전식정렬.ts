// a
// aba
// ba
// 식으로 정렬
// console.log(list.sort((a, b) => a.localeCompare(b)).join("\n"));

// 아래가 정답임
// console.log(
//   list.sort((a, b) => (a.length != b.length ? (a.length > b.length ? 1 : -1) : a.localeCompare(b))).join("\n")
// );

// 다른 유저의 짧은 답
// const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

// set으로 중복 삭제
// const uniqueValues = new Set(sorted);
// console.log(Array.from(uniqueValues).join("\n"));
