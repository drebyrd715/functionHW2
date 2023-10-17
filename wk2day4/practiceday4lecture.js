// rock, paper, sciccors
//If player1 chooses rock
    //then player2 chooses scissors
// then print player1 win
  // Else if player2 chooses paper
// then print player2 wins
  // Else if player1 chooses scissors
// then print player1 wins
  // Else if player2 chooses rock
// Then print player2 wins
  // Else if player 1 chooses paper
// Then print player1 wins
  // Else if player2 chooses paper
// Then print a Tie

let player1 = 'paper';
let player2 = 'paper';
if (player1 === 'rock') {
    if (player2 === 'rock') {
        console.log('Tie');
    } else if (player2 === 'paper') {
        console.log('player1 wins');
    } else if (player2 === 'scissor') {
        console.log('player1 wins');
    }
} else if (player1 === 'paper') {
    if (player2 === 'rock') {
        console.log('Player2 wins');
    } else if (player2 === 'paper') {
        console.log('Tie');
    } else if (player2 === 'scissor') {
        console.log('player2 wins');
    }
} else if (player1 === 'scissor') {
    if (player2 === 'rock') {
        console.log('Player2 wins');
    } else if (player2 === 'paper') {
        console.log('player2 wins');
    } else if (player2 === 'scissor') {
        console.log('Tie');
    }
}
// //Use a loop to print multiples of 5 up to 100
// for (let i = 5; i <= 100; i = i+5){
//     console.log(i)
// }
