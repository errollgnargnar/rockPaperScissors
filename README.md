# Rock Paper Scissors Console Game

## About this Repo
This repo consists of two files
* index.html
* external.js

The html simply has a button which when pressed will create a prompt for user input. You need to *open the browser console* to see the score and game take place. 

## The Script

The script uses 3 functions to run
* computerPlay()
>> this function creates a random number between 1-3 and then that value gets placed into a switch where it returns 'rock' 'paper' or 'scissors'.
* playRound(playerSelection,computerSelection)
>> this function takes two string parameters which are turned into all upperCase strings and are then placed into a series of conditional statements to output the appropriate message for result of the round. 
* game()
>> the function here is run the playRound function 5 times, keep score, account for ties, and announce a winner at the end of the 5 rounds. 

