// const fs = require("fs");
// const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// // const inputRow: string[] = fs.readFileSync("./dev/stdin").toString().split(" ");
// // const input: string = fs.readFileSync("./dev/stdin").toString();

// inputList.map((item, i) => {
//   if (i === 0) return;
//   const [x1, y1, r1, x2, y2, r2] = item.split(" ").map((item) => Number(item));
//   const distance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
//   if (distance === 0 && r1 == r2) {
//     console.log(-1);
//     return;
//   }
//   const maxR = Math.max(r1, r2);
//   const minR = Math.min(r1, r2);
//   if (distance > (minR + maxR) * (minR + maxR) || distance < (maxR - minR) * (maxR - minR)) console.log(0);
//   else if (distance === (minR + maxR) * (minR + maxR) || distance === (maxR - minR) * (maxR - minR)) console.log(1);
//   else console.log(2);
// });
