const repeat = (n: number) => "____".repeat(n);
// ____ ____ ____ 이런식

// const fs = require("fs");
// // const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// const inputNumber: number = +fs.readFileSync("./dev/stdin").toString().trim();

// let result = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";

// const reFunction = (n: number): string => {
//   const underbar = Array.from({ length: (inputNumber - n) * 4 })
//     .fill("_")
//     .join("");
//   if (n === 0)
//     return `${underbar}"재귀함수가 뭔가요?"\n${underbar}"재귀함수는 자기 자신을 호출하는 함수라네"\n${underbar}라고 답변하였지.\n`;
//   return `${underbar}"재귀함수가 뭔가요?"\n${underbar}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n${underbar}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n${underbar}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n${reFunction(
//     n - 1
//   )}${underbar}라고 답변하였지.\n`;
// };
// result += reFunction(inputNumber);
// console.log(result.trimEnd());
