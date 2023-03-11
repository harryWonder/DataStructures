class DoublyLinkedListNode {
  value: number;
  next: DoublyLinkedListNode;
  prev: DoublyLinkedListNode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  length: number;
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: number) {
    const NewNode = new DoublyLinkedListNode(value);
    if (!this.length) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      NewNode.prev = this.tail;

      this.tail = NewNode;
    }

    this.length++;
    return this.length;
  }

  unshift(value: number) {
    const NewNode = new DoublyLinkedListNode(value);
    if (!this.length) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.head.prev = NewNode;
      NewNode.next = this.head;

      this.head = NewNode;
    }

    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) {
      return null;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return this.length;
  }

  shift() {
    if (!this.length) {
      return null;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return this.length;
  }

  indexOf(index: number) {
    if (!this.length) {
      return null;
    } else if (this.length < index || index >= this.length) {
      return null;
    } else if (index == 0) {
      return this.head;
    } else if (index == this.length - 1) {
      return this.tail;
    } else {
      let currentHead = this.head;
      let currentNode = currentHead;

      while (index) {
        currentHead = currentHead.next;
        
        currentNode = currentHead;
        index--;
      }

      return currentNode;
    }
  }

  find(val: number) {
    if (!this.length) {
      return false;
    } else if (this.length == 1) {
      if (this.head.value == val) return true;
      return false;
    } else {
      let currentNode = this.head;

      while (currentNode) {
        if (currentNode.value == val) return true;

        currentNode = currentNode.next;
      }
    }

    return false;
  }

  insert(val: number, pos: number) {
    if (!this.length) {
      return null;
    } else if (pos == 0) {
      return this.unshift(val);
    } else if (pos == this.length - 1) {
      return this.push(val);
    } else {
      const NewNode = new DoublyLinkedListNode(val);
      const DeletedNode = this.indexOf(pos);
      const PreviousNode = DeletedNode.prev;
      const NextNode = DeletedNode.next;

      PreviousNode.next = NewNode;
      NewNode.prev = PreviousNode;

      NewNode.next = NextNode;
      NextNode.prev = NewNode;

      this.length++;

      return this.length;
    }
  }

  update(val: number, pos: number) {
    if (!this.length) {
      return null;
    } else if (pos == 0) {
      this.head.value = val;
      return this.head;
    } else if (pos == this.length - 1) {
      this.tail.value = val;
      return this.tail;
    } else {
      const CurrentNode = this.indexOf(pos);
      CurrentNode.value = val;

      return CurrentNode;
    }
  }

  delete(pos: number) {
    if (!this.length) {
      return null;
    } else if (pos == 0) {
      return this.shift();
    } else if (pos == this.length - 1) {
      return this.pop();
    } else {
      const CurrNode = this.indexOf(pos);
      let PreviousNode = CurrNode.prev;
      let NextNode = CurrNode.next;

      PreviousNode.next = NextNode;
      NextNode.prev = PreviousNode;;

      this.length--;
      return this.length;
    }
  }

  reverse(doublylinkedlist: DoublyLinkedList) {
    let tail = doublylinkedlist.tail;
    let reversedNode = new DoublyLinkedList();

    while (tail) {
      reversedNode.push(tail.value);
      tail = tail.prev;
    }

    return reversedNode;
  }
}


const doublylinkedlist = new DoublyLinkedList();
doublylinkedlist.push(1);
doublylinkedlist.push(2);
doublylinkedlist.push(3);
doublylinkedlist.push(4);

console.log(doublylinkedlist.head);