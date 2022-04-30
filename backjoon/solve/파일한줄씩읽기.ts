// const fs = require("fs");
// const readline = require("readline");

// // 한 줄씩 읽어들이는 함수 정의
// function processFile(filename: string) {
//   const instream = fs.createReadStream(filename);
//   const reader = readline.createInterface(instream, process.stdout);
//   let count = 0;
//   // 한 줄씩 읽어들인 후에 발생하는 이벤트
//   reader.on("line", function (line: string) {
//     console.log(line);
//     count += 1;
//   });
//   // 모두 읽어들였을 때 발생하는 이벤트
//   reader.on("close", function (line: string) {});
// }

// // 함수 실행
// const filename = "./dev/stdin";
// processFile(filename);
