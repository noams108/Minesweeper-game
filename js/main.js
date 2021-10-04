'use strict'
const BTN = '🙂'
const WIN = '😎'
const LOSE = '🥺'
const MINES = '💣'


var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
}
var gLevel = {
    size: 4,
    mines: 2
}
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
function init() {
    gBoard = createBoard(gLevel.size)
    printMat(gBoard, '.board')
}
function createBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            var cells=checkCells(gBoard)
        //    var takeCells= sentCells(cells)
            board[i][j] = cells.countNeghbers
        }
    }
    board[1][1] = MINES;
    board[3][3] = MINES;
    return board
}
function checkCells(board) {
    var neghbers = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            neghbers.push({
                location: {
                    cellI: i,
                    cellJ: j,
                },
                countNeghbers: setMinesNegsCount(i, j, gBoard)
            })
        }
    }
    return neghbers
}
function sentCells(cells){
    for(var i=0;i<cells.length;i++){
        console.log(cells[i]);
        // renderCell(cells[i].location.cellI, cells[i].location.cellJ,cells[i].countNeghbers)
    }
    return
}
function setMinesNegsCount(cellI, cellJ, mat) {
    var count = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= mat[i].length) continue
            if (i === cellI && j === cellJ) continue
            if (mat[i][j] === MINES) count++
        }

    }
    return count;


}