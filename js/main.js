$(function() {
//alert are you ready to play
  alert("Are you ready to play Tic Tac Toe?");


var move = 1;

  $(".box").click (function() {
    if(move % 2 === 0) {
      $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      $(this).css("pointer-events", "none");
      move++;
    } else {
      $(this).append("<i class='fa fa-times fa-5x'></i>");
      $(this).css("pointer-events", "none");
      move++;
    }
  });

//will highlight who's turn it is
// if(move % 2 === 0) {
// } else if (move % 2 === 1) {


//  possible wins =
// top 1, top 2, top 3
// middle 1, middle 2, middle 3
// bottom 1, bottom 2, bottom 3
// top 1, middle 1, bottom 1
// top 2, middle 2, bottom 2
// top 3, middle 3, bottom 3
// top 1, middle 2, bottom 3
// top 3, middle 2, bottom 1


//alert players of who the winner is:
//player 1
//player 2
//draw = "cat's game"

//on click of new game:
//clear the board
//and alert player of new game

//on reset:
//reset game and prompt players to enter name

//lock choice in
//if player chooses an occupied spot alert player space is taken

//on hover change box color


});



// function getWinner() {
//     if (isWinner('x')) {
//       return 'x';
//     }
//     if (isWinner('o')) {
//       return 'o';
//     }
//     return null;
// }
// function isWinner(player) {
//     return winsRow(player) || winsColumn(player) || winsDiagonal(player);
// }
// function winsRow(player) {
//     return allThree(player, cells('a'), cells('b'), cells('c')) ||
//            allThree(player, cells('d'), cells('e'), cells('f')) ||
//            allThree(player, cells('g'), cells('h'), cells('i'));
// }
// function winsColumn(player) {
//     return allThree(player, cells('a'), cells('d'), cells('g')) ||
//            allThree(player, cells('b'), cells('e'), cells('h')) ||
//            allThree(player, cells('c'), cells('f'), cells('i'));
// }
// function winsDiagonal(player) {
//     return allThree(player, cells('a'), cells('e'), cells('i')) ||
//            allThree(player, cells('c'), cells('e'), cells('g'));
// }
// function allThree(player, cell_one, cell_two, cell_three) {
//     return (cell_one === player) && (cell_two === player) && (cell_three === player);
// }
