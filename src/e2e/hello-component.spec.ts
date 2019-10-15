describe('calculate', function() {
   it('sqrt', function() {
     let result = Math.sqrt(25);
     
     expect(result).toBe(5);
   }); 

   it('pow', function() {
    let result = Math.pow(5, 2);

    expect(result).toBe(25);
   });
   
 });