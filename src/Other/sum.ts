

const add = (array: number[]) => { 
  const a = array[0];
  const b = array[1];
  for (let i = 2; i < array.length; i++) { 
    array[i] = array[i-1] + array[i-2]
  }
  console.log(array);
  return array.pop()
}
const arr = [1,2]
for (let i = 3; i < 12; i++) { 
  arr.push(i)
}
const sum = add(arr)
// console.log(sum);
