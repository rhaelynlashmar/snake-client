const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text 
  conn.setEncoding("utf8");

  // listens and interprets incoming data
  conn.on("data", (data) => {
    console.log("Message from the Server: ", data);
  });

  // handle errors on connection
  conn.on("error", (err) => {
    console.error("Connection error: ", err.message);
  });

  // Informs user that they're connected
  conn.on("connect", () => {
    console.log("Successfully connected to server\n");
    // User is always me, I guess
    conn.write("Name: RAE"); 

  });

  return conn;
};

module.exports = connect;