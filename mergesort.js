function split(wholeArray) {
  if (wholeArray.length <= 1) return wholeArray;
  else {
    const middle = Math.floor(wholeArray.length / 2);
    const firstHalf = wholeArray.slice(0, middle)
    const secondHalf = wholeArray.slice(middle)
    return [firstHalf, secondHalf]
  }
}

function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx++]);
    } else {
      result.push(right[rightIdx++]);
    }
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}

function mergeSort(array){
    if (array.length < 2) return array
    else {
      let middle = Math.floor(array.length / 2);
      let firstHalf = array.slice(0, middle)
      let secondHalf = array.slice(middle)
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
