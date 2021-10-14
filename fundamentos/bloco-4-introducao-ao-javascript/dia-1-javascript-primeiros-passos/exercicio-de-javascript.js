
//Exercicio 1
const a = 10;
const b = 5;
const c = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b); 
console.log(a / b);
console.log(a % b);

//Exercicio 2
if (a>b) {
  console.log("a é maior que b");
} else if (b>a) {
  return "b é maior que a";
} else { 
  return "a é igual a be";
}

//Exercicio 3
if (a>b && a>c) {
  console.log(a);
} else if (b>a && b>c) {
  console.log(b);
} else {
  console.log(c);
}

//Exercicio 4
if (a<0) {
   console.log("negative");
}  else if (a>0) {
    console.log("positive");
}  else {
    console.log("zero");
}

//Exercicio 5
const ladoA = 45
const ladoB = 45
const lacoC = 90
if (ladoA+ladoB+lacoC===180) {
    console.log("true");
} else {
    console.log("erro");
}

//Exercicio 6 - não consegui aplicar o .tolowecase

let peca = "bispo";

switch (peca) {
   case "peão":
    console.log("anda uma ou duas casas para frente");
    break
   case "bispo":
    console.log("anda nas diagonais");
    break
    case "torre":
     console.log("anda nas casas adjacentes");
     break
    default:
     console.log("erro");
}

//Exercicio 7
let nota = 70;
if (nota>=90) {
    console.log("A")
} else if (nota>=80) {
    console.log("B")
} else if (nota>=70) {
    console.log("C")
} else if (nota>=60) {
    console.log("D")
} else if (nota>=50) {
    console.log("E")
} else if (nota<50) {
    console.log("F")
} else if (nota>100 || nota<0) {
    console.log("erro")
}

//Exercicio 8
const x = 30;
const y = 12;
const z = 13;
if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    console.log(true)
}  else {
    console.log(false)
}

//Exercicio 9
if (x % 2 !== 0 || y % 2 !== 0 || z % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

//Exercicio 10
const valorCusto = 100
const valorVenda = 140
const lucro = valorVenda - (valorCusto * 1.2) 
console.log(lucro)

//Exercicio 11

let salarioBruto = 1400;
let inss = 0;
let inssEmNumeroInteiro = 0; 
let deducao = 0;
let ir = 0;

if (salarioBruto<=1556.94) {
    inss = 0.08;
} else if (salarioBruto>1556.94 && salarioBruto<=2594.92) {
    inss = 0.09;
} else if (salarioBruto>2594.92 && salarioBruto<=5189.82) {
    inss = 0.11
} else if (salarioBruto>5189.82) {
    inssEmNumeroInteiro = 570.88
}

let salarioMenosInss = 0;

if (salarioBruto<=5189.82) {
    salarioMenosInss = salarioBruto - (salarioBruto * ir);
} else {
    salarioMenosInss = salarioBruto - 570.88;
}
console.log("Salário menos INSS = " + salarioMenosInss)

if (salarioMenosInss<= 1903.98) {
   deducao = 0
} else if (salarioMenosInss>1903.98 && salarioMenosInss<=2826.65) {
    ir = 0.075;
    deducao = 142.80;
} else if (salarioMenosInss>2826.65 && salarioMenosInss<=3751.05) {
    ir = 0.15;
    deducao = 354.80;
} else if (salarioMenosInss>3751.05 && salarioMenosInss<=4664.68) {
    ir = 0.225;
    deducao = 636.13;
  } else if (salarioMenosInss>4664.68) {
    ir = 0.275;
    deducao = 869,36;
  }
let subtracao = (salarioMenosInss * ir) - deducao
let salarioLiquido = salarioMenosInss - subtracao

console.log("Salário liquido = " + salarioLiquido)
