describe('test index.js', function(){

  it('test admin button',function(){
      onReady();

      for (var i=0; i<3; i++)
      expect(click[i]()).toEqual(false);
  })

})
