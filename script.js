function getComputerChoice(){
    let myArr = ['Rock', 'Paper', 'Scissors'];
    let output = Math.floor(Math.random()*myArr.length);
    return myArr[output]
}

function playRound(playerChoice, computerChoice){
    let player = playerChoice.toLowerCase()
    let computer = computerChoice.toLowerCase()

    if(player === 'rock' && computer === 'scissors'){
        return `You won, ${player} beats ${computer}!`
    }

    else if(player === 'rock' && computer === 'paper'){
        return `You lost, ${computer} beats ${player}!`
    }

    else if(player === 'scissors' && computer === 'rock'){
        return `You lost, ${computer} beats ${player}!`
    }

    else if (player === 'scissors' && computer === ' paper'){
        return `You won, ${player} beats ${computer}!`
    }

    else if (player === 'paper' && computer === 'scissors'){
        return `You lost, ${computer} beats ${player}!`
    }

    else if (player === 'paper'&& computer === 'rock'){
        return `You won, ${player} beats ${computer}!`
    }

    else if (player === computer){
        return 'Tie game!'
    }

    else{
        return 'Please re-enter your choice.'
    }
}

function game(){
    
    let playerScore = 0
    let computerScore = 0
    let x = 0

    while(x<5){
        let playerChoice = prompt('Please enter Rock, Paper or Scissors')
        if (playerChoice.toLocaleLowerCase() ==='rock' ||playerChoice.toLocaleLowerCase() ==='paper'|| playerChoice.toLocaleLowerCase() ==='scissors' ){
            
            let result = playRound(playerChoice, getComputerChoice())
            console.log(result)
            
            if(result.includes('won')){
                playerScore++
            }

            else if(result.includes('lost')){
                computerScore++
            }

            x++
        }
        
        else{
            alert('Please re-enter your choice')
        }
    
    }
    
    if (playerScore > computerScore){
        return console.log('You are the winner!!')
    }
    
    else{
        return console.log('Oh no, you have lost the game!!')
    }
}