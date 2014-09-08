var http, bl

http = require('http')
bl = require('bl')

function collect (url, callback) {
    http.get(url, function pipe (response) {
        function deliver (err, data) {
            if (err) {
                callback(err)
                return
            }

            callback(null, data.toString())
        }

        response.pipe(bl(deliver))
    })
}

module.exports = collect
