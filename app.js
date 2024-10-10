/*
//video 11
// var let const

let nombre, mensaje;

nombre = 'Juan Pablo';
nombre = "Juan Pablo";
// nombre = 'Juan Pablo';
mensaje = 'Y entonces dije \'Buen Curso!!\'';

//Concatenar JavaScript

mensaje = 'JAVA' + 'SCRIPT';

// uniendo variables en una sola
let aprendiendo = "Aprendiendo",
    tecnologia = 'JavaScript';

console.log(`${aprendiendo} ${tecnologia}`);

//video 12 Strings o Cadenas de Texto y sus metodos en Javascript
console.log(tecnologia.length)

console.log(tecnologia.concat(' ', 'Es genial'))

let numero = "300";
console.log(tecnologia.toUpperCase()); //Solo funciona con strings
console.log(numero.toLowerCase()); //Solo funciona con strings

mensaje = 'Aprendiendo JavaScript, CSS, Html para ser Frontend'

console.log(mensaje.indexOf('JavaScript'));

// Video 14 numeros en JavaScript y Operaciones Pt 1

const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .1020;
const numero5 = -3;
let resultado;
//suma
resultado = numero1 + numero2;
//resta
resultado = numero1 - numero2;
//multiplicar 
resultado = numero1 * numero2;
//divisiones
resultado = numero1 / numero2;
//Modulo
resultado = numero1 % numero2;
//Pi
resultado = Math.PI;
//redondeo
resultado = Math.round(2.4)
resultado = Math.ceil(2.4) //redondea hacia arriba
resultado = Math.floor(2.4) // redondea hacia abajo
// Raiz cuadrada
resultado = Math.sqrt(144);
//absoluto
resultado = Math.abs(numero5)
//potencia
resultado = Math.pow(2, 3);
//Minimo
resultado = Math.min(3,6,5,1,9,7,8);
//Maximo
resultado = Math.max(3,6,5,1,9,7,8);
// Aleatorio
resultado = Math.random();

resultado = (10 + 20) * 5;

resultado = (10 + 20 + 20 + 10 + 40) * .20;
let puntaje;

puntaje = 20
20
puntaje += 3;
23


console.log(puntaje)

//video 16 Tipos de Dato en javaScript
let valor;
valor = 'Juan';
valor = 20;
valor = 20.20;
valor = -30;
valor = "20";
valor = {
    nombre: 'juan'}
// Booleanos
valor = false;
// null
valor = null;

//Symbol
valor = Symbol('Simbolo')
//arreglo o array
valor = [1,2,3,4];
//objetos
valor = {
    nombre: 'Juan',
    profesion: ' Desarrollador Web'
}
// fecha
valor = new Date()
console.log(typeof valor)

//Video 17 Operadores de comparacion en Javascript
//const numero1 = 20;
//const numero2 = 50;
//const numero3 = '20';
//let nombre = 'juan';
//let nombre2 = 'pedro'

// console.log( numero1 > numero2);
// console.log( numero1 < numero2);

// comparador de Igual
// console.log( numero1 === numero3 );

// Diferentes
// console.log(2 != 3);
// console.log('hola' == ' hola');
// console.log('z' > 'A');

//console.log(null === undefined);

// console.log( nombre == nombre2);

// Video 18 Convertir strings a Numeros en JavaScript


const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

//console.log("Java" + "String")

// console.log( numero1 + numero2);

//console.log( typeof Number(numero1));

//console.log(Number(numero1) + numero2)
//console.log(parseInt(numero1) + numero2)
//console.log(numero1 - numero2);
//console.log(parseInt(numero3) );


let dato;
dato = Number("20")
dato = Number('20.10931');
dato = Number(true);
dato = Number(undefined);
dato = Number([1,2,3,4,5]);


// ParseFloat y ParseInt
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat('100.2030');
dato = parseInt('100.2030');

// toFixed
dato = 18929173;
dato = 18929173.9812912871371193899;
console.log(dato.toFixed(3)); // toFixed es para agregar numeros a la derecha de la coma
console.log(typeof dato);

dato = '18929173.9812912871371193899';
console.log(parseFloat(dato).toFixed(4));

//convertir de un Numero a un string
let cp;
cp = 90210;
cp = String(cp);
//console.log(cp.length); //length solo esta disponible para cadenas de texto\
let dato;
dato = '4' + '4';

dato = String(dato);
// Booleano
dato = true
dato = false

// De arreglo a String
//dato = String([1,2,3])

// toString();
dato = 20;
dato = true;
dato = [1,2,3,4];
dato = null; //Es un valor que no existe por lo tanto imprime en la consola Cannot read properties of null
dato = undefined; //Tambien pasa lo mismo con undefined
dato = dato.toString();

console.log(dato)
console.log(dato.length) //undefined porque no es metodo que se pueda aplicarse con booleanos
console.log(typeof dato)

//Video 21 Template literals o String literals
const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;

let html;

html = '<ul>' +
       '<li>Orden: ' + producto1 + '</li>' +
       '<li>Precio: ' + precio1 + '</li>' +
       '<li>Orden: ' + producto2 + '</li>' +
       '<li>Precio: ' + precio2 + '</li>' +
       '<li>Total: ' + (precio1 +  precio2) + '</li>' +
       '</ul>'

html =  `
        <ul>
            <li>Orden: ${producto1} </li>
            <li>Precio: ${precio1} </li>
            <li>Orden: ${producto2} </li>
            <li>Precio: ${precio2} </li>
            <li>Total: ${total(precio1, precio2)} </li>
        </ul>
        `;

        function total(precio1,precio2) {
            return precio1 + precio2;
        }
        document.getElementById('app').innerHTML = html;


//video 22 Arreglos en JavaScript y sus metodos
// Arreglo mezclado
//const mezclado = ['Hola', 20, true, , null, false, undefined];
//console.log(mezclado);

//Crear un arreglo

const numeros = [10, 20, 30, 40, 50];
//console.log(numeros);

// Arreglo de Strings (metodo alternativo)
const meses = new Array("enero", "febrero", 'Marzo', 'Abril');
//console.log(meses.length);
//let nombre = 'Juan';

//Anadir en un arreglo
meses[4] = 'Mayo';
meses.push("Junio");
// Encontrar un elemento en el arreglo

//console.log(meses.indexOf("Abril"));
// Anadir al inicio del arreglo
meses.unshift('Mes 0');

// Eliminar el ultima elemento de un arreglo
meses.pop();
// Eliminar un elemento del arreglo (el primero)
meses.shift();
// Quitar un rango
meses.splice(2,1);
//revertir
meses.reverse();
// Unir un arreglo con otro
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];
//console.log(arreglo1.concat(arreglo2));  // para concatenar arreglos
//Ordenar un arreglo
const frutas = ['Banana', 'Manzana', 'Frutrilla', 'Naranja'];
frutas.sort(); //Ordenar un arreglo con strings
//console.log(frutas);

// Ordenar numeros

arreglo1 = [3,9, 91,92, 23, 45, 21, 56, 1, 100, 10];

arreglo1.sort(function(x, y) {
        return x - y;
})

console.log(arreglo1)

//Video 25 La variable const en objetos y arreglos
let numeros = [1,2,3];

numeros[0] = 4;
numeros.push(5);

numeros = ['Enero', 'Febrero']

console.log(numeros)

//Video 26 Objetos en JavaScript (diccionarios en python)
//Crear Objeto

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Disenador grafico',
    email: 'correo@correo.com',
    edad: 20,
    musica: ['Trance', 'Rock', 'Grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}
const persona2 = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Disenador grafico',
    email: 'correo@correo.com',
    edad: 30,
    musica: ['Trance', 'Rock', 'Grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}



//persona.musica.push('Alternativo')

//console.log(persona.hogar.pais); //El profesor dice que es mas utilizado

//console.log(persona['hogar']['pais']) //como acceder a un valor del objecto(diccionario) parecido a python

console.log(persona2.nacimiento());

// Video 27 Creando Arreglo de Objetos(lista de diccionarios)

//Arreglo de Objetos
const autos = [
    {modelo: 'Mustang', motor: 6.2},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.3}
];
autos[0].modelo = 'Audi'

for(let i = 0;i <autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].motor} `);
}
*/
//Video 28 Funciones en javaScript
//Function Declatation
//function saludar(nombre){
//    console.log(`Hola ${nombre}`);
//}
//saludar('Alma') //llamamos a la funcion igual que en python
//saludar('Pablo')
//saludar('Carolina')

function sumar(a,b) {
    console.log(a + b);
}
sumar(1,2)
sumar(3,4)