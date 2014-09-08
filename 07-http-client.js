var http, url

http = require('http')
url = process.argv[2]

http.get(url, function printResponse (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
})
