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

    //create variable to keep score and assign it a value of 0
    let score = 0;
    
    // create function that plays a single round of the game 
    function playRound (playerSelection, computerSelection) {

        // if playerSelection is rock and computerSelection is scissors
        if (playerSelection === "rock" && computerSelection === "scissors") {
            let goodNews = "You win! rock beats scissors";
            //increment score
            score++;
            // return good news
            return goodNews;

        // if playerSelection is rock and computerSelection is paper
        } else if (playerSelection === "rock" && 
        computerSelection === "paper") {
            let badNews = "You lose! paper beats rock";
            //decrement score
            score--;
            //return bad news
            return badNews;

        // if player selection is paper and computerSelection is rock
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            let goodNews = "You win! paper beats rock";
            //increment score
            score++;
            // return good news
            return goodNews;

        // if playerSelection is paper and computerSelection is scissors
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            let badNews = "You lose! scissors beat paper";
            //decrement score
            score--;
            // return bad news
            return badNews;

        // if player selection is scissors and computerSelection is rock
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            let badNews = "You lose! rock beats scissors";
            //decrement score
            score--;
            // return bad news
            return badNews;

        // if playerSelection is scissors and computerSelection is paper
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            let goodNews = "You win! scissors beat paper";
            //increment score
            score++;
            //return good news
            return goodNews;

        // if playerSelection equals computerSelection 
        } else /*if (playerSelection === computerSelection)*/ {
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

    
    






    

        

        

        


    