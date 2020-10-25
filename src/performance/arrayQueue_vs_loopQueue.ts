import { ArrayQueue } from "..//Array-Queue/ArrayQueue";
import { LoopQueue } from "../Loop-Queue/LoopQueue";
interface IQueue<E> {

  getSize: () => number
  isEmpty: () => boolean
  enqueue: (e: E) => void
  dequeue: () => E | null
  getFront: () => E | null
}

const testPerformance = (queue: IQueue<any>, count: number, type: 'ArrayQueue' | 'LoopQueue') => { 
  const startTime = Date.now()
  for(let i = 0 ; i < count ; i ++){
    queue.enqueue(i);
  }
  for(let i = 0 ; i < count ; i ++){
    queue.dequeue();
  }
  const endTime = (Date.now() - startTime)/1000
  const time = `统计${type}(队列)，count = ${count}次，所需要时间为: ${endTime} s`
  return time
}
const testCount = 1000000
const ArrayQueueTest = testPerformance(new ArrayQueue<number>(), testCount, 'ArrayQueue')
const LoopQueueTest = testPerformance(new LoopQueue<number>(), testCount, 'LoopQueue')
console.log(ArrayQueueTest)
console.log(LoopQueueTest);