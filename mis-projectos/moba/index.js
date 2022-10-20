var circulo = document.getElementById('circulo');

var height = window.innerHeight;
var whidth = window.innerWidth;
var tres = whidth-(whidth*8.2/100);
var ocho = height-(height*8.2/100);
function uno() {
   circulo.style.transform = 'translate(0,0)';
}
function dos() {
   circulo.style.transform = 'translate('+ ocho +'px,0)';
}
function tres() {
   circulo.style.transform = 'translate('+ whidth +'px,0)';
}
function cuatro() {
   circulo.style.transform = 'translate(0,'+ tres +'px)';
}
function cinco() {
   circulo.style.transform = 'translate(,)';
}
function seis() {
   circulo.style.transform = 'translate(,)';
}
function ocho() {
  return circulo.style.transform = 'translate(0,'+ height +'px)';
}
function nueve() {
   circulo.style.transform = 'translate(,)';
}
function diez() {
   circulo.style.transform = 'translate(,)';
}

//me salte 7
