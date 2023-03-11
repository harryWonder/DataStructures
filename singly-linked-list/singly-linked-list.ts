/**
 * This class is the blueprint of our linked list nodes.
 * 
 */
class SinglyLinkedListNode {
  value: number; /* This could pretty much be any data type. */
  next: SinglyLinkedListNode|null

  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  head: SinglyLinkedListNode;
  tail: SinglyLinkedListNode;
  length: number;
  
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(data: number) {
    const NewNode = new SinglyLinkedListNode(data);
    
    if (!this.length) {/* You can also check if the head or tail is null */
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      const currentTail = this.tail;
      currentTail.next = NewNode;
      this.tail = NewNode;
    }

    this.length++;
    return NewNode;
  }

  unshift(data: number) {
    const NewNode = new SinglyLinkedListNode(data);

    if (!this.length) {/* You can also check if the head or tail is null */
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      const currentHead = this.head;
      this.head = NewNode;

      this.head.next = currentHead;
    }

    this.length++;
    return NewNode;
  }

  pop() {
    if (!this.length) {
      return null;
    }

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let head = this.head;
      let currentNode = head;

      while (head) {
        currentNode = head;
        head = head.next.next;
      }

      this.tail = currentNode;
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
      const currentHead = this.head;
      const nextHead = currentHead.next;
  
      this.head = nextHead;
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
      const NewNode = new SinglyLinkedListNode(val);
      const PreviousNode = this.indexOf(pos - 1);

      NewNode.next = PreviousNode.next;
      PreviousNode.next = NewNode;

      this.length++;

      return NewNode;
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
      const currentNode = this.indexOf(pos);
      currentNode.value = val;

      return currentNode;
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
      let previousNode = this.indexOf(pos - 1);
      if (!previousNode) {
        return null;
      }

      let deletedNode = previousNode.next;
      let nextNode = deletedNode.next;

      previousNode.next = nextNode;
      this.length--;

      return this.length;
    }
  }

  reverse(linkedList: SinglyLinkedList) {
    let currNode = linkedList.head;
    
    let nextNode = null;
    let previousNode = null;

    while (currNode != null) {
      nextNode = currNode.next;
      currNode.next = previousNode;

      previousNode = currNode;
      currNode = nextNode;
    }

    return previousNode;
  }

  reverseModified(linkedList: SinglyLinkedList) {
    let newNode = new SinglyLinkedList();
    let currNode = linkedList.head;

    while (currNode) {
      newNode.unshift(currNode.value);
      currNode = currNode.next;
    }

    return newNode.head;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);

console.log(singlyLinkedList.head);