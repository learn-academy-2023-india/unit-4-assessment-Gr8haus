// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
describe("fibonacci", () => {
    it("returns the fibonacci sequence in an array of the given length", () => {
        // const fibonacciLength1 = 6
        const fibonacciLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    })
    it("returns the fibonacci sequence in an array of the given length", () => {
        // const fibonacciLength2 = 10
        const fibonacciLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(fibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
// b) Create the function that makes the test pass.
function fibonacci (length){
    const fibonacci = [1, 1]
    for(let i = 2; i < length; i++){
        fibonacci.push(fibonacci [i - 1] + fibonacci [ i - 2])
    }
    return fibonacci
}
// Pseudo code:
// Function fibonacci
//     Input: length (a number greater than or equal to 2)
//     Output: an array containing the Fibonacci sequence of the given length

//     Create an array fibonacci with the initial values [1, 1]
    
//     For i from 2 to length - 1
//         Calculate the next Fibonacci number: fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
//         Add the calculated number to the fibonacci array
    
//     Return the fibonacci array
// End Function


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe('calculateVoteTally for votes1', () => {
    test('for votes1', () => {
        const votes1 = { upVotes: 13, downVotes: 2 }
        // Expected output: 11
        expect(calculateVoteTally(votes1)).toEqual(11)
    })
    test('calculateVoteTally for votes2', () => {
        const votes2 = { upVotes: 2, downVotes: 33 }
        // Expected output: -31
        expect(calculateVoteTally(votes2)).toEqual(-31)
    })
})

// b) Create the function that makes the test pass.
function calculateVoteTally(votes) {
    return votes.upVotes - votes.downVotes
}
// Pseudo code:
// Function calculateVoteTally
//     Input: votes (an object with properties upVotes and downVotes)
//     Output: the end tally (a number)

//     Return (votes.upVotes - votes.downVotes)
// End Function