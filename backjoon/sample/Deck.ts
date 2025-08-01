// class Deck {
//   list: number[] = [];
//   push_front(x: number) {
//     this.list.push(x);
//     return null;
//   }
//   push_back(x: number) {
//     this.list.unshift(x);
//     return null;
//   }
//   pop_front() {
//     return this.list.pop() ?? -1;
//   }
//   pop_back() {
//     return this.list.shift() ?? -1;
//   }
//   size() {
//     return this.list.length;
//   }
//   empty() {
//     return this.list.length === 0 ? 1 : 0;
//   }
//   front() {
//     return this.list.length === 0 ? -1 : this.list[this.list.length - 1];
//   }
//   back() {
//     return this.list.length === 0 ? -1 : this.list[0];
//   }
// }
// const deck = new Deck();
// let result = "";
// inputList.slice(1).map((item, i) => {
//   const [method, n] = item.split(" ");
//   const num = Number(n);
//   switch (method) {
//     case "push_front":
//       deck.push_front(num);
//       break;
//     case "push_back":
//       deck.push_back(num);
//       break;
//     case "pop_front":
//       result += deck.pop_front() + "\n";
//       break;
//     case "pop_back":
//       result += deck.pop_back() + "\n";
//       break;
//     case "size":
//       result += deck.size() + "\n";
//       break;
//     case "empty":
//       result += deck.empty() + "\n";
//       break;
//     case "front":
//       result += deck.front() + "\n";
//       break;
//     case "back":
//       result += deck.back() + "\n";
//       break;
//     default:
//       break;
//   }
// });
