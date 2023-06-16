/*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Stiven Berrio";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 88;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
 
 /* 01- Realizaste una compra y sabes el precio del producto (inventalo) y su iva (21)%. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100. */

/* Ayuda:
Precio 100€
Iva: 21%
El total son 121 €. */

// tu solucion: 

console.log("Ejercicio con IVA")
console.log("chaqueta de cuero")
var precio = 120;
var iva = (21/100);
var total = precio * (1 + iva);
alert(`Valor de chaqueta sin IVA: $${precio}
IVA = 21% ($${precio*iva})
Total con IVA: $${total}`); 


/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 169 */

// tu solucion: 
console.log("AREA Y PERIMETRO");

var ladoDelCuadrado = 40;
var perimetroDelCuadrado = ladoDelCuadrado + ladoDelCuadrado + ladoDelCuadrado + ladoDelCuadrado;
var AreaDelCualdrado = ladoDelCuadrado * ladoDelCuadrado;
alert(`Lado del cuadrado = ${ladoDelCuadrado}cm 
AREA = ${AreaDelCualdrado}cm². 
PERIMETRO = ${perimetroDelCuadrado}cm`);


/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion: 
console.log("SALUDO DE USUARIO");

var nombre 
var saludo
nombre = prompt("Hola ingrese su nombre por favor.");
saludo = `Hola ${nombre}, Bienvenido`;
alert(saludo);


/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion: 
console.log("ejercicio 4")
alert("medida numeros");

var numerouno, numerodos, numerotres, medias;
alert("Hola bienvendio,  ingrese 3 números por favor.")
numerouno = parseInt(prompt("Ingresa un número"));
numerodos = parseInt(prompt("Ingresa un número"));
numerotres = parseInt(prompt("Ingresa un número"));
medias = (numerouno+numerodos+numerotres)/3;

alert(`La media de los 3 números que ingresaste  es: ${parseInt(medias)}`);


/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion: 
alert("ejercicio 5")
alert("CONSUMO DE GASOLINA");

var gasolina, km, gasolinaxkm;

km = parseInt(prompt("Ingrese los kilometros que ha recorrido"));
gasolina = parseInt(prompt("ingrese la gasolina consumida"));
gasolinaxkm = gasolina/km;


alert(`'Has consumido '${gasolinaxkm}L' por cada kilometro recorrido`)



/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solucion:  */
alert("Ejercicio 6");
alert("Convercion a segundos, bienvenido.")
function segundos() {
    var horas = parseInt(prompt("ingrese un valor de horas oara convertir a segundos"));
    var minutos = parseInt(prompt("ingrese un valor en minutos para convertir a segundos"));
    var segundosaminutos = minutos * 60;
    var segundosahora = horas * 60 * 60;

    return alert(`Hora que ingresaste: ${horas}h ${minutos}m
    ${horas}Hora/s a Segundos = ${segundosHora} segundos
    ${minutos}Minuto/s a Segundos = ${segundosMinutos} segundos
    Total = ${segundosahora + segundosaminutos} segundos`);
}

segundos();

/* 7-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */
alert("ejercicio 7");

var comensales, kgpapas, huevos, grcebolla;
    comensales = parseInt(prompt("ingrese numero de comensales"));
    kgPapas = comensales * 0.2;
    huevos = kgpapas * 5;
    grcebolla = kgpapas * 300;
    alert(`Para ${comensales} comensales se necesitan: ${kgpapas} Kg de papas, ${huevos} huevos y ${grcebolla} gramos de cebolla`);


/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. 
No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución

alert("¿PAR O IMPAR?");
alert(`. 
PAR = TRUE
IMPAR = FALSE`)
var numero = parseInt(prompt("Ingresa por favor un número"));

function ParImapr(numero) {
    let parImpar = numero % 2 == 0;
    
    return parImpar;
}

alert(ParImapr(numeroUsuario));

/* 8-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/
alert("OBJETOS")

var nombre, notaIngles, notaProgramacion, notaHtml, promedio;
  
nombre = prompt("¿Cuál es tu nombre?");
notaIngles = parseInt(prompt("¿Cuál es tu nota en Inglés?"));
notaProgramacion = parseInt(prompt("¿Cuál es tu nota en Programación?"));
notaHtml = parseInt(prompt("¿Cuál es tu nota en HTML?"));
promedio = (notaIngles + notaProgramacion + notaHtml)/(3); promedio = promedio.toFixed(1);
let estudiante = {
    nombre: nombre,
    ingles: notaIngles,
    programacion: notaProgramacion,
    html: notaHtml,
    promedio: promedio
};

alert(`Hola ${estudiante.nombre}
Tu promedio es de: ${estudiante.promedio}`);
alert("un gusto haberte ayudado")






