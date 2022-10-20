// HACER DENUEVO

var numeros = ['1', '2', '3', '4', '5', '6'];
var parinpar = ['par', 'inpar'];
var ncxd = ['1-2', '3-4', '4-5'];
var tu_plata = 10

function apuesta_numero(j, m) {
    var apuestoal = numeros[j]
    var numero_random = Math.floor(Math.random() * 5)

    if (numero_random == j) {
        tu_plata += (m * 6)
        ganas
    } else {
        tu_plata -= m
    }
}

function apuesta_parinpar(j, m) {
    var apuestoal = parinpar[j]
    var numero_random = Math.floor(Math.random() * 1)

    if (numero_random = j) {
        tu_plata -= m
    } else {
        tu_plata += (m * 2)
    }
}

function apuesta_ncxd(j, m) {
    var apuestoal = parinpar[j]
    var numero_random = Math.floor(Math.random() * 2)

    if (numero_random = j) {
        tu_plata -= m
    } else {
        tu_plata += (m * 3)
    }
}

// DENUEVO
/*
creas tu plata
crea un array on una .length
dices un numero entre 0 y .length
crea un numeo entre 0 y .length
apuesta una cantidad
si el numero es iwal al numero aletatorio
     tu plata + una cantidad * .length
si el numero es diferente
     tu tu_plata - una catidad
*/
// crea un array con sierto tamaño

function name(eltamaño) {
    var numeros = []
    var tamaño = eltamaño
    for (let i = 0; i < eltamaño; i++) {
        numeros[i] = i + 1
    }
console.log(numeros);
}
  var tu_plata = 0
  function numeroleght(a,napuesta) {
    var numero = []
    for (var i = 0; i < a; i++) {
      numero[i]=i+1
    }
    var numero_random =   Math.floor(Math.random() * (numero.length - 1 + 1) ) + 1;


    if (numero_random == napuesta ) {
      tu_plata = tu_plata + numero.length
    } else {
      tu_plata = tu_plata - 1
    }
    console.log(numero_random,napuesta)
  }
