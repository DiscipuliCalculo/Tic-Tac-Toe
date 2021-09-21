let gameBoard = (function() {
    let board = ['','','','','','','','','']
    let squares = document.getElementsByClassName('gamesquare')

    for (i = 0; i < squares.length; i++) {
      squares[i].innerHTML = board[i];
    };

    for (i = 0; i < squares[i].length; i++) {
      if (squares[i].innerHTML === '') {
        squares[i].addEventListener('click', (e) => {
          e.currentTarget.innerHTML = 'X'
        })
      }
    }

})();
  
let game = (function() {
  player1 = createPlayer('player1');
  player1.symbol = 'X'
  player2 = createPlayer('player2');
  player2.symbol = 'O'


})
let displayController = (function() {
  
})();

function createPlayer(name) {
  name: name;
  symbol: '';

  return {
    name,
    symbol
  }
}

console.log(player1.symbol)