// Write a loop which prompts for a number greater than 100.
// If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100
// or cancels the input/enters an empty line.

let userInput;
do {
  userInput = prompt("Enter a number greater than 100");
} while (userInput && userInput <= 100);
