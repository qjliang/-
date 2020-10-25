import { InitArray} from './array'
interface Stack<E> {

    getSize: () => number;
    isEmpty: () => boolean;
    push: (value: E) => void;
    pop: () => E;
    peek: () => E;
}


export class ArrayStack<E> implements Stack<E> { 
  private array: InitArray<E>
  constructor(capacity: number = 0) { 
    this.array = new InitArray<E>(capacity)
  }
  getSize(): number { 
    return this.array.getSize()
  }
  isEmpty() {
    return this.array.isEmpty()
  }
  push (value: E) {
    this.array.addLast(value)
  }
  pop() {
    return this.array.removeLast()
  }
  peek() {
    return this.array.getLast()
  }
}