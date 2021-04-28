const {sum,subtract,reverseString,capitalised} = require('./index.js')

describe('Smoke Test',()=>{
    test('Check that tests are working',()=>{
        expect(1+2).toBe(3);
    })
})

describe('Basic Maths',()=>{

    test("two minus two equals zero",()=>{
        expect(subtract(1,1)).toBe(0);
        expect(subtract(5,2)).toBe(3);
    })

})

describe('Basic English',()=>{
    
    test("capitalised string",()=>{
        expect(capitalised('hello')).toBe('HELLO');
        expect(capitalised('bonjour')).toBe('BONJOUR');
    })
    
    test("hello turns into olleh",()=>{
        expect(reverseString('hello')).toBe('olleh');
    })

})



