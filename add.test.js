const add = require('./add.js');

test('adds 2 + 2 to equal 4', () => {
    //first add is the file name (add.js)..forgive my crazy syntax
    expect(add.add(2,2)).toBe(4);
});

test('adds 2 + 2 to NOT equal 5', ()=>{
    //negating the test
    expect(add.add(2,2)).not.toBe(5);
});

test('shoul return null', ()=>{
    expect(add.isNull()).toBe(null);
});

test('should be falsy', function(){
    expect(add.checkValue(undefined)).toBeFalsy();
    expect(add.checkValue(0)).toBeFalsy();
    expect(add.checkValue(null)).toBeFalsy();
});

test('should return Rukee\'s Object', function(){
    expect(add.createUser()).toEqual({firstName: 'Rukee', lastName: 'Ojigbo'});
});

test('should be less than 1600', function(){
    expect(add.lessOrGreater(800,700)).toBeLessThan(1600);
});

test('should be greater than 1200', function(){
    expect(add.lessOrGreater(200,1100)).toBeGreaterThan(1200);
});

//test for regex
test('should not contain I', function(){
    expect('team').not.toMatch(/I/i)
});