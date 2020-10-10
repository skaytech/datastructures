class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const fruits = new Stack();
fruits.push('apple');
fruits.push('orange');
fruits.push('banana');
fruits.push('papaya');
console.log(fruits);
console.log(fruits.peek());
fruits.pop();
console.log(fruits.peek());
console.log(fruits.isEmpty());
