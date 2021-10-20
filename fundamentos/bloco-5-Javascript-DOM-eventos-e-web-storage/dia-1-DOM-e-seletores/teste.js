function colorir (elemento, cor) {
    let x = documento.querySelectorAll(elemento)
    for (let i in x) {
      x[i].style.backgroundColor = cor  
    }
  }
  console.log(colorir('.emergency-tasks h3', 'purple'))
  colorir('.no-emergency-tasks h3', 'black')