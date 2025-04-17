// FizzBuzz question
// 1. Print numbers from 1 to n
// 2. For multiples of 3, print "Fizz" instead of the number
// 3. For multiples of 5, print "Buzz" instead of the number    
// 4. For multiples of both 3 and 5, print "FizzBuzz" instead of the number
// 5. For all other numbers, print the number itself
// 6. The input number n should be an integer greater than 0

function solve(data) {
    if (typeof data !== 'number' || data <= 0) {
        return 'Input must be a positive integer greater than 0'
    }

    for (let i = 1; i<= data; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }

    return 'No output generated'
}

const input = 15
const output = solve(input)
