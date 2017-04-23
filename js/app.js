/**
 * Created by ben on 22/04/2017.
 */


function makeBoardArray(width, height) {
    var board = [];
    var cell = 0;
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            cell = {
                x: i,
                y: j,
                mine: addMine()
            };
            row.push(cell);
        }
        board.push(row);
    }
    return board;
}
var boardArray = makeBoardArray(16,16);

function addMine() {
    return Math.random()<0.15;
}

function makeCell(x,y,mine) {
    var cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("clearfix");
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.addEventListener("click", function(){
        console.log("you clicked cell: " + this.dataset.x + ", " + this.dataset.y);
        this.classList.toggle("selected");
        if (mine)
            this.classList.toggle("mine");
        //detectAdjacentCells(x,y);
    });
    return cell;
}

function makeRow() {
    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("clearfix");
    return row;
}

function makeBoard(boardArray) {
    var board = document.createElement("div");
    for (var i=0; i<boardArray.length; i++){
        var row = makeRow();
        for (var j=0; j<boardArray[0].length; j++) {
            var mine = boardArray[i][j].mine;
            row.appendChild(makeCell(i,j,mine));
        }
        board.appendChild(row);
    }

    //board
    return board;
}

var board = makeBoard(boardArray);

var gameContainer = document.getElementById('game-container');
gameContainer.appendChild(board);

