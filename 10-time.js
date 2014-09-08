var strftime, net, port, server

strftime = require('strftime')
net = require('net')
port = process.argv[2]

function socketTime (socket) {
    var now, timeStr

    now = new Date()
    timeStr = strftime('%Y-%m-%d %H:%M', now)
    socket.end(timeStr)
}

server = net.createServer(socketTime)
server.listen(port)
