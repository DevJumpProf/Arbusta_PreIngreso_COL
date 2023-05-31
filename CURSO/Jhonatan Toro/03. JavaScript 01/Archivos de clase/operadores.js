
//Permiten manipular el valor de las variables, hacer operaciones y comparar valores

//Asignación (=)

let edad = 25; 

//Aritméticos (+, -, *, /, ++, --, %)

console.log(10+20)
console.log(20-10)
console.log(20*10)
console.log(20/10)
console.log(15+=1)  //Incremento 
console.log(15-=1)  //Decremento
console.log(10%5)  //Módulo - Resto de la división

//Comparación simple

10==15 //false
10!=15 //true

//Comparación estricta - Compara el dato y su tipo

10==='10'  //Igual estricta - false
10!=='15'  //Estrictamente desigual - true

//Comparación

15>15  //false
15>=15  //true
10<10  //false
10<=10  //true

//Lógicos

(10>15)&&(10!=20) //and -- Se deben cumplir ambas condiciones}
(10>15)||(10!=20)  //or -- Basta con que se cumpla una condición
!(10>15)  //not -- Niega la condición, la invierte

//Concatenación -- Hay que tener cuidado con los tipos de variables que concatenamos

let nombre = "Jhonatan"
let apellido = "Toro"
let nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)



