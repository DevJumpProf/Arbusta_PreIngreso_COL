//espacio de memoria en la computadora

//var - let - const => tipos de variable

var nombre; //declarar
nombre = "Esteban"; //inicializar o asignar

var juegoFavorito = "Elden Ring"; //declarar e inicializar
console.log(juegoFavorito); //mostrar en consola el valor de la variable


let boxeador = "Canelo";
console.log(boxeador);
//la diferencia entre var y let, es que let solo se puede usar en el scope donde se declaro o bloque de codigo donde se declaro
//var se puede usar en todo el codigo

if (true) {
    let numero = 10;     
    //solo funciona con var
}
console.log(numero);

const PI = 3.1416;
//recomendable declarar en mayusculas
//const no se puede reasignar
PI = 3.15;
console.log(PI);
//const se usa para valores que no van a cambiar