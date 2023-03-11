class SinglyLinkedNode {
  value: number;
  next: SinglyLinkedNode

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  size: number;
  head: SinglyLinkedNode;
  tail: SinglyLinkedNode;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: number) {
    const NewNode = new SinglyLinkedNode(value);
    if (!this.size) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      this.tail = NewNode;
    }

    this.size++;
  }

  pop() {
    if (!this.size) {
      return null;
    }

    let currHead = this.head;
    let nextHead = currHead.next;

    this.head = nextHead;
    this.size--;
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

queue.pop();
queue.pop();
console.log(queue.head);