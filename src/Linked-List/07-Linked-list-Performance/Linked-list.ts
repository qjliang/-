interface NodeInfo<E> {
  element: E;
  next: any;
}
class Node<E> {
  element: E | null = null;
  next: NodeInfo<E> | null;
  constructor(e: E | null = null, next: NodeInfo<E> | null = null) {
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
  // 获取链表中的元素个数
  public getSize(): number {
    return this.size;
  }

  // 返回链表是否为空
  public isEmpty(): boolean {
    return this.size === 0;
  }
  // 获得链表的第index(0-based)个位置的元素
  // 在链表中不是一个常用的操作，练习用：）
  public get(index: number): E {
    if (index < 0 || index >= this.size)
      throw new Error("Get failed. Illegal index.");

    let cur = this.dummyHead.next as NodeInfo<E>;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.element;
  }

  // 获得链表的第一个元素
  public getFirst(): E {
    return this.get(0);
  }

  // 获得链表的最后一个元素
  public getLast(): E {
    return this.get(this.size - 1);
  }

  // 修改链表的第index(0-based)个位置的元素为e
  // 在链表中不是一个常用的操作，练习用：）
  public set(index: number, e: E): void {
    if (index < 0 || index >= this.size)
      throw new Error("Update failed. Illegal index.");

    let cur: any = this.dummyHead.next;
    for (let i = 0; i < index; i++) cur = cur.next;
    cur.element = e;
  }

  // 查找链表中是否有元素e
  public contains(e: E): boolean {
    let cur: any = this.dummyHead.next;
    while (cur != null) {
      if (cur.e.equals(e)) return true;
      cur = cur.next;
    }
    return false;
  }

  // 从链表中删除index(0-based)位置的元素, 返回删除的元素
  // 在链表中不是一个常用的操作，练习用：）
  public remove(index: number): E {
    if (index < 0 || index >= this.size)
      throw new Error("Remove failed. Index is illegal.");

    let prev: any = this.dummyHead;
    for (let i = 0; i < index; i++) prev = prev.next;

    let retNode: Node<E> = prev.next;
    prev.next = retNode.next;
    retNode.next = null;
    this.size--;

    return retNode.element as E;
  }
  // 从链表中删除第一个元素, 返回删除的元素
  public removeFirst(): E {
    return this.remove(0);
  }

  // 从链表中删除最后一个元素, 返回删除的元素
  public removeLast(): E {
    return this.remove(this.size - 1);
  }

  // 从链表中删除元素e
  public removeElement(e: E): void {
    let prev: any = this.dummyHead;
    while (prev.next != null) {
      if (prev.next.element.equals(e)) break;
      prev = prev.next;
    }

    if (prev.next != null) {
      let delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this.size--;
    }
  }
}

// const linked = new LinkedList();

// for (let i = 0; i < 10; i++) {
//   linked.addLast(i);
// }
// const a = [];
// for (let cur = linked.dummyHead.next; cur != null; cur = cur.next) {
//   a.push(cur.element + "->");

//   let b = a.join("") + "null";
//   console.log(b);
// }
