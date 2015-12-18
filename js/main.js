var byline = document.getElementById('byline'); // Find the H2
bylineText = byline.innerHTML; // Get the content of the H2
bylineArr = bylineText.split(''); // Split content into array
byline.innerHTML = ''; // Empty current content

var span; // Create variables to create elements
var letter;

for (i = 0; i < bylineArr.length; i++) { // Loop for every letter
    span = document.createElement("span"); // Create a <span> element
    letter = document.createTextNode(bylineArr[i]); // Create the letter
    if (bylineArr[i] == ' ') { // If the letter is a space...
        byline.appendChild(letter); // ...Add the space without a span
    } else {
        span.appendChild(letter); // Add the letter to the span
        byline.appendChild(span); // Add the span to the h2
    }
}

$(function() {

    var move = 1;
    var player1 = [];
    var player2 = [];
    var winner = null;

    $(".box").click(function() {
        if (move % 2 === 0) {
            var id = $(this).attr('id');
            //add value after each click
            $(this).append("<img class='luke' src='images/luke.png'>");
            //if player chooses an occupied becomes unclickable
            $(this).css("pointer-events", "none");
            move++;
            player2.push(id);
            $(".player1").addClass('red');
            $(".player2").removeClass('green');
            row();
            column();
            diagonal();
            checkTie();
        } else {
            var id = $(this).attr('id');
            //add value after each click
            $(this).append("<img class='vader' src='images/darth.png'>");
            //if player chooses an occupied becomes unclickable
            $(this).css("pointer-events", "none");
            move++;
            player1.push(id);
            $(".player2").addClass('green');
            $(".player1").removeClass('red');
            row();
            column();
            diagonal();
            checkTie();
        }
    });

    function row() {
        if (player1.includes('top-one') && player1.includes('top-two') && player1.includes('top-three') ||
            player1.includes('middle-one') && player1.includes('middle-two') && player1.includes('middle-three') ||
            player1.includes('bottom-one') && player1.includes('bottom-two') && player1.includes('bottom-three')) {
            $(".winner-box").text("Darth Vader is the winner!");
          checkWinner("Darth Vader");
            $(".box").css("pointer-events", "none");
        } else if (player2.includes('top-one') && player2.includes('top-two') && player2.includes('top-three') ||
            player2.includes('middle-one') && player2.includes('middle-two') && player2.includes('middle-three') ||
            player2.includes('bottom-one') && player2.includes('bottom-two') && player2.includes('bottom-three')) {
            checkWinner("Luke Skywalker");
            $(".box").css("pointer-events", "none");
        }
    }

    function column() {
        if (player1.includes('top-one') && player1.includes('middle-one') && player1.includes('bottom-one') ||
            player1.includes('top-two') && player1.includes('middle-two') && player1.includes('bottom-two') ||
            player1.includes('top-three') && player1.includes('middle-three') && player1.includes('bottom-three')) {
            $(".winner-box").text("Darth Vader is the winner!");
            checkWinner("Darth Vader");
            $(".box").css("pointer-events", "none");
        } else if (player2.includes('top-one') && player2.includes('middle-one') && player2.includes('bottom-one') ||
            player2.includes('top-two') && player2.includes('middle-two') && player2.includes('bottom-two') ||
            player2.includes('top-three') && player2.includes('middle-three') && player2.includes("bottom-three")) {
            checkWinner("Luke Skywalker");
            $(".box").css("pointer-events", "none");
        }
    }

    function diagonal() {
        if (player1.includes('top-one') && player1.includes('middle-two') && player1.includes('bottom-three') ||
            player1.includes('top-three') && player1.includes('middle-two') && player1.includes('bottom-one')) {
            $(".winner-box").text("Darth Vader is the winner!");
            checkWinner("Darth Vader");
            $(".box").css("pointer-events", "none");
        } else if (player2.includes('top-one') && player2.includes('middle-two') && player2.includes('bottom-three') ||
            player2.includes('top-three') && player2.includes('middle-two') && player2.includes('bottom-one')) {
            checkWinner("Luke Skywalker");
            $(".box").css("pointer-events", "none");
        }
    }

    function checkWinner(player) {
        winner = player;
    }

    function checkTie() {
        var one = player1.length;
        var two = player2.length;
        if (one + two >= 9 && !winner) {
            console.log(winner);
            $(".winner-box").text("Luke the force is with you but you are not a Jedi yet!");
        }
    }

    //clear the board
    $(".btn-danger").on("click", function() {
        location.reload();
    });

    //on hover change box color


});


// function playerMove(symbol, moveArray, playerClass, el) {
//   var offPlayerClass = (playerClass === 'player1') ? 'player2' : 'player1';
//   var id = $(this).attr('id');
//   console.log(id);
// //add value after each click
//   $(this).append("<i class='fa "+ symbol +" fa-5x'></i>");
//   console.log(id);
// //if player chooses an occupied becomes unclickable
//   $(this).css("pointer-events", "none");
//   move++;
//   moveArray.push(id);
//   console.log(moveArray);
//   $("."+offPlayerClass).addClass('yellow');
//   $("."+playerClass).removeClass('yellow');
//   row();
//   column();
//   diagonal;
// }
