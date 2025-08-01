// 백준에서 표준 입력 처리용
import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = Number(input[0]);
const queries = input.slice(1).map(Number);

class MaxHeap {
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
      if (this.heap[parentIndex] >= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  extract(): number {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop()!;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);
    return max;
  }

  sinkDown(index: number) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}

const heap = new MaxHeap();
const output: number[] = [];

for (const q of queries) {
  if (q === 0) {
    output.push(heap.extract());
  } else {
    heap.insert(q);
  }
}

console.log(output.join("\n"));


