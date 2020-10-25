import { InitArray }   from './array'
interface ILoopQueue<E> {

  getSize: () => number
  isEmpty: () => boolean
  enqueue: (e: E) => void
  dequeue: () => E | null
  getFront: () => E | null
}

export class LoopQueue<E> implements ILoopQueue<E> { 
  private array: Array<E | null>
  private front: number = 0
  tail: number= 0
  private size: number = 0
  constructor(capacity: number = 10) { 
    this.array = new Array(capacity + 1 )
  }
  public getCapacity(){
        return this.array.length -1;
    }
  public getSize(){
      return this.size;
  }
  public isEmpty(){
      return this.front === this.tail;
  }
  public enqueue(e: E){
      if((this.tail + 1) % this.array.length === this.front)
            this.resize(this.getCapacity() * 2);

        this.array[this.tail] = e;
        this.tail = (this.tail + 1) % this.array.length;
        this.size ++;
  }
  public dequeue(){
      if(this.isEmpty())
            throw new Error("Cannot dequeue from an empty queue.");

        const ret = this.array[this.front];
        this.array[this.front] = null;
        this.front = (this.front + 1) % this.array.length;
        this.size --;
        if(this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0)
            this.resize(this.getCapacity() / 2);
        return ret;
  }
  public getFront(){
      return this.array[this.front];
  }
  private resize(newCapacity: number) { 
    const newData = new Array(newCapacity + 1)
        for(let i = 0 ; i < this.size ; i ++)
            newData[i] = this.array[(i + this.front) % this.array.length];

        this.array = newData;
        this.front = 0;
        this.tail = this.size;
  }
}