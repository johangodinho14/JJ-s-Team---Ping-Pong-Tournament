const {sum,subtract,reverseString} = require('./index.js')

describe('Basic Mafs',()=>{

    test("Check that tests are working",()=>{
        expect(sum(2,2)).toBe(4);
        expect(true).toBeTruthy();
    })

    test("two minus two equals zero",()=>{
        expect(subtract(1,1)).toBe(0);
        expect(subtract(5,2)).toBe(3);
    })

    test("hello turns into olleh",()=>{
        expect(reverseString('hello')).toBe('olleh');
    })
})