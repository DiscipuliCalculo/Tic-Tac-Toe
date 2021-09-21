let gameBoard = (function() {
    let board = ['','','','','','','','','']
    let squares = document.getElementsByClassName('gamesquare')

    function updateBoard() {
      for (i = 0; i < squares.length; i++) {
        board[i] = squares[i].innerHTML ;
      };
    };

    return {
      board,
      updateBoard
    }
})();

  
let gameController = (function() {
  let squares = document.getElementsByClassName('gamesquare')
  let player1 = createPlayer('player1', 'X');
  let player2 = createPlayer('player2', 'O');
  let newBoard = []

  turn = 0;

  for (i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', (e) => {
        if (e.currentTarget.innerHTML === '') {
          let nowPlaying = currentPlayer(turn).name
          e.currentTarget.innerHTML = currentPlayer(turn).symbol;
          console.log('turn #:', turn)
          console.log('current player:', nowPlaying)
          gameBoard.updateBoard()
          if (turn > 3) {
            //console.log(gameBoard.board.indexOf(currentPlayer(turn).symbol));
            let foundIndex = gameBoard.board.indexOf(currentPlayer(turn).symbol)
            if (foundIndex < 3) {       //vertical check
              console.log(foundIndex);
              if (gameBoard.board[foundIndex] === gameBoard.board[foundIndex + 3] && gameBoard.board[foundIndex] == gameBoard.board[foundIndex + 6]){
                return console.log(currentPlayer(turn).name, 'Wins')
              }
            }
            else if (foundIndex === 0 || foundIndex === 3 || foundIndex === 6) {
              if (gameBoard.board[foundIndex] === gameBoard.board[foundIndex + 1] && gameBoard.board[foundIndex] === gameBoard.board[foundIndex +++2]){
                return console.log(currentPlayer(turn).name, 'Wins')
              }
            }
          }
          console.log(gameBoard.board);
          turn++;
        }
      })
  }

  function checkWin(board) {
    let foundIndex = board.indexOf(current(turn).symbol)
    if (foundIndex < 3) {       //vertical check
      if (board[foundIndex] === board[foundIndex + 3] && board[foundIndex] === board[foundIndex +++6]) {
        return console.log(currentPlayer(turn).name, 'Wins')
      }
    }
    else if (foundIndex === 0 || foundIndex === 3 || foundIndex === 6) {
      if (board[foundIndex] === board[foundIndex + 1] && board[foundIndex] === board[foundIndex +++2]){
        return console.log(currentPlayer(turn).name, 'Wins')
      }
    }
  }

  function currentPlayer(turn) {
    if (turn % 2 === 0) {
      return player1
    }
    else {
      return player2
    }
  }

  return {
    player1,
    player2
  }
})();


function createPlayer(name, symbol) {
  name: name;
  symbol: '';

  return {
    name,
    symbol
  }
}