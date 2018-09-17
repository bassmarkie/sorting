describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

beforeAll(function () {
  spyOn(bubbleSort(array)).and.callThrough();
});
