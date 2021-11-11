//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Exercicio 2
let soma = 0;
for (let i = 0; i<numbers.length; i++) { 
    soma = soma + numbers[i];
}
console.log(soma);

//Exercicio 3
let media = soma / numbers.length;
console.log(media);

//Exercicio 4
if (media>20) {
    console.log("valor maior que 20");
} else {
    console.log("vamole menor que 20");
}

//Exercicio 5
let numeroMaior = numbers[0];
for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] > numeroMaior) {
        numeroMaior = numbers[i];
    }
}
console.log(numeroMaior);

//Exercicio 6
let numerosImpares = 0;
for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
    numerosImpares++}
    }
if (numerosImpares === 0) {
    console.log("nenhum valor impar encontrado");
} else {
console.log(numerosImpares);
}

//Exercicio 7
let numeroMenor = numbers[0];
for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] < numeroMenor) {
        numeroMenor = numbers[i];
    }
}
console.log(numeroMenor);

//Exercicio 8
let arr = [];
for (let i = 1; i<26; i++) {
    arr.push(i);
}
console.log(arr);
console.log("aqui");
//Exercicio 9
let resultado = 0;
let arrDividido = [];
for (let i = 0; i<arr.length; i++) {
    resultado = arr[i] / 2;
    arrDividido.push(resultado);
}
console.log(arrDividido);

//Bonus 1
let numeros = [26,8,59,10,31,24,34]

for (let i = 1; i < numeros.length; i++) {
    for (let x = 0; x < (numeros.length -i); x += 1) {
      if (numeros[x] > numeros[x +1]) {
        let position = numeros[x];
        numeros[x] = numeros[x+1];
        numeros[x+1] = position;

      }
    }
  }
  console.log(numeros);

  let arrayum = [5,9,3,19,70,8,100,2,35,27];

  for (let index = 1; index < arrayum.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (arrayum[index] < arrayum[secondIndex]) {
        let position = arrayum[index];
        arrayum[index] = arrayum[secondIndex];
        arrayum[secondIndex] = position;
      }
    }
  }
console.log(arrayum);

//Forma mais simples

let arrayNovo = [5,9,3,19,70,8,100,2,35,27];
for (let i = 0; i < arrayNovo.length - 1; i++) {
    for (let x = 0; x < arrayNovo.length - i -1; x++) {
      if (arrayNovo[x] > arrayNovo[x +1]) {
        let position = arrayNovo[x];
        arrayNovo[x] = arrayNovo[x+1];
        arrayNovo[x+1] = position;
      }
    }
}
console.log(arrayNovo);

//Invertido
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
let arrayInvertido = [5,9,3,19,70,8,100,2,35,27];
for (let i = arrayInvertido.length - 1; i>= 0; i--) {
    for (let x = arrayInvertido.length - 1; x>=0 ; x--) {
      if (arrayInvertido[x - 1] > arrayInvertido[x]) {
        let position = arrayInvertido[x - 1];
        arrayInvertido[x - 1] = arrayInvertido[x];
        arrayInvertido[x] = position;
      }
    }
}
console.log(arrayInvertido);


//Bonus 2
let arraydois = [5,9,3,19,70,8,100,2,35,27];
for (let i = 1; i < arraydois.length; i++) {
    for (let x = 0; x < (arraydois.length -i); x++) {
      if (arraydois[x] < arraydois[x +1]) {
        let position = arraydois[x];
        arraydois[x] = arraydois[x+1];
        arraydois[x+1] = position;

      }
    }
}
console.log(arraydois);


//Bonus 3
let numbersVezes = [];
let result = 0; 
for (let i = 1; i < numbers.length; i++) {
    if (i + 1 < numbers.length) {
       numbersVezes.push(numbers[i] * numbers[i +1]);
      } else {
      numbersVezes.push(numbers[i] * 2);
    }
}
console.log(numbersVezes);
