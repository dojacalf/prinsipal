var cartas_picas = [];
var cartas_treboles = [];
var cartas_diamantes = [];
var cartas_corazones = [];

for (var i = 1; i < 14; i++) {
    cartas_picas[i - 1] = i + '♠';
}

for (var i = 1; i < 14; i++) {
    cartas_treboles[i - 1] = i + '♣';
}

for (var i = 1; i < 14; i++) {
    cartas_corazones[i - 1] = i + '♥';
}
for (var i = 1; i < 14; i++) {
    cartas_diamantes[i - 1] = i + '♦';
}

var cartas = cartas_corazones.concat(cartas_diamantes, cartas_picas, cartas_treboles);

function carta_aletoria() {
    return cartas[Math.floor(Math.random() * 51) + 1]
}

// este mejor

var numero = ['A', '2', '3', '4', '5', '6', '7', '8', '9','10','J','Q','K'];
var palo = ['♠', '♣', '♦', '♥'];

var cartas_picas = [];
var cartas_treboles = [];
var cartas_diamantes = [];
var cartas_corazones = [];

for (var i = 0; i < 13; i++) {
    cartas_picas[i] = numero[i] + palo[0];
}
for (var i = 0; i < 13; i++) {
    cartas_treboles[i] = numero[i] + palo[1];
}
for (var i = 0; i < 13; i++) {
    cartas_diamantes[i] = numero[i] + palo[2];
}
for (var i = 0; i < 13; i++) {
    cartas_corazones[i] = numero[i] + palo[3];
}

var cartas = cartas_corazones.concat(cartas_diamantes, cartas_picas, cartas_treboles);

function carta_aletoria() {
    return numero[Math.floor(Math.random() * 14)] + palo[Math.floor(Math.random() * 4)]
}

//barajear todas las cartas

var cartas_varajeadas = []
for (let i = 0; i < 52; i++) {
    cartas_varajeadas[i] = cartas[Math.floor(Math.random() * 51)]
}

//sacar 5 cartas
// t=5
var cartas_mesa = []
function carts_mesa(t) {
    for (let i = 0; i < t; i++) {
        cartas_mesa[i] = cartas_varajeadas[i]
        cartas_varajeadas.splice(i, 1)
    }
}

//personas
// a cada uno una carta hasta 3 cartas
var persona_1 = []
var persona_2 = []
var persona_3 = []
