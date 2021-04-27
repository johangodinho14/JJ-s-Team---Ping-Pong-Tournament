function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function capitalised(string){
    return string.toUpperCase()
}

function reverseString(string){
    return string.split("").reverse().join("");
}

module.exports  = { sum,subtract,reverseString,capitalised };
