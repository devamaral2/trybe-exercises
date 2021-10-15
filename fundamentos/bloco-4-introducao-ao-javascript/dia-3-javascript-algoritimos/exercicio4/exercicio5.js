let n = 7;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 1; lineIndex <= midOfMatrix; lineIndex += 1) {
    inputLine = '';
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex == controlLeft || columnIndex == controlRight || lineIndex==midOfMatrix) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  controlRight += 1;
  controlLeft -= 1
  console.log(inputLine);
};