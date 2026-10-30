function createCounter() {
    let count = 0
    function innerCounter() {
        count++
        return count
    }
    return innerCounter
}

const counter = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())