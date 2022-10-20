var tu_plata = 5;
var x;
var y;

function ooo() {
    x = (Math.floor(Math.random() * 10)) + 1;
    y = (Math.floor(Math.random() * 10)) + 1;
    console.log('el primer numero es'+' '+ x);
    console.log('el segundo numero es ?')
}

function aaa(w) {
    if (x > y) {
        console.log('el primer numero es'+' '+ x)
        console.log('el segundo numero era'+' '+y);
        console.log('ganaste' + ' ' + w),
        tu_plata += w;
    } else if (y > x) {
        console.log('el primer numero es'+' '+ x)
        console.log('el segundo numero era'+' '+y);
        console.log('perdiste' + ' ' + w),
        tu_plata -= w;
    } else {
        console.log('el primer numero es'+' '+ x)
        console.log('el segundo numero era'+' '+y);
        console.log('ni ganas ni peirdes salieron iguales');
    }
}
