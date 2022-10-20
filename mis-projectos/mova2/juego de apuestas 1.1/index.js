var tu_plata = 5;
var x;
var y;

function denuevo() {
    x = (Math.floor(Math.random() * 10)) + 1;
    y = (Math.floor(Math.random() * 10)) + 1;
    console.log('x es'+' '+ x);
    console.log('y es ?')
}
function iniciar() {
    x = (Math.floor(Math.random() * 10)) + 1;
    y = (Math.floor(Math.random() * 10)) + 1;
    console.log('x es'+' '+ x);
    console.log('y es ?')
}

function apuesto_q_es_mayor(w) {
    if (x > y) {
        console.log('el primer numero es'+' '+ x);
        console.log('el segundo numero era'+' '+y);
        console.log('ganaste' + ' ' + w),
        tu_plata += w;
    } else if (y > x) {
        console.log('el primer numero es'+' '+ x);
        console.log('el segundo numero era'+' '+y);
        console.log('perdiste' + ' ' + w),
        tu_plata -= w;
    }else if (w > tu_plata) {
      console.log('no puedes apostar mas de lo que tienes')
    }else if (0 > tu_plata) {
      console.log('ya no tines plata xd');
    }
     else {
        console.log('el primer numero es'+' '+ x);
        console.log('el segundo numero era'+' '+y);
        console.log('ni ganas ni peirdes salieron iguales');
    }
}

function apuesto_q_es_menor(w) {
    if (y > x) {
        console.log('el primer numero es'+' '+ x);
        console.log('el segundo numero era'+' '+y);
        console.log('ganaste' + ' ' + w),
        tu_plata += w;
    } else if (x > y) {
        console.log('el primer numero es'+' '+ x);
        console.log('el segundo numero era'+' '+y);
        console.log('perdiste' + ' ' + w),
        tu_plata -= w;
    }else if (w > tu_plata) {
      console.log('no puedes apostar mas de lo que tienes')
    } else if (0 > tu_plata) {
      console.log('ya no tines plata xd');
    }
     else {
        console.log('el primer numero es'+' '+ x);
        console.log('el segundo numero era'+' '+y);
        console.log('ni ganas ni peirdes salieron iguales');
    }
}

//if(w > tu_plata){console.log('no puedes apostar mas de lo que tienes')}

//if(0 > tu_plata){console.log(no tines plata xd);}
//otro para apostar por el numero que no sabes cual es
//switch
