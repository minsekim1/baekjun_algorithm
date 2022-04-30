// const testCase: { id_list: string[]; report: string[]; k: number } = {
//   id_list: ["muzi", "frodo", "apeach", "neo"],
//   report: ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//   k: 2,
// };
// const testCase2: { id_list: string[]; report: string[]; k: number } = {
//   id_list: ["con", "ryan"],
//   report: ["ryan con", "ryan con", "ryan con", "ryan con"],
//   k: 3,
// };

// function solution(id_list: string[], report: string[], k: number) {
//   const map_taker = new Map<string, string[]>();
//   report.map((item) => {
//     const reportItem = item.split(" ");
//     const sender = reportItem[0];
//     const taker = reportItem[1];
//     const before_sender: any[] = map_taker.get(taker) ?? [];
//     if (!before_sender.includes(sender)) before_sender.push(sender);
//     map_taker.set(taker, before_sender);
//   });

//   console.log("map_taker", map_taker);

//   const map_sender = new Map<string, number>();
//   id_list.map((item) => map_sender.set(item, 0));
//   map_taker.forEach((value, key) => {
//     if (value.length >= k) {
//       value.map((item) => {
//         map_sender.set(item, (map_sender.get(item) ?? 0) + 1);
//       });
//     }
//   });

//   const result: number[] = [];
//   map_sender.forEach((item) => result.push(item));

//   return result;
// }

// solution(testCase2.id_list, testCase2.report, testCase2.k);
