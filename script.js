
  $(document).ready(function() {
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
  
    // declaring the winning combos and how to respond to them. 
    const checkWinner=()=>{
      let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < winningCombos.length; i++) {
        let [a, b, c] = winningCombos[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
  
      if (!board.includes("")) {
        return "draw";
      }
  
      return null;
    }
//   post the text depending on context of the situation. ie: who's turn is it, or who won. 
    const updateStatus=()=> {
      let winner = checkWinner();
      if (winner === "draw") {
        $("#status").text("It's a draw!");
      } else if (winner) {
        $("#status").text(`Player ${winner} wins!`);
      } else {
        $("#status").text(`Player ${currentPlayer}'s turn`);
      }
    }
  
    // using the reset button to clear all squares on the board. 
    const resetGame=()=>{
      currentPlayer = "X";
      board = ["", "", "", "", "", "", "", "", ""];
      $(".square").text("");
      updateStatus();
    }
//   Determine if the "x" or "o" should display depending on who's turn it is. 
    $(".square").click(function() {
      let index = $(this).data("index");
      if (!board[index]) {
        board[index] = currentPlayer;
        $(this).text(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus();
      }
    });
  
    $("#resetBtn").click(function() {
      resetGame();
    });
  
    resetGame();
  });
 