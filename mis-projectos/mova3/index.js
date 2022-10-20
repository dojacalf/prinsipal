//crer cien divs
for (let i = 1; i < 101; i++) {
    t += '<div class="a e-' + i + '"></div>';
  };

//10 porcentajes (fila,columna)
  for (let i = 1; i < 11; i++) {
      iui += 10 + '%' + ' ';
  }

 //crea 100    
  for (let i = 1; i < 101; i++) {                     
    var r = Math.floor(Math.random() * 255 ) + 1;
    var g = Math.floor(Math.random() * 255 ) + 1;
    var b = Math.floor(Math.random() * 255 ) + 1;
    var rs = r.toString();
    var gs = g.toString();
    var bs = b.toString(); 
   tkn += '.e-' + i + '{background-color: rgb(' + rs + ',' + gs + ',' + bs + ');}'

}