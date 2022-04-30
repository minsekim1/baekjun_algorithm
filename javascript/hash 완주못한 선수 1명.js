// function solution(participant, completion) {
//   const map1 = new Map();
//   participant.map((item) => {
//     const before_value = map1.get(item);
//     map1.set(item, before_value ? before_value + 1 : 1);
//   });
//   completion.map((item) => {
//     const before_value = map1.get(item);
//     map1.set(item, before_value ? before_value - 1 : 1);
//   });

//   let i;
//   for (i = 0; i < participant.length; i++) {
//     const name = participant[i];
//     if (map1.get(name) == 1) break;
//   }

//   return participant[i];
// }
