// 백준에서 표준 입력 처리용
import * as fs from "fs";

// 로컬 테스트 시: "input.txt"
// 백준 제출 시: "/dev/stdin"
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

// 입력 파싱 예시
const n = Number(input[0]);
const arr = input[0].split(" ").map(Number);

// 출력 예시
console.log(n);
console.log(arr);
