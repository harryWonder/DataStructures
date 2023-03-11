class PriorityQueue {
  values: { value: any, priority: number }[];

  constructor(values: { value: any, priority: number }[]) {
    this.values = values;
  }

  insert(value: { value: any, priority: number }) {
    this.values.push(value);

    return this.bubbleUp();
  }

  extractMax() {
    if (this.values.length < 1) return [];

    let poppedNode = this.values.pop();
    this.values[0] = poppedNode;

    return this.bubbleDown();
  }

  private bubbleUp() {
    let lastElemIndex = this.values.length - 1;
    let lastElemValue = this.values[lastElemIndex];

    while (lastElemIndex > 0) {
      let parentIndex = Math.floor((lastElemIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (parentValue.priority > lastElemValue.priority) break;

      this.values[parentIndex] = lastElemValue;
      this.values[lastElemIndex] = parentValue;

      lastElemIndex = parentIndex;
    }

    return this.values;
  }

  private bubbleDown() {
    let swap = null;
    let firstElemIndex = 0;
    let firstElemValue = this.values[firstElemIndex];

    while (true) {
      let leftIndex = (2 * firstElemIndex) + 1;
      let rightIndex = (2 * firstElemIndex) + 2;

      /* Swap the left values && check it's boundary */
      if (this.values.length > leftIndex) {
        if (this.values[leftIndex].priority > firstElemValue.priority) {
          swap = leftIndex;
        }
      } else { swap = null }

      /* Swap the right values && check it's boundary */
      if (this.values.length > rightIndex) {
        if (
          (swap == null && this.values[rightIndex].priority > firstElemValue.priority) ||
          (swap != null && this.values[rightIndex] > this.values[swap])
        ) {
          swap = rightIndex;
        }
      } else { swap = null }

      /* Check the swap for values */
      if (swap == null) break;

      this.values[firstElemIndex] = this.values[swap];
      this.values[swap] = firstElemValue;

      firstElemIndex = swap;
    }

    return this.values;
  }
}

const priorityQueue = new PriorityQueue([]);
priorityQueue.insert({ value: "Broken Neck", priority: 5 });
priorityQueue.insert({ value: "fever", priority: 1 });
priorityQueue.insert({ value: "Broken toe", priority: 2 });
priorityQueue.insert({ value: "Broken hand", priority: 3 });
priorityQueue.insert({ value: "Broken leg", priority: 4 });

console.log(priorityQueue.values, 'Initial Values');

priorityQueue.extractMax();
priorityQueue.extractMax();
priorityQueue.extractMax();

console.log(priorityQueue.values);