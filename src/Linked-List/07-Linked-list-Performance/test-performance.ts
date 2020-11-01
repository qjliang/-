import { InitArray } from "./array";
import { LinkedList } from "./Linked-list";

import { ArrayStack } from "./arrayStack";
import { LinkedListStack } from "./Linked-list-stack";
import { LinkedListQueue } from "./Linked-list-queue";

const performanceArray = (count: number) => {
  const startTime = Date.now();
  const array = new InitArray();
  for (let index = 0; index < count; index++) {
    array.addLast(index);
  }
  return (Date.now() - startTime) / 1000;
};
const performanceLinkedList = (count: number) => {
  const startTime = Date.now();
  const array = new LinkedList();
  for (let index = 0; index < count; index++) {
    array.addFirst(index);
  }
  return (Date.now() - startTime) / 1000;
};
const performanceArrayStack = (count: number) => {
  const startTime = Date.now();
  const array = new ArrayStack();
  for (let index = 0; index < count; index++) {
    array.push(index);
  }
  for (let index = 0; index < count; index++) {
    array.pop();
  }
  return (Date.now() - startTime) / 1000;
};
const performanceLinkedListStack = (count: number) => {
  const startTime = Date.now();
  const array = new LinkedListStack();
  for (let index = 0; index < count; index++) {
    array.push(index);
  }
  for (let index = 0; index < count; index++) {
    array.pop();
  }
  return (Date.now() - startTime) / 1000;
};
const performanceLinkedListQueue = (count: number) => {
  const startTime = Date.now();
  const array = new LinkedListQueue();
  for (let index = 0; index < count; index++) {
    array.enqueue(index);
  }
  for (let index = 0; index < count; index++) {
    array.dequeue();
  }
  return (Date.now() - startTime) / 1000;
};

const count = 10000000;

console.log(`n = ${count}`);
// console.log(`Array: ${performanceArray(count)}s`);
// console.log(`LinkedList: ${performanceLinkedList(count)}s`);
console.log(`ArrayStack: ${performanceArrayStack(count)}s`);
console.log(`LinkedListStack: ${performanceLinkedListStack(count)}s`);
console.log(`LinkedListQueue: ${performanceLinkedListQueue(count)}s`);
