// // 유클리드 호제법 활용
// 유클리드 호제법
// const getGCD = (num1: number, num2: number): number => (num2 == 0 ? num1 : getGCD(num2, num1 % num2));

// // 최대공약수
// const gcd = getGCD(num1, num2);
// // 최소공배수
// const lcm = (num1 * num2) / gcd;

// // 모든 약수 구하기 sort=true 정렬하기
// const getDivisors = (num: number, sort = false): number[] => {
//   const divisors = [];
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       divisors.push(i);
//       if (num / i != i) divisors.push(num / i);
//     }
//   }
//   if (sort) divisors.sort((a, b) => a - b);
//   return divisors;
// };
