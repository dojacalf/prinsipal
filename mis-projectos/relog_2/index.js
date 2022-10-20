var d = new Date();

var segundos = d.getSeconds();
var minutos = d.getMinutes()*60;
var horas = d.getHours()*3600;

var segundo = document.getElementById('segundo');
var minuto = document.getElementById('minuto');
var hora = document.getElementById('hora');



segundo.setAttribute('style', 'animation-delay:-' + segundos +'s;');
minuto.setAttribute('style', 'animation-delay:-' + minutos +'s;');
hora.setAttribute('style', 'animation-delay:-' + horas +'s;');
