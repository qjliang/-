export class InitArray<E> {
  private data: E[] = new Array<E>();
  private size: number = 0;
  constructor(capacity: number = 0) {
    this.data = new Array<E>(capacity);
  }
  private add(index: number, value: E) {
    if (this.size === this.data.length) {
      throw new Error("Array is full");
    }
    for (let i = this.size - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
    this.size++;
    if (this.size >= this.data.length) {
      this.data.length = this.size * 2;
    }
  }
  getSize() {
    return this.size;
  }
  getFirst() {
    return this.data[0];
  }
  getCapacity() {
    return this.data.length;
  }
  getLast() {
    return this.data[this.size - 1];
  }
  addLast(value: E) {
    this.add(this.size, value);
  }
  addFirst(value: E) {
    this.add(0, value);
  }
  removeLast() {
    return this.deleteItem(this.size - 1);
  }
  removeFirst() {
    return this.deleteItem(0);
  }
  deleteItem(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error("index is not exist");
    }
    const curr = this.data[index];
    for (let i = index; i < this.size; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    this.shrink();
    return curr;
  }
  changeItem(index: number, e: E) {
    if (index < 0 || index >= this.size) {
      throw new Error("index is not exist");
    }
    this.data[index] = e;
  }
  find(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error("index is not exist");
    }
    return this.data[index];
  }
  findItem(e: E) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return i;
      }
    }
    return -1;
  }
  isEmpty() {
    return this.size === 0;
  }
  contain(e: E) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return true;
      }
    }
    return false;
  }

  shrink() {
    if (this.size <= this.data.length / 4) {
      this.data.length = this.data.length / 2;
    }
  }
  toString() {
    const array = [];
    for (let i = 0; i < this.size; i++) {
      array[i] = this.data[i];
    }
    return `capacity = ${this.data.length}, size = ${
      this.size
    }\n\n data=[${array.join(",")}] `;
  }
}
