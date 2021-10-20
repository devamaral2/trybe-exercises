document.getElementById("header-container").style.backgroundColor = 'green' 
document.body.style.backgroundColor = 'gainsboro'
document.getElementById("footer-container").style.backgroundColor = 'black'
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = 'orange'
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = 'yellow'
function colorir (elemento, cor) {
  let x = document.querySelectorAll(elemento)
  for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = cor  
  }
}
colorir('.emergency-tasks h3', 'purple')
colorir('.no-emergency-tasks h3', 'black')