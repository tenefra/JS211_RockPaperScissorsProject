// uses strict mode so strings are not coerced, variables are not hoisted, etc...
"use strict"

// brings in the assert module for unit testing
const assert = require("assert")
// brings in the readline module to access the command line
const readline = require("readline")
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // Write code here
  // Use the unit test to see what is expected
  hand1 = hand1.toLowerCase().trim()
  hand2 = hand2.toLowerCase().trim()

  //In the case of a tie
  if ((hand1 != "rock" && hand1 != "paper" && hand1 != "scissors") || (hand2 != "rock" && hand2 != "paper" && hand2 != "scissors")) {
    return "Please type rock, paper, or scissors as your input."
    getPrompt()
  }

  //In the case of a tie
  if (hand1 === hand2) {
    return "It's a tie!"
  }

  //If player 1 throws rock
  if (hand1 === "rock") {
    if (hand2 == "scissors") {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }

  //If player 1 throws paper
  if (hand1 === "paper") {
    if (hand2 == "rock") {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }

  //If player 1 throws scissors
  if (hand1 === "scissors") {
    if (hand2 == "paper") {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2))
      getPrompt()
    })
  })
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === "function") {
  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!")
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!")
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!")
    })
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!")
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!")
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!")
    })
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!")
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!")
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!")
    })
    it("should detect empty input and prompt user to re-enter the input", () => {
      assert.equal(rockPaperScissors("", ""), "Please type rock, paper, or scissors as your input.")
      assert.equal(rockPaperScissors("rock", ""), "Please type rock, paper, or scissors as your input.")
      assert.equal(rockPaperScissors("rock", "ro"), "Please type rock, paper, or scissors as your input.")
    })
  })
} else {
  // always returns ask the user for another input
  getPrompt()
}
