
/* CICLOS FOR / WHILE / DO WHILE */

/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
Los números se separarán por comas.  */

//ayuda: Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  

//solución:

console.log("------------------Ejercicio #1------------------");
console.log("                                                ");

function escribirNumeros(num) {
    let numeros = [];
    for (let i = 0; i <= num; i += 1) {
        numeros.push(i);
    }
    let resultado = numeros.join(", ");  //Uno los números del objeto con comas
    console.log(resultado);
}

//escribirNumeros(parseInt(prompt("Ingrese un número: ")));  --> Al usar prompt la terminal se crashea, entonces paso el número como parámetro
escribirNumeros(5);

console.log("                                                ");


/* 02-Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

/* ayuda: Si tecle o número 5 deberá mostarar 5,4,3,2,1. */

//solución

console.log("------------------Ejercicio #2------------------");
console.log("                                                ");

function escribirNumerosReversa(num) {
    let numeros = [];
    for (let i = num; i >= 0; i -= 1) {
        numeros.push(i);
    }
    let resultado = numeros.join(", ");  //Uno los números del objeto con comas
    console.log(resultado);
}

//escribirNumerosReversa(parseInt(prompt("Ingrese un número: ")));  --> Al usar prompt la terminal se crashea, entonces paso el número como parámetro
escribirNumerosReversa(5);

console.log("                                                ");


/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee. 
La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

/* ayuda: Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma
4 x 1 = 4
4 x 2 = 8... */

//solución:

console.log("------------------Ejercicio #3------------------");
console.log("                                                ");

function escribirTablaMultiplicar(num) {
    let numeros = [];
    for (let i = 1; i <= 10; i += 1) {
        let producto = num * i;
        console.log(`${num} x ${i} = ${producto}`);
    }
}

//escribirTablaMultiplicar(parseInt(prompt("Ingrese un número: ")));  --> Al usar prompt la terminal se crashea, entonces paso el número como parámetro
escribirTablaMultiplicar(4);

console.log("                                                ");


/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* ayuda: Si la persona teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */

//solución:

console.log("------------------Ejercicio #4------------------");
console.log("                                                ");

function escribirCadena(letra, num) {
    let letras = [];
    for (let i = 1; i <= num; i += 1) {
        letras.push(letra);
    }
    let resultado = letras.join("");  //Uno los números del objeto con comas
    console.log(`Cadena de ${num} veces la letra ${letra}: ${resultado}`);
}

//escribirCadena(prompt("Ingrese una letra: "), parseInt(prompt("Ingrese un número: ")));  --> Al usar prompt la terminal se crashea, entonces paso el número y la letra como parámetros
escribirCadena("x", 5);

console.log("                                                ");

/* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. 
O sea la suma de los 4 números dividida entre 4 */

/* ayuda: El progrma pide 4 veces a la persona que teclee un número y este escribe 5,9,10,12. El programa dirá "La media es 9" */

//solución:

console.log("------------------Ejercicio #5------------------");
console.log("                                                ");

function calcularMedia() {
    let suma = 0;
    /*for (let i = 1; i <= 4; i += 1) {
        let num = parseInt(prompt(`Ingrese el número #${i}:`));    -->Así se haría haciendo uso del ciclo for, pero voy a pasar los números manualmente para que la terminal no crashee
        suma += num;
    } */
    let num1 = 5;
    let num2 = 9;
    let num3 = 10;
    let num4 = 12;
    suma = (num1 + num2 + num3 + num4);
    let media = suma / 4;
    console.log(`La media aritmética es de: ${media}`);
}

//calcularMedia();  --> Al usar prompt la terminal se crashea, entonces paso los números manualmente
calcularMedia();

console.log("                                                ");


/* 06-Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. 
Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

/*ayuda: Si le doy el número 5 pues deberá contar 0,1,2,3,4,5 */

//solución:

console.log("------------------Ejercicio #6------------------");
console.log("                                                ");

function escribirLista(num) {
    let numeros = [];
    let i = 0;
    while (i <= num) {
        numeros.push(i);
        i += 1;
    }
    //alert(`Conteo: ${numeros}`);      --> Así se mostraría con el alert, pero lo muestro por consola para no crashear la terminal
    console.log(`Conteo: ${numeros}`);
}

//escribirLista(parseInt(prompt("Ingrese un número: ")));  --> Al usar prompt la terminal se crashea, entonces paso el número como parámetro
escribirLista(5);

console.log("                                                ");


/* 07-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

/*ayuda: Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5. */

// solución: 

console.log("------------------Ejercicio #7------------------");
console.log("                                                ");

function verificarRango(num) {
    while ((num < 1) && (num > 5)) {
        num = parseInt(prompt("Error, Ingrese un número entre 1 y 5: "));
    }
    console.log(`El número ${num} pertenece al rango entre 1 y 5`);
}

//verificarRango(parseInt(prompt("Ingrese un número entre 1 y 5: ")));  --> Al usar prompt la terminal se crashea, entonces paso el número como parámetro
verificarRango(4);

console.log("                                                ");


/* 08-Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado". 
Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

/* ayuda: La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Alerta, intruso. */

// solución:

console.log("------------------Ejercicio #8------------------");
console.log("                                                ");

function verificarContraseña(password) {
    let i = 2;
    while ((i >= 1) && (password != "entrar")) {
        password = prompt(`Acceso denegado, le quedan ${i} intentos: `);
        i -= 1;
        if (i == 0) {
            console.log(`Alerta, intruso!!`);
        }
    }
    if (password == "entrar") {
        console.log(`Acceso concedido`);
    }
}

//verificarContraseña(prompt("Ingrese la contraseña: "));  --> Al usar prompt la terminal se crashea, entonces paso la contraseña como parámetro
verificarContraseña("entrar");

console.log("                                                ");


// 09-Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

//ayuda: UTILIZAR condicionales y DO - WHILE

//solución: 

console.log("------------------Ejercicio #9------------------");
console.log("                                                ");

function darCalificacion(nota) {
    do {
        //nota = parseInt(prompt("Ingrese la nota: "));     --> Así pediría este dato desde la web, por ahora, lo paso como parámetro para no crashear la terminal
    } while (isNaN(nota) || nota < 0 || nota > 10)

    let calificacion;

    if (nota >= 0 && nota <= 3) {
        calificacion = "Muy deficiente";
    } else if (nota > 3 && nota <= 5) {
        calificacion = "Insuficiente";
    } else if (nota > 5 && nota <= 6) {
        calificacion = "Suficiente";
    } else if (nota > 6 && nota <= 7) {
        calificacion = "Bien";
    } else if (nota > 7 && nota <= 9) {
        calificacion = "Notable";
    } else if (nota > 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    }
    console.log(`La calificación correspondiente a una nota de ${nota} es: ${calificacion}`);
}
darCalificacion(7);

console.log("                                                ");


// 10-Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.

//ayuda: Usar el bucle do ... while.

//solución:

console.log("------------------Ejercicio #10------------------");
console.log("                                                 ");

function calcularAumento(num) {
    let i = 8;

    do {
        num += 5;
        i -= 1;
    } while (i >= 1)

    console.log(`El valor final es de: ${num}`)
}

calcularAumento(10);

console.log("                                                ");


/* 11-Realiza un script que le pida al usuario que teclee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. 
Usa un bulce do..while y la ventana alert para los mensajes */

/* ayuda: El usuario teclea b, el programa vuelve a pedirme que teclee una letra*/

//solución: 

console.log("------------------Ejercicio #11------------------");
console.log("                                                 ");

function verificarLetra(letra) {
    do {
        //nota = parseInt(alert("Ingrese la letra A en mayúscula: "));    --> Así pediría este dato desde la web, por ahora, lo paso como parámetro para no crashear la terminal
    } while (letra != "A")

    console.log("Letra correcta")
}

verificarLetra("A");

console.log("                                                ");