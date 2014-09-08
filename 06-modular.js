var lsFiltered, dir, ext

lsFiltered = require('./lib/06-ls-filtered')
dir = process.argv[2]
ext = process.argv[3]

lsFiltered(dir, ext, function printList (err, list) {
    if (err) {
        console.error(err)
        return
    }

    list.forEach(function print (fileName) {
        console.log(fileName)
    })
})
