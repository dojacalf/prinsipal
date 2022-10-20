//crer cien divs
for (let i = 1; i < 10001; i++) {
    t += '<div onclick="y'+ i + '" class="a e-' + i + '"></div>';
}
;
//10 porcentajes (fila,columna)
for (let i = 1; i < 101; i++) {
    iui += 1 + '%' + ' ';
}

//crea 100    
for (let i = 1; i < 10001; i++) {
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    var rs = r.toString();
    var gs = g.toString();
    var bs = b.toString();
    tkn += '.e-' + i + '{background-color: rgb(' + rs + ',' + gs + ',' + bs + ');}'
}

for (let i = 1; i < 10; i++) {
    tls +='function y' + i + '() {circulo.style.transform = "translate("' + i +'px,' + i + '"px)";}'
}