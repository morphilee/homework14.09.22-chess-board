let chessboard = [];
let chessrow = [];

for (let i = 0; i < 8; i++) {
  for (let x = 0; x < 8; x++) {
    if ((i + x) % 2 == 0) {
      chessrow.push("black");
    } else {
      chessrow.push("white");
    }
  }
  chessboard.push(chessrow);
  chessrow = [];
}
console.log(chessboard);
