import { InitArray }   from './array'
interface IArrayQueue<E> {

  getSize: () => number
  isEmpty: () => boolean
  enqueue: (e: E) => void
  dequeue: () => E
  getFront: () => E
}
export class ArrayQueue<E> implements IArrayQueue<E> { 
  array: InitArray<E>
  constructor(capacity: number = 10) { 
    this.array = new InitArray(capacity)
  }
  public getCapacity(){
        return this.array.getCapacity();
    }
  public getSize(){
      return this.array.getSize();
  }
  public isEmpty(){
      return this.array.isEmpty();
  }
  public enqueue(e: E){
      return this.array.addLast(e);
  }
  public dequeue(){
      return this.array.removeFirst();
  }
  public getFront(){
      return this.array.getFirst();
  }
}

// const queue = new ArrayQueue<number>();
// const startTime = Date.now()
// const count = 100000
// for(let i = 0 ; i < count ; i ++){
//   queue.enqueue(i);
// }
// for(let i = 0 ; i < count ; i ++){
//   queue.dequeue();
// }
// const endTime = (Date.now() - startTime)/1000
// const time = `统计正常ArrayQueue(队列)，进出${count}次，所需要时间为: ${endTime} s`
// console.log(time)
  


