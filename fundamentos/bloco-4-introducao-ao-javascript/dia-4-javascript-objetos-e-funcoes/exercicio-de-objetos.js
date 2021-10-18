let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 }
    }

    console.log('A jogadora ', player.name, player.lastName, 'tem', player.age, 
    'anos de idade.')

    player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

    console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por 6 vezes');
    console.log ('A jogadora possiu', player.medals.golden, 'medalhas de outra e', player.medals.silver, 'de prata');
    
    let names = {
        person1: 'João',
        person2: 'Maria',
        person3: 'Jorge' 
      };
      for (let i in names) [
          console.log("Olá,", names[i])
      ]
      let car = {
        model: 'A3 Sedan',
        manufacturer: 'Audi',
        year: 2020
      };
      for (let i in car) {
         console.log(car[i]);
      }
      //Exercicios: Parte I - Objetos e For/In
      //1
      let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorent: 'sim'
      };
      console.log('Bem-vinda,', info.personagem);
      //3
      for (let key in info) {
      console.log(key);
      }
      //4
      for (let i in info) {
          console.log(info[i])
      }
      //5 
      let info2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain',
        nota: 'O ultimo macPatinhas',
        recorent: 'sim'
    };
    if ((info.recorent = 'sim') && (info2.recorent = 'sim')) {
        var saoRecorrentes = 'Ambos recorrentes';
    };
    for (let i in info) {
        if (i === 'recorrent' && info[i] === 'sim' && info[2] === 'sim') { console.log(saoRecorrentes); 
        }
        else { console.log(info[i], 'e', info2[i]);
        }
    }
