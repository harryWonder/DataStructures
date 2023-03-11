class BinarySearchTreeNode {
  value: number;
  left: BinarySearchTreeNode;
  right: BinarySearchTreeNode;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BinarySearchTreeNode

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const NewNode = new BinarySearchTreeNode(value);
    if (this.root == null) {
      this.root = NewNode;
      return this;
    }

    let currNode = this.root;
    while (true) {
      if (NewNode.value < currNode.value) {
        if (!currNode.left) {
          currNode.left = NewNode;
          return this;
        } else{
          currNode = currNode.left;
        }
      }

      if (NewNode.value > currNode.value) {
        if (!currNode.right) {
          currNode.right = NewNode;
          return this;
        } else{
          currNode = currNode.right;
        }
      }
    }
  }

  find(value: number) {
    if (this.root.value == value) return true;

    let currNode = this.root;
    while (true) {
      if (!currNode) return false;

      if (value < currNode.value) {
        currNode = currNode.left;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      } else {
        return true;
      }
    }
  }

  breathFirstSearch() {
    const Queue = [this.root];
    const Result = [];

    while (Queue.length) {
      let poppedNode = Queue.shift();
      Result.push(poppedNode.value);

      if (poppedNode.left) Queue.push(poppedNode.left);
      if (poppedNode.right) Queue.push(poppedNode.right);
    }

    return Result;
  }

  depthFirstSearchPreOrder() {
    const Stack = [this.root];
    const Result = [];

    while (Stack.length) {
      let poppedNode = Stack.pop();
      Result.push(poppedNode.value);

      if (poppedNode.right) Stack.push(poppedNode.right);
      if (poppedNode.left) Stack.push(poppedNode.left);
    }

    return Result;
  }

  depthFirstSearchPostOrder() {
    const Stack = [this.root];
    const Result = [];

    while (Stack.length) {
      let poppedNode = Stack.pop();
      Result.unshift(poppedNode.value);

      if (poppedNode.left) Stack.push(poppedNode.left);
      if (poppedNode.right) Stack.push(poppedNode.right);
    }

    return Result;
  }

  depthFirstSearchInOrder() {
    const Tree = this.root;
    const Result = [];
  }

  private inOrderrecursiveFunc(tree: BinarySearchTreeNode, result: number[]) {
    if (tree.left) {
      return this.inOrderrecursiveFunc(tree.left, result);
    }
    result.push(tree.value);
    
    if (tree.right) {
      return this.inOrderrecursiveFunc(tree.right, result);
    }
  }
}