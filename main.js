// Understand the problem
    // two players select either rock, paper, or scissors at the same time and one player wins based on the following: 
        // - rock beats scissors
        // - scissors beat paper
        // - paper beats rock
    // if both players select the same option, no one wins (a tie)
    // in this case, the computer is the second player so the computer's choice will have to be randomly generated

// Plan
    // input - player selection & computer selection 
    // create function for computer selection 
    // output - winning or losing message depending on player selection & computer selection 
    // create function to play the game(playerSelection, computerSelection) - return output
    // iterate to play game five times - keep score and report a winner or loser at the end

// Divide & Conquer - Pseudocode
    // create function to generate computer choice
    function getComputerChoice() {
        // create array of options
        let options = ["rock", "paper", "scissors"];
        // select array options at random
            // Use Math.random() function to get the random number between(0-1, 1 exclusive).
            // Multiply it by the array length to get the numbers between(0-arrayLength).
            // Use Math.floor() to get the index ranging from(0 to arrayLength-1).
            // Math.floor always rounds down
        let select = options[Math.floor(Math.random() * options.length)];
        return select;
    }
    
    console.log(getComputerChoice());

    // create function that plays a single round of the game 
        // if playerSelection is rock and computerSelection is scissors
            // return "You win! rock beats scissors"
        // if playerSelection is rock and computerSelection is paper
            // return "You lose! paper beats rock"
        // if player selection is paper and computerSelection is rock
            // return "You win! paper beats rock"
        // if playerSelection is paper and computerSelection is scissors
            // return "You lose! scissors beat paper"
        // if player selection is scissors and computerSelection is rock
            // return "You lose! rock beats scissors"
        // if playerSelection is scissors and computerSelection is paper
            // return "You win! scissors beat paper"
        // if playerSelection equals computerSelection 
            // return "It is a tie! play again"

        // make playerSelection case-insensitive

    // set playerSelection to either rock, paper or scissors

    // set computerSelection to getComputerChoice function

    // log playRound function into the console

        

        

        


    