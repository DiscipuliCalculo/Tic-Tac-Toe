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

  turn = 0;

  for (i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', (e) => {
        if (e.currentTarget.innerHTML === '') {
          let nowPlaying = currentPlayer(turn).name
          e.currentTarget.innerHTML = currentPlayer(turn).symbol;
          gameBoard.updateBoard()
          if (turn > 3) {
            let foundIndex = gameBoard.board.indexOf(currentPlayer(turn).symbol)
            while (foundIndex > -1 && foundIndex < 8) {
              if (checkWin(gameBoard.board, foundIndex) === 1) {
                window.alert(`${currentPlayer(turn).name} Wins`)
                return;
              };
              foundIndex = gameBoard.board.indexOf(currentPlayer(turn).symbol, foundIndex + 1)
            }
          }
          turn++;
          if (turn === 9) {
            window.alert('Tie Game')
          }
        }
      })
  }

  function checkVert (board, index) {
    if (board[index] === board[index + 3] && board[index] === board[index  +6]) {
      return 1;
    }
  }

  function checkHorz (board, index) {
    if (board[index] === board[index + 1] && board[index] === board[index + 2]){
      return 1;
    }
  }

  function checkDiagRight (board, index) {
    if (board[index] === board[index + 4] && board[index] === board[index + 8]){
      return 1;
    }
  }

  function checkDiagLeft (board, index) {
    if (board[index] === board[index + 2] && board[index] === board[index + 4]){
      return 1;
    }
  }


  function checkWin(board, index) {
    if (index === 0) {
      if(checkHorz(board, index) === 1 || checkVert(board, index) === 1 || checkDiagRight(board, index) === 1) {
        return 1;
      }
    }
    else if (index === 1) {
      if (checkVert(board, index) === 1) {
        return 1;
      }
    }
    else if (index === 2) {
      if (checkDiagLeft(board, index) === 1 || checkVert(board, index) === 1) {
        return 1;
      }
    }
    else if (index === 3 || index === 6) {
      if (checkHorz(board, index) === 1) {
        return 1;
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