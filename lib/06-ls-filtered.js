var path, fs

path = require('path')
fs = require('fs')

function lsFiltered (dir, ext, callback, pew) {
    ext = '.' + ext

    fs.readdir(dir, function printFiltered (err, list) {
        var filtered

        if (err) {
            callback(err)
            return
        }

        filtered = list.filter(function byExtension (fileName) {
            return path.extname(fileName) === ext
        })

        callback(null, filtered)
    })
}

module.exports = lsFiltered
