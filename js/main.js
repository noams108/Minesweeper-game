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
    console.log(gBoard);
    checkCells(gBoard)

    printMat(gBoard, '.board')

}
function createBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = ''
        }
    }
    board[1][1] = MINES;
    board[3][3] = MINES;
    return board
}
function checkCells(board) {
    console.log(board);
    var neghbers = []
    for (var i = 0; i < board.lengh; i++) {
        var numsI=board[i]
        for (var j = 0; j < numsI; j++) {
            // neghbers.push({ i:i, j:j })
            // setMinesNegsCount(i, j, gBoard)
        }
        console.log(neghbers);
        
    }
    console.log(i);
    console.log(j);
}
function setMinesNegsCount(cellI, cellJ, mat) {
    var count = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i > mat.lengh) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j > mat[i].lengh) continue
            if (i === cellI && j === cellJ) continue
            if (mat[i][j] === MINES) count++
        }
        console.log(count);
    }


}