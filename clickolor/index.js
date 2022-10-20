let contenedor = document.getElementById('contenedor');

function canbiar_colordos() {
  var r = Math.floor(Math.random() * 255 ) + 1;
  var g = Math.floor(Math.random() * 255 ) + 1;
  var b = Math.floor(Math.random() * 255 ) + 1;
  var rs = r.toString();
  var gs = g.toString();
  var bs = b.toString();
return contenedor.setAttribute('style','background-color:rgb(' + rs + ',' + gs + ',' +
bs + ');');
}
