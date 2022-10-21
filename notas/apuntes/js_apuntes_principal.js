//hacer un foco q funcione
//2048
//convertidor de bases,numeros romanos,temperatura,monedas,tiempo
//juegos de kakegurui
//juegos de cartas
    //poker
//caja registradora
//un creador de platos tipo fitia
//crear el juego de gusanito
//algo de clima con bacckend
//prgogramar algo para un civercafe
//una tienda de frutas con canasta
//reproductor musica con bacckend palylist lista de espera aleatorio ,
//algo que te diga si un numero es primo o no
//una app de pencion
//un tuti fruti
//el juego de la ruleta
//algo para mandar musica y  que se ponga en la lista de espera
//ruleta
//cuadrado magco
//examen
//teclado
//tabla perodca
//tenda onlne
//examen





/*comentario*/
//anotes
//variables
//identifier = variable
var w;    //puede canbiar
let w;    //cuando la varible es permanente
w = 4;
const y = 7;  //nc me falta buscaar no lo descargue llo voy a descargar cuado tenga interet o almenos lo leere



var unnunber = 7;
var unstring = 'tractor';
var unobject = {user:'psevas', password:'3strella'};
var unarray = ['amala','hot pink','planet her'];
function unafuncion() { }
//strings
    '',""//formas de declarar string puedes poner unos encima de otros contal de que no se repitan
    .length//sin parentesis para ver la durcion del string
    /  //usar el / para infiltrar carcteres que no se pueden poner ejm(/"",/'',//)
    new //para convertir el string en object vere el new mas trde
  //string methods
    .slice()//para sarcar una parte (+3 otros metodes que se parecen)
    .replace()//para canbiar una parte
    .toUpperCase()//para ponerlo en mayuscula
    .toLowerCase()//para poner en minuscula
    .concat()//para juntar
    .trim()//quitar espacios de los costados
    .padEnd()//agrega numeros al final
    .padStart()//agrega numeros al inicio
    .charAt()//sacar una letra
    .split()//lo conbierte en array
  //string search
    .indexof()//indica el lugar //el segundo valor te dice desde donde va a enpezar la busqueda (opcional)
    .lastIndexOf()//lo mismo que el anterior pero si se repite la palabra te da el ultimo
    .search()//indica el lugar
    .match()//te da un array con todas la veses que aparece lo que esta en parentesis
    .includes()//te da un bolean si la palabra que pusistes entre parentesis esta o no estas//segundo numero dice donde inici la busqued (opcional)
    .startsWith()//te da on bolean si la palabra que pusistes en el parentesis es con la que enpieza//segidndo numer dice donde inicia la busqueda (opcional)
    .endsWith()//lo mismo que el de arriva pero con end
  //template crea un string con otras funciones
    `` //asi declaras el templte
    `${}`//poner la variable dentro los corchetes y asi etiquetarlo en otro lado

//numbers
      3 //numero sin secimales
      3,14 // numero con decimales
      12e3//esto seria iwal a 12000 el e y el numero indica el numero de seros
      5e-4//seria 0000.5 pone seros atras si es mas de dos cifras le agre coma ysabes
      //si es mas de 15 caracteres redondea
      0.2 + 0.1//no sale nc pq pero ay que opnerlo asi (0.2 * 10 + 0.1 * 10) / 10
      '5'//eso es un tring no un numero
      4 + 3 // sale 7, si sumas dos numeros el resultado sale numero
      '4' + '3'//sale 43,si sumas dos strings te dara un string
      4 + '3'//sale 43 , si sumas un numero y un string te d un string
      '4' * 3//sale 43 , si sumas un string y un numero tr da un string
      '3' * '4'//cualquier operacion con string funcionara exepto suma
      2/'aple'//si la opercion no es cuerente te da un NaN (not a number)
      3 + NaN //tanbien dara Nan
      isNaN()//para ver si algo es nan o no (yo use typeof)
      NaN + 'dd'//te da NaNdd, igual que a un numero lo vuelve a nan un string
      typeof NaN//es un numero NaN
      2 / 0//te da infitity
      typeof Infinity //es numero Infinity
      .toString()//conbierte en la base que este entre parentesis
  //number methods
      .toString()//lo conbierte en estring
      .toExponential()//redondea al numero con el valor en parentesis tbn lo buelve string
      .toPrecision()//regresa un numero con un numero especifico de seros
      .tofixed()//le aumenta .00 dependiendo del numero entre parentesis
      .valueOF()//te devuelve lo mismo
      .Number()// conbierte cualquier cosa en number, tbn funcionan  estos parseInt() parseFloat()
      Number.(max_value,min_value,NaN,positive_infinity,negative_infinity)//valores (no pueden ser usados en variables)

//arrays
      ['val','val2','val3']//un array puede tener varios valores
      [...'cosas']//separa todo adentro delos corchetes
      const array_name = [item1, item2, ...];//asi de ceclara un array (pueden entrar e varia lineas)
      const que = [],
      que[N°]='valr'//puedes crear un array primero y despues declarar los datos.y tambien lo puedes usar para canbiar un dato
      que[N°]//para ver dentro del elemento
      delete array_name[N°]//borra un elemento del array (deja weco mejor usar splice)
      que[N°]= type//en los arrays pueden entrar object funtions y arrays
      const array_name = new Array('a','b',...);//otra manera de que puedes declarar un arrays
      array_name[]//asi accedes a un array especifico (poner entre las orchetas la ubicacion)
      typeof array_name //dara object porque los arrays son object
      instanceof Array//te dara si si elemnto es array
    //methods
      .length//para ver cuantos elementos tiene un arrays
      .sort//ordena los elementos
      .toString()//lo conbierte en un string , separado por comas
      .join()//le mismo que antes pero puedes especificar que lo separa
      .pop()//quita el ultimo elemento del array
      .push()//agrega un nuevo elemento al final del array
      .shift()//quita el primer elemento
      .unshift()//agrega un nuevo elemento al inicio del array
      .concat()//junta dos o mas arrays
      .splice(N°,N°,'','')//para agregar y quitar items (pocicion para agregar,numero de cuantos sacar,items nuevos)
      .slice()//para crear nuevo array con algunos elementos(donde inicia,donde termina)
      .reverse()//para revertirlo


//date
      typeof Date //es object
      Date()// te da la fecha
      Date(YYYY,MM,DD,hr,min,sec,milsec)//elorden para poner (si pones una fecha mas de la permitida se sumara el tiempo restante al otro lado)
      Date(YYYY,MM,DD,hr,min,sec)
      Date(YYYY,MM,DD,hr,min)
      Date(YYYY,MM,DD,hr)
      Date(YYYY,MM,DD)
      Date(YYYY,MM)
      Date(milsec)//suma milisegundos a 1970
      Date(YY,MM,DD)//cuado pones solo dos numeros en los añoslos contara como anes del 1200
      Date(MMM DD YYYY)
      .toString()//a otro formato
      .toUTCString()//a otro formato
      .toDateString()//a otro formato lo hace mas leible (recomendado)
      .toISOString()//a otro formato
      .parse()//lo convierte en milisegundo
      Date('YYYY-MM-DD')
      Date('YYYY-MM')
      Date('YYYY')
      Date('YYYY-MM-DDThr:min:SSZ')//todos los anteriores son en iso
      Date('MM/DD/YYYY')//short way
      Date('MMM DD YYYY')//long way
    //get methods
      .getTime()//te da el tiempo entre 1970 y ahora en milisegundos
      .getFullYear()//te da el año YYYY
      .getMonth()//te da el mes 0-11 ---[]
      .getDate()//te da el dia 1-31
      .getHours()//te da la hora 0-23
      .getMinutes()//te da los minutos 0-59
      .getSeconds()//te da los segundos 0-59
      .getMilliseconds()//te da  milisegundos 0-999
      .getDay()//te da el dia de la semana 0-6 ---[]
    //set methods
      .setFullYear(YYYY)//le das el año al date
      .setMonth(MM)//le das el mes al date
      .setDate(DD)//le das el dia al date
      .setHours(hr)//le das la hora hora al Date
      .setMinutes(min);//le das los minutos al date
      .setSeconds(seg);//le das los segundos al Date

//math
      Math //enay puedes aceder a todes les datos
      Math.round() //redondea a al mas sercano
      Math.ceil() //redondea al mas alto
      Math.floor() //redondea al mas bajo
      Math.trunch() //regrea la unidad
      Math.sign()//regresa si es positivo o negativo (-1,0,1)
      Math.pow()// x a la potencia y   (x,y)
      Math.sqrt()//te da la raiz cuadrada
      Math.abs()//te da e valor absoluto
      Math.sin()//te da el seno en radianes
      Math.cos()//te da el coseno
      Math.min()//te da el minimo (x,y,z)
      Math.max()//te da el maximo (x,y,z)
      Math.random()//te da un numero aleatorio del 0 al 1
        Math.floor(Math.random() * x)//un numero entre 0 y x
        Math.floor(Math.random() * (y - x + 1) ) + x;//te da un numero entre x y y
        Math.floor(Math.random() * y ) + 1;//te da un numero entre 1 y y
      Math.log()//te da el logaritmo
      Math.logx(y)//cuantas veces y q multiplicar x p q de y

//bolean
        Boolean(valor)//todo con valor te da true
        Boolean(no valor)//sin un valor es false
        new Boolean(false)//vuelve un bolean en object
    //comparing operator
        == //es iwal a (a == b)
        === //iwal valor y iwal type (a === b)
        != //no es iwal a (a != b)
        !== // no iwal valor o no iwal tipo (a !== b)
        <	 //es menor que (a < b)
        >   //es mayor que (a > b)
        >=  //es mayor o iwal que (a >= b)
        <=  //es menor o iwal que (a <= b)
        &&//nc xd
        ||//tpcs xd x2
        !//lo vuelve lo contratio
        varname = (condition) ? value1:value2 //ya vere aber

//Conditional Statements
        if// para ejecutar un codigo si la condicion es true
        else// para ejecular un codigo si las condicion es false
        else if// alterntiva si la primera cundicion es falsa
        switch// especifica caso por caso
    //if,else,else if
        if (condicion) {
          //aca codigo a ser ejecutado si la condicion es true
        } else if (condicion 2) {
          //cadigo si la condicion 1 es false y la 2 es verdadera
        } else {
          //aca codigo para si la condidion 1 es falsa
        }
    //switch
        switch (expression) {
          case: //el_caso:
          //codigo codigo si el caso es true
          break;
          case otro_caso:
          //codigo si este es el caso
          break;
          default: //codigo si todos los casos son false
        }
//loops
        for loop
          for in
          for of
        while
          do while
    //for loop
        for (a;b;c)
          // a se ejecuta una ves antes del codigo
          // b la condicion para que se ejecute el bloke
          // c se ejecula cada ves que se ejecuta el codigo
           {
              //el bloke de codigo
           }
    //for in
        for (var variable in object) {
          // code block to be executed
              }
    //for of
        for (var variable of iterable) {
          //code block to be executed
        }
    //while
        while (condition) {
          //codigo que va a ser ejecutado varias veces mientras la condition sea true
          }
    //do while
          do {
            //se ejecuta una ves y si la condicion es true varias veces
          } while (condition);
          break continue //nc noentiendo
//sets
          const varname = new Set(['w','x','y'])//crear set
          const varname = new Set()//crear set vacio
          .add('z')//agregar valore
          .add(varname)//agrega variable
          .add('x')//no se puede agregar valores que ya estan
          .delete()//para borrar un elemento
          .has()//si esiste ono
          .clear()//borra todos los elementos
          .forEach()//callback de cada elemento
          .values()//regresa un itineratosr con valores del sets .Keys tbn
          .entries()//un itineratosr con [valor,valor]par del set
          .size//para ver el tamaño

//Maps
          const varname = new Map([['w', 1],['x', 2],['y', 3]]); //crear map
          const varname = new Map();//crear map vacio
          .set('z', 4);//agregar valores
          .set('w', 5);//canbiar valores
          .get('x')//obtener valores
          .size;//tamaño del map
          .delete('y');//para borrar
          .has('v');//pava ver si existe o no
          .clear();//borra todo del Map
          .forEach();//un callback para cada key/value par
          .entries();//regresa un itinerator objeto con keys in Map
          .keys();//regresa un itinerator con keys en el mapa
          .values(); //regres un itinerator object de los valores en un mapa


//nota inportate      // hasta aqa lla esta toro echo despues son solo cosas agregadas


// type convertion

//objects
var object = {que:'rosene', so:'re'};//para crear un objects
const object = {};  object.que:'psevas',//para declarar y despues poner
objet.so,object['so'],que[so],
delete object.so;//para borrar xd
object.ni()//para acceder a una funcion dentro del objects
var objname = {dd:x,get ss(){ return this.dd}};// asi funciona get
var x = {aydi:'',set id(id) { this.aydi = id;}};x.aydi = '66';//asi funciona set
function pp(1,2) {this.uno = 1;this.dos = 2;}//asi creas constructors
var x = new pp(1,2);//asi los creas objects con
pp.prototype.tres = 3 //asi agregas algo al constructor

//funtions
function fun(parameters){return/*code*/};//declarar funcion
var fun = (parameter) =>{ return /*code*/};
(function(){/*codigo*/})();//se invoca asi mismo
var fun(x,y=4)//para poner valor default al parameter
arguments[],arguments.length//propiedades del parameter
.call();//para aplicar funciones de un obj en otro
.apply();//casi lo mismo que call funciona con arrays
.bind();//se presta una funcion de otro object

//clases
class ClassName {
  constructor(x,y){thix.eqis=x,this.ye=y}
}//
new ClassName(x,y);//
class ClassName {constructor() { ... }method_1() { ... } }//para poner metod en la clase
class ClassName {constructor() { ... }get name() {..}set name() {..} }//para poner sets y get en la clase
class Otherclas extends ClassName {} /*otherclas se presta los metodos de ClassName*/ super()//para referirse a classnme
class Classname {constructor() { ... }static hello() {}}//static solo funciona con la clase y no con objects

//DOM
  //finding
document.getElementById('id')//para encontrar un elemeto por el id
document.getElementsByTagName('tagName')//encuentra elementos por su tagname
document.getElementsByClassName('className')//encuetra el lmento por su class
document.querySelectorAll();//encuentra en vase a los selectores de css

  //change
element.innerHTML//canbia lo que esta adentro del elemento
element.attribute//canbia el atributo
element.style.property//canbia el estilo
element.setAttribute(attribute, value)//canbia el attribute balor
  //delete and add
document.createElement(element)//crear un elemento
document.removeChild(element)//quitar un elemento
document.appendChild(element)//add un elemento
document.replaceChild(new, old)//remplasar un elemento
document.write(text)//	Write into the HTML output stream

document.getElementById(id).onclick = function(){code}//Adding event handler code to an onclick event
element.addEventListener(event, function, useCapture);//evento como click o mousedownnc
  //falta node collections
//DOM
window.innerHeight//te da el height
window.innerWidth//te da el whidth
window.open()//abre una ventana nueva vacia
window.close()//cierra la ventana actual

screen.width//te da la width
screen.height//te da el height
screen.availWidth// width disponible
screen.availHeight// height disponible

window.location.href // te da el url de la pagina
window.location.hostname //te da el nombre del host
window.location.pathname // te da el pathname
window.location.protocol // te da el web protocol
window.location.assign()//abre una nueva pagina
window.location.port//te da el port

window.history //historial
history.back() // retorcede uno hacia atras
history.forward() //avansa uno hacia adelante
history.go(-x)//retrocede x numero de paginas
history.length// te da cuantas paginas visitaste


window.navigator // informacion del navegador
navigator.appName // te da el appName (netscape)
navigator.appCodeName // te da el appcodename  (mozilla)
navigator.cookieEnabled // te dice si estan enable las galletas
navigator.product // teda nc (gecko)
navigator.appVersion // te da la bersion del broser
navigator.platform // te da el sistema operativo
navigator.language // te da el idioma
navigator.onLine // te dice si esta online
navigator.javaEnabled()// te dice si esta abilitado js

alert();//te da una alerta
confirm();//para confirmar o no  (true:si,false:no)
window.prompt("sometext","defaultText");//un popout yenable
/n //para poner saltos de linea

setTimeout(function, milliseconds) //para delay de tiempo para una funcion  sin()
setInterval(function, milliseconds) // lo mismo pero lo ejecuta varias veses  sin()
clearTimeout() //detiene el set time out (tiene que se variable)
clearInterval() // detiene el set interbal

document.cookie = "username=John Doe"; //crea una galleta
 "; expires=Thu, 18 Dec 2013 12:00:00 UTC";//fecha de expiracion de la galletas
 "path=/"//le da path
// no me funcionan las galletas

checkValidity() // te dice si el input esta bn
setCustomValidity() // das cual es el nc
validity // un bolean relacionado a el estado del input
.validationMessage//el mensaje que muetra si el eso es falso
willValidate //indica si va a validar el dato
customError //	Set to true, if a custom validity message is set.
patternMismatch // Set to true, if an element's value does not match its pattern attribute.
rangeOverflow //	Set to true, if an element's value is greater than its max attribute.
rangeUnderflow //	Set to true, if an element's value is less than its min attribute.
stepMismatch //	Set to true, if an element's value is invalid per its step attribute.
tooLong	// Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch //	Set to true, if an element's value is invalid per its type attribute.
valueMissing //	Set to true, if an element (with a required attribute) has no value.
valid	// Set to true, if an element's value is valid.

localStorage // para poner el item que dura para 100pre
sessionStorage//se borra cuando acaba la sesion
.key(n) //	Returns the name of the nth key in the storage
.length //	Returns the number of data items stored in the Storage object
.getItem(keyname) //Returns the value of the specified key name
.setItem(keyname, value) //	Adds that key to the storage, or update that key's value if it already exists
.removeItem(keyname)//	Removes that key from the storage
