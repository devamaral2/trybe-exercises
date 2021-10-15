
var numero = 11;
var divisores = 1;
for (var i = 2; i <= numero; i++) {
  if (numero % i ===0) {
      divisores++
  }
}
if (divisores === 2) {
    console.log('é primo');
} else if (divisores > 2) {
    console.log('não é primo');
}
