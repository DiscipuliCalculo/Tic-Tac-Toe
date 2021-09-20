let gameBoard = (function() {
    let board = ['','X','','O','','','','X','X']
    let squares = document.getElementsByClassName('gamesquare')

    for (i = 0; i < squares.length; i++) {
      squares[i].innerHTML = board[i];
    };

})();
  
let displayController = (function() {
  
})();
  
  
let squares = document.getElementsByClassName('gamesquare');
console.log(squares.length);