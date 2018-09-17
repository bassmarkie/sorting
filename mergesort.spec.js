describe('Split Array function', function() {
  it('is able to split a two length array into two halves', function() {
    expect(split([1, 2])).toEqual([[1], [2]])
  });
  it('is able to split a long array into single entries', function() {
    expect(split([4, 2, 3, 1])).toEqual([[4, 2], [3, 1]])
  });
});


describe('Merge Function', function() {
  it('is able to merge two separate arrays into one', function() {
    expect(merge([1], [2])).toEqual([1, 2])
  });
  it('is able to merge two separate arrays into one', function() {
    expect(merge([1, 5], [2, 4])).toEqual([1, 2, 4, 5])
  });

});

describe('MergeSort Function', function() {
  it('sorts and merges an array', function() {
    expect(mergeSort([7,2,3,6])).toEqual([2,3,6,7])
  });
  it('sorts and merges an array', function() {
    expect(mergeSort([34,26,301,6])).toEqual([6,26,34,301])
  });
});
