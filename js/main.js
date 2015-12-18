$(function() {
    //alert are you ready to play
    alert("Are you ready to play Tic Tac Toe?");

    var move = 1;
    var player1 = [];
    var player2 = [];
    var winner = null;



    $(".box").click(function() {
        if (move % 2 === 0) {
              // playerMove('fa-circle-o', player2, 'player2', ".box");
            var id = $(this).attr('id');
          //add value after each click
            $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
          //if player chooses an occupied becomes unclickable
            $(this).css("pointer-events", "none");
            move++;
            player2.push(id);
            console.log(player2);
            $(".player1").addClass('red');
            $(".player2").removeClass('green');
            row();
            column();
            diagonal();
            checkTie();
        } else {
              // playerMove('fa-times', player1, 'player1', ".box");
            var id = $(this).attr('id');
          //add value after each click
            $(this).append("<i class='fa fa-times fa-5x'></i>");
          //if player chooses an occupied becomes unclickable
            $(this).css("pointer-events", "none");
            move++;
            player1.push(id);
            console.log(player1);
            $(".player2").addClass('green');
            $(".player1").removeClass('red');
            row();
            column();
            diagonal();
            checkTie();
        }
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


  function row() {
      if (player1.includes('top-one') && player1.includes('top-two') && player1.includes('top-three') ||
          player1.includes('middle-one') && player1.includes('middle-two') && player1.includes('middle-three') ||
          player1.includes('bottom-one') && player1.includes('bottom-two') && player1.includes('bottom-three')) {
            checkWinner("player 1");
            $(".box").css("pointer-events", "none");
      } else if (player2.includes('top-one') && player2.includes('top-two') && player2.includes('top-three') ||
                 player2.includes('middle-one') && player2.includes('middle-two') && player2.includes('middle-three') ||
                 player2.includes('bottom-one') && player2.includes('bottom-two') && player2.includes('bottom-three')) {
            checkWinner("player 2");
            $(".box").css("pointer-events", "none");
      }
  }

  function column() {
      if (player1.includes('top-one') && player1.includes('middle-one') && player1.includes('bottom-one') ||
          player1.includes('top-two') && player1.includes('middle-two') && player1.includes('bottom-two') ||
          player1.includes('top-three') && player1.includes('middle-three') && player1.includes('bottom-three')) {
            checkWinner("player 1");
            $(".box").css("pointer-events", "none");
      } else if (player2.includes('top-one') && player2.includes('middle-one') && player2.includes('bottom-one') ||
                 player2.includes('top-two') && player2.includes('middle-two') && player2.includes('bottom-two') ||
                 player2.includes('top-three') && player2.includes('middle-three') && player2.includes("bottom-three")) {
            checkWinner("player 2");
            $(".box").css("pointer-events", "none");
      }
  }

  function diagonal() {
    if(player1.includes('top-one') && player1.includes('middle-two') && player1.includes('bottom-three') ||
       player1.includes('top-three') && player1.includes('middle-two') && player1.includes('bottom-one')) {
          checkWinner("player 1");
          $(".box").css("pointer-events", "none");
    } else if (player2.includes('top-one') && player2.includes('middle-two') && player2.includes('bottom-three') ||
               player2.includes('top-three') && player2.includes('middle-two') && player2.includes('bottom-one')) {
          checkWinner("player 2");
          $(".box").css("pointer-events", "none");
    }
  }

  function checkWinner(player) {
    alert(player + "is the winner!");
    winner = player;
  }

  function checkTie() {
    var one = player1.length;
    var two = player2.length;
    if(one + two >= 9 && !winner) {
      alert("tie");
    }
  }


    //clear the board
    $(".btn-primary").on("click", function() {
        location.reload();
    });

    //on hover change box color


});



//at start put starwars theme song for 10 seconds and disable
//when vader turn put vader sound effect
//jedi sound effect off
//when jedi turn put jedi sound on
//vader sound off
//if vader wins - luke i am your father
//if luke wins -
//tie - you are not a jedi yet


