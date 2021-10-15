//Exercicio 3
let n = 5;
let asterisco = '*'
let espaco = ' '
for (var i = n; i >= 0; i--) {
   let vazio = '' 
   for(var x = 1; x<= n; x++) {
    if (x>i) {  
    vazio = vazio + asterisco;
    } else {
       vazio = vazio + espaco;
      }
   }
   console.log(vazio);
} 
