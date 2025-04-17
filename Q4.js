// Int Reversal

function solve(data) {
    if ( typeof data !== 'number') {
        return 'Input must be an Integer'
    }

    const ans = data.toString().split('').reverse().join('')
    return parseInt(ans)
}

numb = 123456789
console.log(solve(numb))