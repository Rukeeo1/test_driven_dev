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
