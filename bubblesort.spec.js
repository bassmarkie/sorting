describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an simple integer array', function(){
    expect( bubbleSort([6,2,7,9,1]) ).toEqual( [1,2,6,7,9] );
  });

});
