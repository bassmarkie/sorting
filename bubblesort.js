const bubbleSort = (array) => {
  // let swapCount = 0
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0 ; j < array.length - i; j++) {
      if (array[j-1] > array[j]) {
        swap(array, j-1, j)
        // swapCount++;
      }
    }
  }
  return array;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;

}

