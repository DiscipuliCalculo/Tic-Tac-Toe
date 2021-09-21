let gameBoard = (function() {
    let board = ['','','','','','','','','']
    let squares = document.getElementsByClassName('gamesquare')

    for (i = 0; i < squares.length; i++) {
      squares[i].innerHTML = board[i];
    };

})();
  
let gameController = (function() {
  let squares = document.getElementsByClassName('gamesquare')
  let player1 = createPlayer('player1', 'X');
  let player2 = createPlayer('player2', 'O');

  turn = 0;
  
  function currentPlayer(turn) {
    if (turn % 2 === 0) {
      return player1
    }
    else {
      return player2
    }
  }

  for (i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', (e) => {
        if (e.currentTarget.innerHTML === '') {
          e.currentTarget.innerHTML = currentPlayer(turn).symbol;
          console.log(turn)
          console.log(currentPlayer(turn).name)
          turn++;
        }
      })
  }

  return {
    player1,
    player2
  }
})();

let displayController = (function() {
  
})();

function createPlayer(name, symbol) {
  name: name;
  symbol: '';

  return {
    name,
    symbol
  }
}