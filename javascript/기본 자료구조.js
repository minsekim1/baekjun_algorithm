//#region Map 자료구조 : 키 밸류
const map1 = new Map();

// 모든 밸류 출력
map1.forEach((item) => console.log(item));

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete("b");

console.log(map1.size);
// expected output: 2
//#endregion

//#region Array 배열

const fruits = "Apple, Banana".split(", ");

const fruits = ['Apple', 'Banana'];
console.log(fruits.indexOf('Banana'));
// 1

const fruits = ['Apple', 'Banana'];
fruits.includes('Banana'); // true

//push하면 바로 들어감
const fruits = ['Apple', 'Banana'];
const newLength = fruits.push('Orange');
console.log(fruits);
// ["Apple", "Banana", "Orange"]

//pop 마지막 1개 제거
const fruits = ['Apple', 'Banana', 'Orange'];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]

// splice 끝에서 3개 제거
const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]

// shift 앞에서 1개 제거
const fruits = ['Apple', 'Banana'];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
//#endregion

//#region Set : 중복 비허용
const set = new Set();
set.add(1)
set.add(1)
set.has(1) //true
set.has(2) //false
//#endregion

//#region Node : 노드
function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}
let root = new Node(5);
let left = new Node(3);
let right = new Node(8)
root.left = left;
root.right = right;
//#endregion 
//#region Linked List: Node 활용
root.ext = node1;
node1.next = node2;
//#endregion
//#region Stack : push, pop
const stack = [];
stack.push(1);
stack.pop(); //마지막꺼 뽑기
//#endregion

//#region substring(1,index+1) substr(1,size)
let s = 'abcde'
s.substring(1, 3 + 1) //1번부터 3번까지 자름
s.substr(1, 3) //1번부터 3개 자름

//#endregion
//#region 진수변환 num.toString(8)
let num = 8
const c = num.toString(8) //8진수로 바꿈
//#endregion