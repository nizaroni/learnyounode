var http, bl, url

http = require('http')
bl = require('bl')
url = process.argv[2]

http.get(url, function collect (response) {
    function print (err, data) {
        var str

        str = data.toString()
        console.log(str.length)
        console.log(str)
    }

    response.pipe(bl(print))
})
