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
    
    //console.log(getComputerChoice());

    // create function that plays a single round of the game 
    function playRound (playerSelection, computerSelection) {
        // if playerSelection is rock and computerSelection is scissors
        if (playerSelection === "rock" && computerSelection === "scissors") {
            // return "You win! rock beats scissors"
            let goodNews = "You win! rock beats scissors";
            return goodNews;

        // if playerSelection is rock and computerSelection is paper
        } else if (playerSelection === "rock" && 
        computerSelection === "paper") {
            // return "You lose! paper beats rock"
            let badNews = "You lose! paper beats rock";
            return badNews;

        // if player selection is paper and computerSelection is rock
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            // return "You win! paper beats rock"
            let goodNews = "You win! paper beats rock";
            return goodNews;

        // if playerSelection is paper and computerSelection is scissors
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            // return "You lose! scissors beat paper"
            let badNews = "You lose! scissors beat paper";
            return badNews;

        // if player selection is scissors and computerSelection is rock
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            // return "You lose! rock beats scissors"
            let badNews = "You lose! rock beats scissors";
            return badNews;

        // if playerSelection is scissors and computerSelection is paper
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            // return "You win! scissors beat paper"
            let goodNews = "You win! scissors beat paper";
            return goodNews;

        // if playerSelection equals computerSelection 
        } else /*if (playerSelection === computerSelection)*/ {
            // return "It is a tie! play again"
            let tie = "It is a tie! play again";
            return tie;
        }

    }

    // // set playerSelection to either rock, paper or scissors
    // const playerSelection = "rock";
    // console.log(`Player Selection: ${playerSelection}`);

    // // set computerSelection to getComputerChoice function
    // const computerSelection = getComputerChoice();
    // console.log(`Computer Selection: ${computerSelection}`);

    // //log playRound function into the console
    // console.log(playRound(playerSelection, computerSelection));

    // new function to play a 5 round game
    function game () {
        // declare variables for keeping score

        // iterate over playRound function 5 times
        for (let i = 0; i < 5; i++) {
            // use prompt to get playerSelection, the 'toLowerCase()' method makes sure playerSelection is case-insensitive
            let playerSelection = prompt().toLowerCase();
            console.log(`Player Selection: ${playerSelection}`);

            // set computerSelection to getComputerChoice function 
            let computerSelection = getComputerChoice();
            console.log(`Computer Selection: ${computerSelection}`);

            // return or log playRound function
            let result = playRound(playerSelection, computerSelection);
            console.log(result);

            // keep score
            
        
        }

        // declare winner

    }

    game();







    

        

        

        


    