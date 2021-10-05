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
   var res= checkCells(gBoard)
   cellClicked()
    console.log(res);
    console.log(gBoard);

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

    
    board[3][3] = MINES
    board[1][1]=MINES
    return board
}

function checkCells(board) {
    var neighbors = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            neighbors.push(setMinesNegsCount(i, j, board))
            if (board[i][j] === MINES) continue
            gBoard[i][j] = neighbors[j]
        }
    }
    console.log(neighbors);
    console.log(gBoard);
    return neighbors
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
function cellClicked(elCell, i, j) {
    var show=document.querySelector('.cell')
    if (gBoard.isShown){
        show.style.display='blocke'
    }else  show.style.display='none'
}