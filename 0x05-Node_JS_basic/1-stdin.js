const process = require("process");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askName() {
  readline.question(
    "Welcome to Holberton School, what is your name? \n",
    (name) => {
      console.log(`Your name is: ${name}`);
      checkExit(name);
    },
  );
}

function checkExit(name) {
  if (name.toLowerCase() === "exit") {
    console.log("This important software is now closing\n");
    readline.close();
  } else {
    if (!process.stdin.isTTY) {
      readline.close();
    } else {
      askName();
    }
  }
}

askName();
