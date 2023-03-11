class BubbleSort {
  sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
    }

    console.log(arr);
  }
}

const bSort = new BubbleSort();
bSort.sort([9, 5, 3, 14, 7, 2, 12, 10, 1, 9]);