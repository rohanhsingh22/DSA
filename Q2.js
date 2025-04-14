// reverse a single word
// First change the string to an array using split() method,
// then reverse the array using reverse() method, 
// and finally join the array back to a string using join() method.

function solve(input) {
    return input.split('').reverse().join('')
}

let str = 'rohan'
console.log(solve(str))