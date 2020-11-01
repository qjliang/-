// import { LinkedList } from "./Linked-list";
interface NodeInfo<E> {
  element: E;
  next: any;
}

interface ILinkQueue<E> {
  getSize: () => number;
  isEmpty: () => boolean;
  enqueue: (e: E) => void;
  dequeue: () => E;
  getFront: () => any;
}
class Node<E> {
  element: E | null = null;
  next: NodeInfo<E> | null;
  constructor(e: E | null = null, next: NodeInfo<E> | null = null) {
    this.element = e;
    this.next = next;
  }
}
export class LinkedListQueue<E> implements ILinkQueue<E> {
  size: number = 0;
  head: Node<E> | null;
  tail: Node<E> | null;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(e: E) {
    if (this.tail === null) {
      this.tail = new Node(e);
      this.head = this.tail;
    } else {
      // let next: any = this.tail.next;
      (this.tail as any).next = new Node(e);
      this.tail = this.tail.next;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from an empty queue.");
    }

    let retNode: any = this.head;
    if (this.head) {
      this.head = this.head.next;
    }
    retNode.next = null;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return retNode?.element;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty.");
    }
    return this.head?.element;
  }
}
