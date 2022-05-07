// // 소수 구하기
// function isPrime(n: number) {
//   if (n === 1) return false;
//   for (let i = 2; i * i <= n; i++) if (n % i == 0) return false;
//   return true;
// }
// // 소수 구하기

// // 소인수분해;
// const primeFactorization = (x: number): number[] => {
//   if (isPrime(x)) return [x];
//   const res = [];
//   let rest = x;
//   for (let i = 2; i < x; i++) {
//     while (!(rest % i)) {
//       res.push(i);
//       rest /= i;
//       if (rest === 1) return res;
//     }
//   }
//   return res;
// };
// // 소인수분해;
