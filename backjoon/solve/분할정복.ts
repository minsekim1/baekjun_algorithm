const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// const sum = Number(inputList[0]);

const size = Number(inputList[0]);
const paper = inputList.slice(1).map((i) => i.split(" "));

type getPaperType = { white: number; blue: number };
const getPaper = (startX: number, startY: number, endX: number, endY: number): getPaperType => {
  let white = 0;
  const size = (endX - startX) * (endY - startY);
  for (let i = startX; i < endX; i++) for (let j = startY; j < endY; j++) if (paper[i][j] === "0") white++;

  if (white === 0) return { white: 0, blue: 1 };
  if (size === white) return { white: 1, blue: 0 };
  const middleX = startX + (endX - startX) / 2;
  const middleY = startY + (endY - startY) / 2;

  const a = getPaper(startX, startY, middleX, middleY);
  const b = getPaper(middleX, startY, endX, middleY);
  const c = getPaper(startX, middleY, middleX, endY);
  const d = getPaper(middleX, middleY, endX, endY);
  return { white: a.white + b.white + c.white + d.white, blue: a.blue + b.blue + c.blue + d.blue };
};

const result = getPaper(0, 0, size, size);
console.log(`${result.white}\n${result.blue}`);
