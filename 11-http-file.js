var http, fs, port, filePath

http = require('http')
fs = require('fs')

port = process.argv[2]
filePath = process.argv[3]

function streamFile (request, response) {
    fs.createReadStream(filePath).pipe(response)
}

server = http.createServer(streamFile)
server.listen(port)
