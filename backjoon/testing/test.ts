const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const size = Number(inputList[0]);
const paper = inputList.slice(1).map((i) => i.split(" "));

type getPaperType = string;
const getPaper = (startX: number, startY: number, endX: number, endY: number): getPaperType => {
  let count = { "0": 0, "1": 0, "-1": 0 };
  const size = (endX - startX) * (endY - startY);

  for (let i = startX; i < endX; i++) for (let j = startY; j < endY; j++) count[paper[j][i]]++;

  if (count["0"] === size) return "0";
  if (count["1"] === size) return "1";
  if (count["-1"] === size) return "-1";
  const middleX1 = startX + (endX - startX) / 3;
  const middleX2 = startX + ((endX - startX) * 2) / 3;
  const middleY1 = startY + (endY - startY) / 3;
  const middleY2 = startY + ((endY - startY) * 2) / 3;

  const a = getPaper(startX, startY, middleX1, middleY1);
  const b = getPaper(startX, startY, middleX1, middleY1);
  const c = getPaper(startX, startY, middleX1, middleY1);
  const d = getPaper(startX, startY, middleX1, middleY1);
  const e = getPaper(startX, startY, middleX1, middleY1);
  const f = getPaper(startX, startY, middleX1, middleY1);
  const g = getPaper(startX, startY, middleX1, middleY1);
  const h = getPaper(startX, startY, middleX1, middleY1);
  const i = getPaper(startX, startY, middleX1, middleY1);
  return (
    (a.length > 1 ? `(${a})` : a) +
    (b.length > 1 ? `(${b})` : b) +
    (c.length > 1 ? `(${c})` : c) +
    (d.length > 1 ? `(${d})` : d)
  );
};

const result = getPaper(0, 0, size, size);
console.log(result.length > 1 ? `(${result})` : result);
