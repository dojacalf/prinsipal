var navuno = document.getElementById('navuno');
var navdos = document.getElementById('navdos');
var navtres = document.getElementById('navtres');
var navcuatro = document.getElementById('navcuatro');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');

function nsuno() {
  uno.style.display = 'inline-block',
  dos.style.display = 'none',
  tres.style.display = 'none',
  cuatro.style.display = 'none',
  navuno.setAttribute('style', 'background-color:blue;'),
  navdos.setAttribute('style', 'background-color:brown;'),
  navtres.setAttribute('style', 'background-color:brown;'),
  navcuatro.setAttribute('style', 'background-color:brown;');
}

function nsdos() {
  uno.style.display = 'none',
  dos.style.display = 'inline-block',
  tres.style.display = 'none',
  cuatro.style.display = 'none',
  navuno.setAttribute('style', 'background-color:brown;'),
  navdos.setAttribute('style', 'background-color:red;'),
  navtres.setAttribute('style', 'background-color:brown;'),
  navcuatro.setAttribute('style', 'background-color:brown;');
}

function nstres() {
  uno.style.display = 'none',
  dos.style.display = 'none',
  tres.style.display = 'inline-block',
  cuatro.style.display = 'none',
  navuno.setAttribute('style', 'background-color:brown;'),
  navdos.setAttribute('style', 'background-color:brown;'),
  navtres.setAttribute('style', 'background-color:green;'),
  navcuatro.setAttribute('style', 'background-color:brown;');
}
function nscuatro() {
  uno.style.display = 'none',
  dos.style.display = 'none',
  tres.style.display = 'none',
  cuatro.style.display = 'inline-block',
  navuno.setAttribute('style', 'background-color:brown;'),
  navdos.setAttribute('style', 'background-color:brown;'),
  navtres.setAttribute('style', 'background-color:brown;'),
  navcuatro.setAttribute('style', 'background-color:purple;');
}
