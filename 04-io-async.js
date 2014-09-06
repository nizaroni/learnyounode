var fs, filePath

fs = require('fs')
filePath = process.argv[2]

fs.readFile(filePath, 'utf8', function printLines (err, contents) {
    var lines

    lines = contents
        .split('\n')
        .length

    console.log(lines - 1)
})
