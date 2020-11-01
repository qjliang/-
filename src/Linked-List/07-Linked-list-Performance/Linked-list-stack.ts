import { LinkedList } from "./Linked-list";
interface ILinkStack<E> {
  getSize: () => number;
  isEmpty: () => boolean;
  push: (e: E) => void;
  pop: () => E;
  peek: () => E;
}

export class LinkedListStack<E> implements ILinkStack<E> {
  link: LinkedList<E>;
  constructor() {
    this.link = new LinkedList();
  }
  getSize() {
    return this.link.getSize();
  }
  isEmpty() {
    return this.link.isEmpty();
  }
  push(e: E) {
    return this.link.addFirst(e);
  }
  pop() {
    return this.link.removeFirst();
  }
  peek() {
    return this.link.getFirst();
  }
}
