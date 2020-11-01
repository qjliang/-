interface NodeInfo {
  element: string;
  next: any;
}
class Node<E> {
  element: E | null = null;
  next: NodeInfo | null;
  constructor(e: E | null = null, next: NodeInfo | null = null) {
    this.element = e;
    this.next = next;
  }
}
export class LinkedList<E> {
  size: number = 0;
  dummyHead: Node<E>;
  constructor() {
    this.size = 0;
    this.dummyHead = new Node();
  }
  add(index: number, e: E) {
    if (index < 0 || index > this.size)
      throw new Error("Add failed. Illegal index.");

    let prev: any = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    prev.next = new Node(e, prev.next);
    this.size++;
  }
  // 在链表头添加新的元素e
  public addFirst(e: E) {
    this.add(0, e);
  }
  // 在链表尾添加新的元素e
  public addLast(e: E) {
    this.add(this.size, e);
  }
}

const linked = new LinkedList();

for (let i = 0; i < 10; i++) {
  linked.addLast(i);
}
const a = [];
for (let cur = linked.dummyHead.next; cur != null; cur = cur.next) {
  a.push(cur.element + "->");
  let b = a.join("") + "null";
  console.log(b);
}
