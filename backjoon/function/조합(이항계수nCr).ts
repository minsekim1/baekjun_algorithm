// 기본사용법
// const combination = (N: number, K: number) => {
//   let n = 1;
//   let r = 1;
//   let n_r = 1;
//   const max = Math.max(N, K, N - K);
//   for (let i = 1; i <= max; i++) {
//     if (i <= N) n *= i;
//     if (i <= K) r *= i;
//     if (i <= N - K) n_r *= i;
//   }
//   return (n / (r * n_r));
// };

// dp로 해결
// const combination = (N: number, K: number) => {
//   const dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
//   for (let i = 1; i <= N; i++)
//     for (let j = 0; j <= N; j++)
//       i == j || j == 0 ? (dp[i][j] = 1) : (dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]));
//   return dp[N][K];
// };

// nCk 에서 n이 최대일때 : 여러번 계산할때 씀
// let maxN = 0;
// const input = inputList.slice(1).map((item) => {
//   const [n, k] = item.split(" ").map(Number);
//   maxN = Math.max(maxN, k);
//   return [n, k];
// });
// const dp = Array.from(Array(maxN + 1), () => new Array(maxN + 1).fill(0));
// for (let i = 1; i <= maxN; i++)
//   for (let j = 0; j <= maxN; j++) i == j || j == 0 ? (dp[i][j] = 1) : (dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]);
// console.log(input.map((item) => dp[item[1]][item[0]]).join("\n"));
