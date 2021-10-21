

let filho = document.querySelector('#elementoOndeVoceEsta').parentNode.firstElementChild;
filho.innerText = 'encontro';
//Seleciona e troca o texto de primeiro filho
document.querySelector('#elementoOndeVoceEsta').previousElementSibling; 
//seleciona o primeiro filho
document.querySelector('#elementoOndeVoceEsta').nextSibling;
//Para encontrar o texto: Atenção!
document.querySelector('#elementoOndeVoceEsta').nextSibling.nextSibling;
document.querySelector('#pai').children[2];
Para encontrar o terceiro filho
let novaDiv = document.createElement('div');
novaDiv.className = 'novoIrmao';
let local = document.querySelector('#elementoOndeVoceEsta');
document.querySelector('#pai').appendChild(novaDiv);
let neto = document.querySelector('#primeiroFilhoDoFilho');
let bisneto = document.createElement('div');
bisneto.id = 'bisneto';
neto.appendChild(bisneto);
document.querySelector('#bisneto');
document.querySelector('#bisneto').parentElement.parentElement.nextElementSibling;
Para chegar no terceiro filho.
const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
 if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}