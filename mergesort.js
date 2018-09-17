function split(wholeArray) {
  if (wholeArray.length === 1) return wholeArray;
  else {
    const middle = Math.floor(wholeArray.length/2);
    const left = wholeArray.slice(0, middle)
    const right = wholeArray.slice(middle)
    return [split(left), split(right)]
  }
}

function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++
  } else {
    result.push(right[rightIdx]);
    rightIdx++;
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
  }
}
