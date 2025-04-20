// Two Sum O(n2)

function twoSum(arr, target) {
    for (let i = 0; i< arr.length; i++) {
        for (let j = i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
            else if (arr[i] + arr[j] > target) {
                j++
            }
        }
    }
    return []
}

const arr = [2, 7, 11, 15]
const target = 9
const output = twoSum(arr, target)
console.log(output)