// for (let i = 1; i < inputList.length; i++) {
//   let count = Number(inputList[i]);
//   const list: { [key: string]: number } = {};
//   for (let j = i + 1; j <= count + i; j++) {
//     const kinds: string = inputList[j].split(" ")[1].trimEnd();
//     list[kinds] = list[kinds] ? list[kinds] + 1 : 1;
//   }
//   let sum = 1;
//   Object.values(list).map((v) => (sum *= v + 1));
//   console.log(sum - 1);
//   i += count;
// }
