
/**
 * Module dependencies
 */

var net = require('net');

var PORT = process.env.PORT || 8080;
var socketCount = 0;

var server = net.createServer(function (c) {
  var id = socketCount++;

  console.log("New client connected (id=" + id + ").");

  c.on('data', function (data) {
    process.stdout.write("(id=" + id + ") rx: " + data);
  });

  c.on('end', function () {
    console.log("(id=" + id + ") disconnected.");
  });
}).listen(PORT, function () {
  console.log("Listening on port " + PORT + "...");
});
