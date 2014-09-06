var fs, filePath, contents, lines

fs = require('fs')
filePath = process.argv[2]

contents = fs.readFileSync(filePath)
lines = contents
    .toString()
    .split('\n')
    .length

console.log(lines - 1)
