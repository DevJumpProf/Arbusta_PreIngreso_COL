/*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

/* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Santiago Meneses";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 20;

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
var precioTv = 450000;
var iva = (14/100);
var productoConIva = (precioTv * iva) + (precioTv);
alert(`El valor del TV sin iva es de $${precioTv}, adicionando el iva queda en $${productoConIva}`); 

/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 169 */

// tu solucion: 


var ladoDelCuadrado = 40;
var perimetroDelCuadrado = ladoDelCuadrado + ladoDelCuadrado + ladoDelCuadrado 
var AreaDelCualdrado = ladoDelCuadrado * ladoDelCuadrado
alert(`El lado del cuadrado es de ${ladoDelCuadrado}cm, para calcular su área debemos multiplicar lado por lado y como resultado tenemos: AREA: ${AreaDelCualdrado}cm². Y el perimetro lo podemos calcular sumando todos sus lados, teniendo como resultado ${perimetroDelCuadrado}cm`);


/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion: 

var nombreUsuario, saludarUsuario;
nombreUsuario = prompt("Bienvenido, ingrese su nombre por favor.");
saludarUsuario = `Hola ${nombreUsuario}, ¿Cómo estás?`;
alert(saludarUsuario);



/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion: 
// ! Corregir esta parte del código, resultado diferente al esperado.
var numeroUno, numeroDos, numeroTres, mediaNumeros;
alert("Hola bienvendio, a continuación vas a ingresar 3 números.")
numeroUno = prompt("Ingresa el primer número");
numeroDos = prompt("Ingresa el segundo número");
numeroTres = prompt("Ingresa el tercer número");
mediaNumeros = ((numeroUno + numeroDos + numeroTres)/(3));
alert(`La media de los 3 números que ingresaste (${numeroUno}, ${numeroDos}, ${numeroTres}) es: ${mediaNumeros}`);

/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion: 


/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solucion:  */

/* 7-Una tortilla de papas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */

/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución

/* 8-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/






