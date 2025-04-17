// Sentence Capitalization

function solve(data) {
    const splitData = data.toLowerCase().split(/\s+/)
    const result = splitData.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return result.join(' ')
}


const input = "hello world! this is a test."
const output = solve(input)
console.log(output) 