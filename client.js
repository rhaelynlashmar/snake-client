const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // listens and interprets incoming data
  conn.on("data", (data) => {
    console.log("Message from the Server: ", (data))
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;