// const fs = require("fs");
// const inputList: number[][] = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   // .map((item: string) => item.trimEnd())
//   .map((item: string) => item.split(" ").map(Number));
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString().trim();
// // const inputNumber: number = +fs.readFileSync("./dev/stdin").toString().trim();

// const boardLen = 9;
// const square = (x: number, y: number) => Math.floor(y / 3) * 3 + Math.floor(x / 3);
// const sudoku = inputList;
// const Row = Array.from(Array(boardLen), () => new Array(boardLen + 1).fill(false));
// const Col = Array.from(Array(boardLen), () => new Array(boardLen + 1).fill(false));
// const Square = Array.from(Array(boardLen), () => new Array(boardLen + 1).fill(false));
// const input = () => {
//   for (let y = 0; y < boardLen; y++)
//     for (let x = 0; x < boardLen; x++) {
//       if (inputList[y][x] != 0) {
//         Row[y][inputList[y][x]] = true;
//         Col[x][inputList[y][x]] = true;
//         Square[square(y, x)][inputList[y][x]] = true;
//       }
//     }
// };
// const print_sudoku = () => console.log(sudoku.map((item) => item.join(" ")).join("\n"));
// let isBreak = false;
// const DFS = (n: number) => {
//   if (n == 81) {
//     print_sudoku();
//     isBreak = true;
//     return;
//   }
//   if (!isBreak) {
//     const y = Math.floor(n / boardLen);
//     const x = n % boardLen;
//     if (sudoku[y][x] == 0) {
//       for (let i = 1; i < 10; i++) {
//         if (!Row[y][i] && !Col[x][i] && !Square[square(y, x)][i]) {
//           Row[y][i] = true;
//           Col[x][i] = true;
//           Square[square(y, x)][i] = true;
//           sudoku[y][x] = i;
//           DFS(n + 1);
//           sudoku[y][x] = 0;
//           Row[y][i] = false;
//           Col[x][i] = false;
//           Square[square(y, x)][i] = false;
//         }
//         if (isBreak) break;
//       }
//     } else DFS(n + 1);
//   }
// };
// input();
// DFS(0);
