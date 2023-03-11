class MinBinaryHeap {
  values: number[];

  constructor(values: number[]) {
    this.values = values;
  }

  insert(value: number) {
    this.values.push(value);

    return this.bubbleUp();
  }

  extractMin() {
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

      if (parentValue <= lastElemValue) break;

      this.values[parentIndex] = lastElemValue;
      this.values[lastElemIndex] = parentValue;

      lastElemIndex = parentIndex;
    }

    return this.values;
  }

  private bubbleDown() {
    let firstElemIndex = 0;
    let firstElemValue = this.values[firstElemIndex];

    while (true) {
      let swap = null;
      let leftIndex = (2 * firstElemIndex) + 1;
      let rightIndex = (2 * firstElemIndex) + 2;

      /* left index */
      if (this.values.length > leftIndex) {
        if (this.values[leftIndex] < firstElemValue) {
          swap = leftIndex;
        }
      } else { swap = null; }

      /* right index */
      if (this.values.length > rightIndex) {
        if (
          (swap == null && this.values[rightIndex] < firstElemValue) ||
          (swap != null && this.values[rightIndex] < this.values[swap])
        ) {
          swap = rightIndex;
        }
      } else { swap = null; }

      if (swap == null) break;

      this.values[firstElemIndex] = this.values[swap];
      this.values[swap] = firstElemValue;

      firstElemIndex = swap;
    }

    return this.values;
  }
}

const minBinHeap = new MinBinaryHeap([]);
minBinHeap.insert(10);
minBinHeap.insert(5);
minBinHeap.insert(11);
minBinHeap.insert(8);
minBinHeap.insert(7);
minBinHeap.insert(15);
minBinHeap.insert(3);

console.log(minBinHeap.values, 'Orginal Valuues');
minBinHeap.extractMin();
console.log(minBinHeap.values, 'Min Heap');