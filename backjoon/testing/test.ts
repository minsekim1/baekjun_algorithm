const fs = require("fs");
const inputList: string[] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const queue: string[] = [];
inputList.slice(1).map((item) => {
  const [cmd, num] = item.trimEnd().split(" ");
  switch (cmd) {
    case "push":
      queue.push(num);
      break;
    case "pop":
      console.log(queue.shift());

      break;
    case "size":
      break;
    case "empty":
      break;
    case "front":
      break;
    default: //back
      break;
  }
});
