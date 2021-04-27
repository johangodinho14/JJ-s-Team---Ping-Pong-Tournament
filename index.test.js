const {sum} = require('./index.js')

test("Check that tests are working",()=>{
    expect(sum(2,2)).toBe(4);
    expect(true).toBeTruthy();
})