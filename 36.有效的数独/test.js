var isValidSudoku = function(board) {
  const rowArray = Array.from({length:9},e=>new Set())
  const colArray = Array.from({length:9},e=>new Set())
  const boxArray = Array.from({length:9},e=>new Set())
  for(let row =0 ; row < 9;row++){
      for(let col = 0 ; col <9;col++){
        const num = board[row][col];
        if(num === '.')
          continue;
        if(rowArray[row].has(num)){
          return false
        }
        if(colArray[col].has(num)){
          return false
        }
        const box = Math.floor(row/3)*3+ Math.floor(col/3)
        if(boxArray[box].has(num)){
          return false
        }
        rowArray[row].add(num)
        colArray[col].add(num)
        boxArray[box].add(num)
      }
  }
  return true
};

var board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log('isValid',isValidSudoku(board))