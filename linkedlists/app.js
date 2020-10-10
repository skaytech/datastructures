class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let nodeToBeAdded = new Node(value);

    if (this.isEmpty()) {
      this.head = nodeToBeAdded;
      this.tail = nodeToBeAdded;
    } else {
      this.tail.next = nodeToBeAdded;
      this.tail = nodeToBeAdded;
    }

    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      const nodeToBeRemoved = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToBeRemoved;
    } else {
      //The tail to be removed
      const nodeToBeRemoved = this.tail;
      //Start the pointer at head
      let currentNode = this.head;
      //New tail node
      let secondToLastNode;

      while (currentNode) {
        //Check if the next node after head is the tail
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        //Set the next node as the current node and continue the while loop
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToBeRemoved;
    }
  }

  get(index) {
    //Check for Empty LinkedList or invalid index
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    //If index requested is 0, return head
    if (index === 0) {
      console.log('Inside head');
      return this.head;
    }

    //If index is the last element, return tail
    if (index === this.length - 1) {
      console.log('Inside tail');
      return this.tail;
    }

    let currentNode = this.head;
    let iterator = 0;

    while (iterator < index) {
      console.log(`Value of iterator is ${iterator}`);
      iterator++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  delete(index) {
    //Check for Empty LinkedList or invalid index
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    //If index requested is 0, return head
    if (this.length === 1) {
      const nodeToBeDeleted = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToBeDeleted;
    } else if (index === 0) {
      const nodeToBeDeleted = this.head;
      this.head = this.head.next;
      this.length--;
      return nodeToBeDeleted;
    } else {
      let currentNode = this.head;
      let previousNode;
      let iterator = 0;

      while (iterator < index) {
        iterator++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      const nodeToBeDeleted = currentNode;
      previousNode.next = currentNode.next;

      if (previousNode.next === null) {
        this.tail = this.previousNode;
      }
      this.length--;
      return nodeToBeDeleted;
    }
  }
}

const marvelHeros = new LinkedList();
marvelHeros.push('Captain America');
marvelHeros.push('Iron Man');
marvelHeros.push('Black Widow');
marvelHeros.push('Doctor Strange');
console.log(marvelHeros);
marvelHeros.delete(2);
// marvelHeros.pop();
// console.log(marvelHeros);
//console.log(marvelHeros.get(0));
//console.log(marvelHeros.get(3));
//console.log(marvelHeros.get(2));
