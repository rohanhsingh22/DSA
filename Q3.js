// palindromes

const solve = (element) => {
    if (typeof element !== 'string') {
        return 'Input must be a string';
    }
    const ans = element.split('').reverse().join('')   
    return ans === element ? true : false
}

data = '232'
console.log(solve(data)) 