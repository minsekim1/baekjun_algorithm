const fs = require("fs").readFileSync("./dev/stdin").toString();
const input = fs.split(/\r\n|\n/) as string[];
const log = console.log;

const solution1 = (input: string[]) => {
  let str = input[0];
  const replaceStr = input[1];
  const regex = new RegExp(`${replaceStr}`, "g");
  while (str.indexOf(replaceStr) != -1) str = str.replace(regex, "");
  log(str.length ? str : "FRULA");
};

const solution2 = (input: string[]) => {
  const [string, target] = input;
  const targetL = target.length;
  const stack: string[] = [];

  for (let i = 0; i < string.length; i++) {
    if (target[targetL - 1] === string[i]) {
      let flag = true;
      for (let j = 1; j < targetL; j++) {
        if (target[targetL - 1 - j] !== stack[stack.length - j]) {
          flag = false;
          stack.push(string[i]);
          break;
        }
      }
      if (flag) {
        let count = targetL - 1;
        while (count--) stack.pop();
      }
    } else stack.push(string[i]);
  }

  log(stack.length > 0 ? stack.join("") : "FRULA");
};

solution1(input);
