$(function() {
    //alert are you ready to play
    alert("Are you ready to play Tic Tac Toe?");

    var move = 1;


    $(".box").click(function() {
        if (move % 2 === 0) {
            var id = $(this).attr('id');
            $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
            //if player chooses an occupied becomes unclickable
            $(this).css("pointer-events", "none");
            move++;
            console.log(id);
        } else {
            var id = $(this).attr('id');
            $(this).append("<i class='fa fa-times fa-5x'></i>");
            //if player chooses an occupied becomes unclickable
            $(this).css("pointer-events", "none");
            move++;
            console.log(id);
        }
    });

    ///if 1 === 2 ===  3
    //add value after each click


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
    // // // top 3, middle 2, bottom 1
    // if ((player1 === ) || (player1 === ) || (player1 === "s7", "s8", "s9") || (player1 === "s1", "s4", "s7") || (player1 === "s2", "s5", "s8") || (player1 === "s3", "s6", "s9") || (player1 === "s1", "s5", "s9") || (player1 === "s3", "s5", "s7")) {

    // // }
    // // else if If ((player2 === ) || (player2 === "s4", "s5", "s6") || (player2 === "s7", "s8", "s9") || (player2 === "s1", "s4", "s7") || (player2 === "s2", "s5", "s8") || (player2 === "s3", "s6", "s9") || (player2 === "s1", "s5", "s9") || (player2 === "s3", "s5", "s7")) {

    // // }
    //alert players of who the winner is:
    //player 1
    //player 2
    function getWinner() {
        if (winnerIsX()) {
            alert("Winner is Player 1!");
        }
        else if (winnerIsO()) {
            alert("Winner is Player 2!");
        }
        else {
            alert("Cat's Game");
        }
    }

    //on click of new game:
    //clear the board
    //and alert player of new game
    $(".btn-primary").on("click", function() {

    });

    //on reset:
    //reset game and prompt players to enter name
    $(".btn-danger").on("click", function() {

    });

    //on hover change box color


});


