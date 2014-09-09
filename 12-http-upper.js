var http, map, port, server

http = require('http')
map = require('through2-map')

port = process.argv[2]

function bufferUpper (buff) {
    return buff.toString().toUpperCase()
}

function postUpper (request, response) {
    request
        .pipe(map(bufferUpper))
        .pipe(response)
}

server = http.createServer(postUpper)
server.listen(port)
