//Exercicio um palindromo 
function verificaPalindromo (palavra) {
   let letraum = '';
   let letra = '';
   let palavraArray = []; 
   let palavraInvertida = [];

   for (let i = 0; i < palavra.length; i++) {
       letraum = palavra[i];
       palavraArray.push(letraum);
   }
   for (let i = palavra.length - 1; i >= 0; i--) {
      letra = palavra[i];
      palavraInvertida.push(letra);
   }
   if (JSON.stringify(palavraArray) === JSON.stringify(palavraInvertida)) {
      console.log(true);
   } else {
      console.log(false);
   }
}

//Versão dois do primeiro exercicio
function verificaPalin(word){
  let num = 0;
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      console.log(false);
      break;
    } else {
      num++;
      }
    }
  if (num === word.length) {
      console.log(true)
  }
}

//Versão três do primeiro exercicio
function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

//Versão quatro do primeiro exercicio
function verificaPalindromoDois (palavra) {

  let letraum = '';
  let letra = '';
  let palavraArray = []; 
  let palavraInvertida = [];
  let adiciona = 0;

  for (let i = 0; i < palavra.length; i++) {
      letraum = palavra[i];
      palavraArray.push(letraum);
  }
  for (let i = palavra.length - 1; i >= 0; i--) {
     letra = palavra[i];
     palavraInvertida.push(letra);
  }
  for (let i = 0; i < palavraArray.length; i++) {
    if (palavraArray[i] !== palavraInvertida[i]) {  
      console.log(false);
      break;
    } else {
      adiciona++
      }
  }
  if (adiciona === palavraArray.length) {
    console.log(true)
  }
}
verificaPalindromoDois('Arara'.toLocaleLowerCase()); 
verificaPalindromoDois('desenvolvimento'.toLocaleLowerCase());

//Exercicio dois
function maiorNoArray (listaDeNumeros) {
  let numeroMaior = 0
  for (let i in listaDeNumeros) {
    if (listaDeNumeros[numeroMaior] < listaDeNumeros[i]){ 
      numeroMaior = i;
    }
  }
  console.log(numeroMaior)  
}
maiorNoArray([2, 3, 6, 7, 10, 1])

//Exercicio tres
function menorNoArray (listaDeNumeros) {
  let numeroMenor = 0
  for (let i in listaDeNumeros) {
    if (listaDeNumeros[numeroMenor] > listaDeNumeros[i]){ 
      numeroMenor = i;
    }
  }
  console.log(numeroMenor)  
}
menorNoArray([2, 4, 6, 7, 10, 0, -3])

//Exercicio quatro
function maiorNome (listaDeNomes) {
  let nomeMaior = listaDeNomes[0];
   
  for (i in listaDeNomes) {
    if (nomeMaior.length < listaDeNomes.length) {
    nomeMaior = listaDeNomes;
    }
  }
  console.log(nomeMaior)
}
maiorNome (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

//Exercicio cinco
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  console.log(numeros[indexNumeroRepetido]);
}
maisRepetido([2, 3, 2, 5, 8, 2, 3]);

//Exercicio seis
function somaDeN (N) {
   let soma = 0;
   for (i = 1; i <= N; i++) {
       soma = soma +i
   }
   console.log(soma)
  }
  somaDeN (5)

  //Exercicio sete
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

//Segunda forma de fazer o exercicio sete
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

//Terceira forma de fazer o exercicio
function verificaFPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}
console.log(verificaFPalavra('trybe', 'be')); //true
console.log(verificaFPalavra('joaofernando', 'fernan')); //false

//Exercicio bonus três

function quantasFrutas (frutas)
