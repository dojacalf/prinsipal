
var londons = document.getElementById('londons');
var pariss = document.getElementById('pariss');
var tokyos = document.getElementById('tokyos');
var oslos = document.getElementById('oslos');
function londonsdd() {
  oslos.style.display = 'none',  
  pariss.style.display = 'none',
  tokyos.style.display = 'none',
  londons.style.display = 'inline-block';
}
function tokyosdd() {
  oslos.style.display = 'none',  
  pariss.style.display = 'none',
  tokyos.style.display = 'inline-block',
  londons.style.display = 'none';
}
function parissdd() {
  oslos.style.display = 'none',  
  pariss.style.display = 'inline-block',
  tokyos.style.display = 'none',
  londons.style.display = 'none';
}
function oslosdd() {
  oslos.style.display = 'inline-block', 
  pariss.style.display = 'none',
  tokyos.style.display = 'none',
  londons.style.display = 'none';
}








var lond = document.getElementById('lond');
var par = document.getElementById('par');
var tok = document.getElementById('tok');
function ttq() {

  par.style.display = 'none',
  tok.style.display = 'none',
  lond.style.display = 'inline-block';
}
function ttw() {

  lond.style.display = 'none',
  tok.style.display = 'none',
  par.style.display = 'inline-block';
}
function tte() {
  tok.style.display = 'inline-block',
  lond.style.display = 'none',
  par.style.display = 'none';
}










var london = document.getElementById('london');
var paris = document.getElementById('paris');
var tokyo = document.getElementById('tokyo');
function tta() {
  london.style.display = 'inline-block';
  paris.style.display = 'none';
  tokyo.style.display = 'none';
}
function ttb() {
  paris.style.display = 'inline-block';
  london.style.display = 'none';
  tokyo.style.display = 'none';
}
function ttc() {
  tokyo.style.display = 'inline-block';
  london.style.display = 'none';
  paris.style.display = 'none';
}
//que se oculte cuando das click




var aii = document.getElementById('aii');
var vvw = document.getElementById('vvw');
function aoo() {
  vvw.setAttribute('style','display:inline-block'),
  aii.setAttribute('onclick','aoa()');
}
function aoa() {
  vvw.setAttribute('style','display:none;'),
  aii.setAttribute('onclick','aoo()');
}






var a = document.getElementById('a');
function o() {
  a.setAttribute('class','a'),
  a.setAttribute('onclick','f()');
}
function f() {
  a.setAttribute('class','b'),
  a.setAttribute('onclick','o()');
}
