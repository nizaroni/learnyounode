var http, url, port, server

http = require('http')
url = require('url')

port = process.argv[2]

function handler (request, response) {
    var reqUrl, resData, date

    reqUrl = url.parse(request.url, true)
    resData = {}
    date = new Date(reqUrl.query.iso)

    if (reqUrl.pathname === '/api/parsetime')  {
        resData.hour = date.getHours()
        resData.minute = date.getMinutes()
        resData.second = date.getSeconds()
    } else if (reqUrl.pathname === '/api/unixtime') {
        resData.unixtime = date.getTime()
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(resData))
}

server = http.createServer(handler)
server.listen(port)
