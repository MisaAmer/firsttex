// window.addEventListener('DOMContentLoaded', ( ) =>
// {

//     resetButton.addEventListener('click',resetBoard)
// });

const firstPlayer = "X";
const secondPlayer = "O";
let cells = null;

function restartBtn(boardCells){

    console.log("reset button clicked");
       for(let i=0 ; i < boardCells.length ; i++ ){
        boardCells[i].textContent ='';

        }
    }

function isWinnerBySymbol(board){
       const combinations2Check = [
               [0, 1, 2],
		       [3, 4, 5],
		       [6, 7, 8],
		       [0, 3, 6],
		       [1, 4, 7],
		       [2, 5, 8],
	           [0, 4, 8],
		       [2, 4, 6],
        ];


     for (let index = 0; index < combinations2Check.length; index++) {
              const [a,b,c] = combinations2Check[index];
               if (
                     !!board [a].textContent &&
                     board [a].textContent === board[b].textContent &&
                     board [b].textContent === board[c].textContent 

                  ) {
                        return true;
                
                }
    
      }

   return false;
}
/*
function resetBoard () {

                  console.log("reset button clicked");
          }
*/

const init = function init() {

       const playersScores = [0,0];
/*
       playersScores[0]=0;  /// x
       playersScores[1]=0;  /// o
*/
       let currentPlayer = firstPlayer;

       // הוספת מאזינים לתאים 
        cells= document.querySelectorAll(".board__cell");

       for (let index = 0; index < cells.length; index++) {

                const cell = cells[index];
                cell.addEventListener("click", function cellClick(event) {

                                        console.log(event.target); 

                                        if (cell.textContent) {
                                            alert("already taken!!");
                                            return;
                                        }

                                        if (currentPlayer === firstPlayer) {
                                             cell.textContent = firstPlayer;
           
                                        } else {
                                              cell.textContent = secondPlayer;
                                          } 
    
                                        /*
                                        if ( isWinnerBySymbol(cells) ) {
                                             alert(`${currentPlayer} is the Winner!!`);
                                        }*/
       
                                       if( isWinnerBySymbol(cells) === true ){
                                    
                                           alert(currentPlayer + ' is the winner')
                                           
                                           currentPlayer === firstPlayer ?  playersScores[0]++ : playersScores[1]++ ;

                                           console.log(playersScores);

                                           restartBtn(cells);
                                       }
    
                                        // currentPlayer = (currentPlayer === firstPlayer ? secondPlayer : firstPlayer);

                                        if(currentPlayer === firstPlayer){
                                            currentPlayer = secondPlayer;
                                        }else currentPlayer = firstPlayer;
                        
                                  }
          );

    }
    
    const resetButton= document.querySelector("#restartBtn");

                resetButton.addEventListener("click", function restartClicked (){
                    restartBtn(cells);

                } );



};
document.addEventListener("DOMContentLoaded", init); 