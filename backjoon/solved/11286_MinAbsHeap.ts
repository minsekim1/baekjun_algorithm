// 백준에서 표준 입력 처리용
import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const queries = input.slice(1).map(Number);

class MinAbsHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(value: number) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex])) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extract(): number {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);
    return min;
  }

  sinkDown(index: number) {
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.compare(this.heap[left], this.heap[smallest])) smallest = left;
      if (right < length && this.compare(this.heap[right], this.heap[smallest])) smallest = right;

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  compare(a: number, b: number): boolean {
    const absA = Math.abs(a),
      absB = Math.abs(b);
    if (absA !== absB) return absA < absB;
    return a < b;
  }
}

const heap = new MinAbsHeap();
const output: number[] = [];

for (const q of queries) {
  if (q === 0) {
    output.push(heap.extract());
  } else {
    heap.insert(q);
  }
}

console.log(output.join("\n"));
