const net = require("net");
const readline = require('readline');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // create interface for reading input from the terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // listens and interprets incoming data
  conn.on("data", (data) => {
    console.log("Message from the Server: ", (data));
  });

  // Informs client that they're connected
  conn.on("connect", () => {
    console.log("Successfully connected to server\n");
  });

  // Use small timeout to ensure messages print in order
  setTimeout(() => {
    // Prompt user for in-game username
    rl.question("Enter your initials or Player name (max 3 characters):\n", (userName) => {
      // Set your Players name, max. 3 characters
      const trimmedName = userName.substring(0, 3);

      //Send name to the server
      conn.write(`Name: ${trimmedName}\n`);

      // Close readline interface
      rl.close();

      // interpret incoming data as text
      conn.setEncoding("utf8");

    });

  }, 500);

  return conn;
};



module.exports = connect;