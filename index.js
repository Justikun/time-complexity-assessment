//----- TIME COMPLEXITY -----//
//O(n^2)
const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log("--- addToZero() ---")
console.log(addToZero([]))
// -> False
console.log(addToZero([1]))
// -> False
console.log(addToZero([1, 2, 3]))
// -> False
console.log(addToZero([1, 2, 3, -2]), '\n')
// -> True



//----TIME COMPLEXITY-----//
// O(n)
const hasUniqueChars = (str) => {
    str = str.toLowerCase()
    uniqueChar = new Set

    for (let i = 0; i < str.length; i++) {
        uniqueChar.add(str[i])
    }

    if (str.length === uniqueChar.size) {
        return true
    }

    return false
}
console.log("--- hasUniqueChars() ---")
console.log(hasUniqueChars("Monday"))
// -> True
console.log(hasUniqueChars("Moooonday"), '\n')
// -> False



//----TIME COMPLEXITY-----//
// O(n^2)
const isPangram = (str) => {
    str = str.toLowerCase()

    let alphabet = 'abcdefghijklmnopqrstuvwyxz'
    let contained = new Set()

    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            contained.add(str[i])
        }

        if (contained.size == 26) {
            return true
        }
    }
    return false
}

console.log("--- isPangram() ---")
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True
console.log(isPangram("I like cats, but not mice"), '\n')
// -> False


//----TIME COMPLEXITY-----//
// O(n)
const findLongestWord = arr => {
    let longestWordLength = arr[0].length

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWordLength = arr[i].length
        }
    }

    return longestWordLength
}

console.log("--- findLongestWord() ---")
console.log(findLongestWord(["hi", "hello"]))
// -> 5
