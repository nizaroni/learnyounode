var collect, urls, pending, results

collect = require('./lib/09-collect')
urls = process.argv.slice(2)

pending = urls.length
results = []

function tickDown () {
    pending -= 1

    if (pending <= 0) {
        results.forEach(function print (str) {
            console.log(str)
        })
    }
}

urls.forEach(function request (url, ind) {
    collect(url, function (err, str) {
        if (err) {
            console.error(err)
            return
        }

        results[ind] = str
        tickDown()
    })
})
