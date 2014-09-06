var sum

sum = process.argv
    .slice(2)
    .map(function toNumber (arg) {
        return +arg
    })
    .reduce(function add (a, b) {
        return a + b
    })

console.log(sum)
