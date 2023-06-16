 01//Usando un bucle for escribir un script que pida un valor entero
 // y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
 //Los números se separarán por comas.  */ 

const valorQueIngreseElUsuario = prompt("Escribe un valor")
for (i=0;i<=valorQueIngreseElUsuario;i++) { 
  console.log(i+ ",")
}

/* 02-Se trata de que dado un número entero el script muesre una cuenta atrás, es decir,
 una lista de numeros separados por coma desde el número tecleado hasta el 0. */

const numeroQueMuestreElUsuario = prompt("Escribe un valor")
for (i = numeroQueMuestreElUsuario; i > 0; i--) {
    console.log(i + ",")
}

/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee.
 La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

const numeroQueTecleeLaPersona = prompt("Escribe un numero")

for (i = 0; i <= numeroQueTecleeLaPersona; i++) {
    console.log(numeroQueTecleeLaPersona + "x" + i + "=" + numeroQueTecleeLaPersona * i)
  }

/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará 
una cadena formada por la letra repetida el número que haya tecleado. */

const letraQueTecleeLaPersona = prompt("Escribe una letra")
const numQueTecleeLaPersona = prompt("Escribe una numero")

console.log(letraQueTecleeLaPersona.repeat(numQueTecleeLaPersona))


/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez).
 Con esos números el programa deberá calcular la media aritmética. Osea la suma de los 4 números
  dividida entre 4 */

const primerNumeroTecleadoPorLaPersona = parseInt(prompt("Escribe un numero"))
const segundoNumeroTecleadoPorLaPersona = parseInt(prompt("Escribe un numero"))
const tercerNumeroTecleadoPorLaPersona = parseInt(prompt("Escribe un numero"))
const cuartoNumeroTecleadoPorLaPersona = parseInt(prompt("Escribe un numero"))

console.log((primerNumeroTecleadoPorLaPersona + segundoNumeroTecleadoPorLaPersona + tercerNumeroTecleadoPorLaPersona + cuartoNumeroTecleadoPorLaPersona) / 4)
  
/* 05 Usando un bucle while escribir un script que pida un valor entero y 
cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista
 con un alert. Los números se separarán por comas.  */

const numeroEntero = prompt("Escribe un numero entero")

i = 0;
while (i <= numeroEntero) {
    i++;
    console.log(i)
}


/* 06-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno 
que esté fuera de ese rango deberá volver a pedir el número */

const numeroDeLaPersona = prompt("Escribe un numero del 1 al 5 ")
if (numeroDeLaPersona>5) {
    console.log("Debera volver a pedir el numero")
} else {
    console.log("Se mostrara el numero")
}

/* 07 Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje
 "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres 
 veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso. */

/* solucion*/

const contraseña = prompt("Escribe una contraseña");

for (let contador = 0; contador < 3; contador++) {
    if (contraseña == "michell12") {
        console.log("Acceso concedido");
        contador = 0;
    } else {
        console.log("Acceso Denegado");

        if (contador == 3) {
            console.log("Acceso Intruso")
        }
    }
}

//8 Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

let notaIndicadoPorLaPersonaTest = parseInt(prompt("Escribe un nota"));

do {
    if (0 < notaIndicadoPorLaPersonaTest && notaIndicadoPorLaPersonaTest <= 3) {
        console.log("Muy deficiente");
    } else if (3 < notaIndicadoPorLaPersonaTest && notaIndicadoPorLaPersonaTest <= 5) {
        console.log("Insuficiente");
    } else if (5 < notaIndicadoPorLaPersonaTest && notaIndicadoPorLaPersonaTest <= 6) {
        console.log("Suficiente")
    }
    else if (6 < notaIndicadoPorLaPersonaTest && notaIndicadoPorLaPersonaTest <= 7) {
        console.log("Bien")
    }
    else if (7 < notaIndicadoPorLaPersonaTest && notaIndicadoPorLaPersonaTest <= 9) {
        console.log("Notable")
    }
    else if (9 < notaIndicadoPorLaPersonaTest <= 10) {
        console.log("Sobresaliente")
    }
    notaIndicadoPorLaPersonaTest = 20;
} while (notaIndicadoPorLaPersonaTest < 11);

//9 Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 
//8 veces
//Retornar el valor final.

 const valorAumentado = parseInt(prompt("Escribe un valor"));
 
 function retornarElValor(valorAumentado) {
    let contador = 0;
    do {
        valorAumentado = valorAumentado + 5;
        contador++;
      } while (contador < 8);

      console.log("mostrar el valor final ", valorAumentado)
      
 }

 retornarElValor(valorAumentado);


/* 10 Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y
 mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para 
 los mensajes */

let pedirLetra = prompt("Escrible la letra A en Mayuscula");

do {
    alert("por favor Volver a escribir la letra A");
    pedirLetra = prompt("Escrible la letra A en Mayuscula");


} while (pedirLetra !== "A");

console.log("Escribiste la letra A, Felicitaciones!!!");

