/**
 * 내림차순 정렬 배열
 * Arrange in descending order
 * @index0 max number
 */
export class ArrayOrderedDesc extends Array<number> {
  add(num: number) {
    if (this.length === 0) this.push(num);
    else {
      for (let i = 0; i < this.length; i++)
        if (num > this[i]) {
          this.splice(i, 0, num);
          return this;
        }
      this.splice(this.length, 0, num);
    }
    return this;
  }
}

// const list = new ArrayOrderedDesc().add(1).add(2).add(3).add(55).add(0).add(0).add(0).add(-1).add(0);
// list.shift();
