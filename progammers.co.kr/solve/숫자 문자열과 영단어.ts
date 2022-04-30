// // 숫자 문자열과 영단어
// // 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// // 1478 → "one4seveneight"
// // 234567 → "23four5six7"
// // 10203 → "1zerotwozero3"
// // 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// type caseProps = { s: string };
// const testCase: caseProps = {
//   s: "23four5six7",
// };

// function solution(s: caseProps["s"]) {
//   return Number(
//     s
//       .replace(/zero/g, "0")
//       .replace(/one/g, "1")
//       .replace(/two/g, "2")
//       .replace(/three/g, "3")
//       .replace(/four/g, "4")
//       .replace(/five/g, "5")
//       .replace(/six/g, "6")
//       .replace(/seven/g, "7")
//       .replace(/eight/g, "8")
//       .replace(/nine/g, "9")
//   );
// }

// console.log(solution(testCase.s));
