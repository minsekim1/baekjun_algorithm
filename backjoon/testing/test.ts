const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const input = inputList[1].split(" ").map(Number);
