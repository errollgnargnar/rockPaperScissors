function computerPlay() {
    let randNum = (Math.floor(Math.random() * 3)+1);
    switch(randNum){
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection){
    let playSelCaps = playerSelection.toUpperCase();
    let compSelCaps = computerSelection.toUpperCase();
    if((playSelCaps === 'ROCK' && compSelCaps === 'ROCK') ||
       (playSelCaps === 'PAPER' && compSelCaps === 'PAPER') ||
       (playSelCaps === 'SCISSORS' && compSelCaps === 'SCISSORS')){
        return 'Tie!';
    }
    if(playSelCaps === 'ROCK' && compSelCaps === 'PAPER'){
        return 'You Lose! Paper beats Rock';
    }
    if(playSelCaps === 'ROCK' && compSelCaps === 'SCISSORS'){
        return 'You Win! Rock beats Scissors';
    }
    if(playSelCaps === 'PAPER' && compSelCaps === 'ROCK'){
        return 'You Win! Paper beats Rock';
    }
    if(playSelCaps === 'PAPER' && compSelCaps === 'SCISSORS'){
        return 'You Lose! Scissors beats Paper';
    }
    if(playSelCaps === 'SCISSORS' && compSelCaps === 'ROCK'){
        return 'You Lose! Rock beats Scissors';
    }
    if(playSelCaps === 'SCISSORS' && compSelCaps === 'PAPER'){
        return 'You Win! Scissors beats Paper';
    }
}
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=1; i <= 5; i++){
        let playerSelPrompt = prompt('rock, paper, or scissors?');
        let playerSelection = playerSelPrompt;
        let computerSelection = computerPlay();

        if(playRound(playerSelection,computerSelection).indexOf('Win!') > 0){
            playerScore++;
        } else if((playRound(playerSelection,computerSelection).indexOf('Win!') === -1) &&
        (playRound(playerSelection,computerSelection).indexOf('Tie!') === -1)){
            computerScore++;
        } else if(playRound(playerSelection,computerSelection).indexOf('Tie!') > 0){
        }
        console.log(playerScore,computerScore);
        console.log(playRound(playerSelection,computerSelection));

    }
    if(playerScore > computerScore){
        console.log('YOU WIN THE GAME');
    } else if(playerScore === computerScore){
        console.log('TIE! TRY AGAIN');
    } else{
        console.log('YOU LOSE, TRY AGAIN');
    }
}