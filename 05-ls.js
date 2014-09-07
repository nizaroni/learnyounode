var path, fs, dir, ext

path = require('path')
fs = require('fs')
dir = process.argv[2]
ext = '.' + process.argv[3]

fs.readdir(dir, function printFiltered (err, list) {
    list
        .filter(function byExtension (fileName) {
            return path.extname(fileName) === ext
        })
        .forEach(function print (fileName) {
            console.log(fileName)
        })
})
