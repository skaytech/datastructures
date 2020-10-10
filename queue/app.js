class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const movies = new Queue();
movies.enqueue('Avengers');
movies.enqueue('Spiderman');
movies.enqueue('Antman');
movies.enqueue('Doctor Strange');
console.log(movies);
movies.dequeue();
console.log(movies.peek());
movies.dequeue();
console.log(movies.peek());
movies.dequeue();
movies.dequeue();
console.log(movies.isEmpty());
