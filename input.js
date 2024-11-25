// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', handleUserInput); // Listens for specific user input to exit program
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

// set up an exit route from program with specific key
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }

  // Map Keys to movement commands
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === '1') {
    // Keys for in-game commentary
    connection.write("Say: Wassaaaap");
  } else if (key === '2') {
    connection.write("Say: Ouchie");
  } else if (key === '3') {
    connection.write("Say: Nice!");
  }

};



module.exports = setupInput;