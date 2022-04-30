console.log(1)
const set = new Set();
set.add(1)
set.add(1);
set.add(1);
const a = set.has(1) //true
const b = set.has(2) //false
console.log(a, b)

let num = 8
const c = num.toString(8) //8진수로 바꿈

console.log(c)