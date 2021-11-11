let n = 5;
let asterisco = '*'
let espaco = ' '
for (var i = 1; i<=3; i++) {
    let vazio = '' 
    for(var x = 1; x<=n; x++) {
     if (i = 1) {
         if (x=3) {
             vazio = vazio + asterisco;
         } else {
             vazio = vazio + espaco;
         }
        } else if (i = 2) {
            if (x>=2 && x<=4) {
              vazio = vazio + asterisco;
         } else {
             vazio = vazio + espaco;
         }
     } else {
    vazio = vazio + asterisco;
     } 
    }
    console.log(vazio); 
}
