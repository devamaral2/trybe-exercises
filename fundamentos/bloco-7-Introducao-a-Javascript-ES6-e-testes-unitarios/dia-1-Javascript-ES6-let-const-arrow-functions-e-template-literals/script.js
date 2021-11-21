
// Exercicio dois
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os nummeros ${oddsAndEvens.sort ( (a, b) => a - b ).join(', ')} se encontram ordenados de forma crescente`)

const fatorial = (numero) => {
    let total = 1;
    for (let i = numero; i > 1; i -= 1) {
      total *= i
    }
    return total
} 
console.log(fatorial(5))

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// const btnPrincipal = document.getElementById('botao');
// let contador = 0
// btnPrincipal.addEventListener('click', (event) => {
    // contador += 1
    // document.getElementById('contagem').innerText = contador;

// })

const skills = ['javascript', 'jest', 'html', 'css']

const imprimirFrase = (nome) =>  `Tryber ${nome} aqui!`

const imprimirTexto = (callback) => {
    const frase = callback
    return `${frase}`
}
// console.log(imprimirTexto(imprimirFrase('joao')))

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));
