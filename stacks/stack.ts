class SinglyLinkedList {
  value: number;
  next: SinglyLinkedList;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  size: number;
  head: SinglyLinkedList;
  tail: SinglyLinkedList;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: number) {
    const NewNode = new SinglyLinkedList(value);
    if (!this.size) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
     let currHead = this.head;
     this.head = NewNode;
     this.head.next = currHead;
    }

    this.size++;
  }

  pop() {
    if (!this.size) {
      return null;
    } else {
      let currHead = this.head;
      let nextHead = currHead.next;

      this.head = nextHead;
      this.size--;

      return this.size
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);


stack.pop();
console.log(stack);