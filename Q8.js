//Array Chunks

function Chunks(arr, n) {
    const chunked = []
    let index = 0

    while( index < arr.length ) {
        chunked.push(arr.slice(index, index + n))
        index += n
    }
    return chunked
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const chunkSize = 3  
const output = Chunks(input, chunkSize)
console.log(output)
