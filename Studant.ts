import { Provas, Trabalhos } from './interfaces';


class Studant {
matricula: number;
nome: string;  
notas_de_prova: Provas;
notas_de_trabalho: Trabalhos;
constructor(m: number, n: string, np: Provas, nt: Trabalhos) {

  this.matricula = m;
  this.nome = n;
  this.notas_de_prova = np;
  this.notas_de_trabalho = nt;
}
  nota_de_matematica() {
    console.log(`${this.nome} tirou ${this.notas_de_prova.matematica}`)
  }
}

const s1 = new Studant(12, 'Jao', {matematica: 4, portugues: 10, historia: 10, filosofia: 10}, {  matematica: 10, portugues: 10})

console.log(s1.nota_de_matematica())