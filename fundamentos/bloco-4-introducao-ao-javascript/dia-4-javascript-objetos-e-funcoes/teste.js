function palavraFinal (palavraMaior, palavraFinal) {
  let indiceMaior = 0;
  let igualdade = 0;
  for (let i = palavraFinal.length - 1; i >= 0; i--) {
    indiceMaior++;
    if (palavraMaior[palavraMaior.length - indiceMaior] === palavraFinal[i]) {
       igualdade++;
    } 
  }
  if (igualdade === palavraFinal.length) {
    console.log(true)
  } else {
    console.log(false)
  }
}
palavraFinal ('trybe', 'be')
palavraFinal ('joaofernando', 'ferman')