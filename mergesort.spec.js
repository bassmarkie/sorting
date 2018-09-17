describe('Split Array function', function() {
  it('is able to split a two length array into two halves', function() {
    expect(split([1, 2])).toEqual([[1], [2]])
  });
  it('is able to split a long array into single entries', function() {
    expect(split([1, 2, 3, 4])).toEqual([[[1], [2]], [[3], [4]]])
  });
});


describe('Merge Function', function() {
  it('is able to merge two separate arrays into one', function() {
    expect(merge([1], [2])).toEqual([1, 2])
  });
  it('is able to merge two separate arrays into one', function() {
    expect(merge([[[1], [2]], [[3], [4]]])).toEqual([1, 2, 3, 4])
  });



});
