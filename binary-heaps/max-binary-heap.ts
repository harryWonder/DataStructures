class MaxBinaryHeap {
  values: number[]

  constructor(values: number[]) {
    this.values = values;
  }

  insert(val: number) {
    this.values.push(val);
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

      if (parentValue > lastElemValue) break;

      this.values[lastElemIndex] = parentValue;
      this.values[parentIndex] = lastElemValue;

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

      /* Check the left for swaps */
      if (this.values.length > leftIndex) {
        if (this.values[leftIndex] > firstElemIndex) {
          swap = leftIndex;
        }
      } else { swap = null; }

      /* Check the right for swaps */
      if (this.values.length > rightIndex) {
        if (
          (swap == null && this.values[rightIndex] > firstElemValue) ||
          (swap != null && this.values[rightIndex] > this.values[swap])
        ) {
          swap = rightIndex;
        }
      } else { swap = null; }

      /* Check swap is null */
      if (swap == null) break;

      this.values[firstElemIndex] = this.values[swap];
      this.values[swap] = firstElemValue;

      firstElemIndex = swap;
    }

    return this.values;
  }
}

const maxBinHeap = new MaxBinaryHeap([]);
maxBinHeap.insert(10);
maxBinHeap.insert(5);
maxBinHeap.insert(11);
maxBinHeap.insert(8);
maxBinHeap.insert(7);
maxBinHeap.insert(15);

console.log(maxBinHeap.values);
maxBinHeap.extractMax();
maxBinHeap.extractMax();
console.log(maxBinHeap.values);