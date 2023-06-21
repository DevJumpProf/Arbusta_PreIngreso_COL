/* Total de puntos 100
Los ejercicios tienen un valor de 2 puntos a excepción de:
operadoresLogicos
esVerdadero
doWhile
diaDeLaSemana
nuevoUsuario
tieneEmail
verificarPassword
Estos ejercicios Tienen un puntaje de 6 puntos */


// * ------------------------------------------------------------------- * //

alert("DEVOLVER");

function devolverString(str) {
    // "devolver" la string provista: str
    // Tu código:
    return console.log(`Escribiste: ${str}`);
}

let stringDevuelto = prompt("Escribe lo que quieras");
devolverString(stringDevuelto);

// * ------------------------------------------------------------------- * //

alert("SUMA");

function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    return console.log(`El resultado de ${x} + ${y} es: ${x+y}`);
}

let numeroUno = Number(prompt("Escribe un número para sumar"));
let numeroDos = Number(prompt("Escribe otro número para sumar"));
suma(numeroUno, numeroDos);

// * ------------------------------------------------------------------- * //

alert("RESTA");

function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    return console.log(`El resultado de ${x} - ${y} es: ${x-y}`);
}

numeroUno = Number(prompt("Escribe un número para restar"));
numeroDos = Number(prompt("Escribe otro número para restar"));
resta(numeroUno, numeroDos);

// * ------------------------------------------------------------------- * //

alert("MULTIPLICAR");

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    return console.log(`El resultado de ${x} x ${y} es: ${x*y}`);
}

numeroUno = Number(prompt("Escribe un número para multiplicar"));
numeroDos = Number(prompt("Escribe otro número para multiplicar"));
multiplica(numeroUno, numeroDos);

// * ------------------------------------------------------------------- * //

alert("DIVIDIR");

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    return console.log(`El resultado de ${x} / ${y} es: ${(x / y).toFixed(2)}`);
}

numeroUno = Number(prompt("Escribe un número para dividir"));
numeroDos = Number(prompt("Escribe otro número para dividir"));
divide(numeroUno, numeroDos);

// * ------------------------------------------------------------------- * //

alert("VALORES IGUALES");

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    let igualdad = x === y;
    return console.log(`¿Es '${x}' igual a '${y}'? = ${igualdad}`);
    
}

let valorUno = prompt("Escribe algún valor");
let valorDos = prompt("Escribe otro valor para compararlo con el anterior");
sonIguales(valorUno, valorDos);


// * ------------------------------------------------------------------- * //

alert("MISMA LONGITUD");

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    
    let comparacion = str1.length === str2.length;

    return console.log(`¿'${str1}' tiene la misma longitud que '${str2}'? = ${comparacion}`);

}

valorUno = prompt("Escribe algún valor");
valorDos = prompt("Escribe otro valor para compararlo con el anterior");
tienenMismaLongitud(valorUno, valorDos);

// * ------------------------------------------------------------------- * //

alert("¿MENOR QUE 90?");

function menosQueNoventa(num) {
// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
    let validacion = num < 90;

    return console.log(`¿Es '${num}' menor que '90'? = ${validacion}`);
}

numeroUno = Number(prompt("Ingrese un número"));
menosQueNoventa(numeroUno);

// * ------------------------------------------------------------------- * //

alert("MAYOR QUE 50?");

function mayorQueCincuenta(num) {
// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
    let validacion = num > 50;

    return console.log(`¿Es '${num}' mayor que '50'? = ${validacion}`);
}

numeroUno = Number(prompt("Ingrese un número"));
mayorQueCincuenta(numeroUno);

// * ------------------------------------------------------------------- * //

alert("¿CUÁL ES EL RESTO?");

function obtenerResto(x, y) {
// Obten el resto de la división de "x" entre "y"
// Tu código:

    let resto = x % y;

    return console.log(`El resto de ${x} entre ${y} es: ${resto}`);

}

numeroUno = Number(prompt("Escribe un número para dividir"));
numeroDos = Number(prompt("Escribe otro número para dividir"));
obtenerResto(numeroUno, numeroDos);


// * ------------------------------------------------------------------- * //

alert("¿ES PAR?");

function esPar(num) {
// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:

    let validacion = num % 2 == 0;

    return console.log(`¿Es '${num}' Par? = ${validacion}`);
}
numeroUno = Number(prompt("Escribe un número"));
esPar(numeroUno);

// * ------------------------------------------------------------------- * //

alert("¿ES IMPAR?");

function esImpar(num) {
// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:

    let validacion = num % 2 == 1;

    return console.log(`¿Es '${num}' Impar? = ${validacion}`);
}

numeroUno = Number(prompt("Escribe un número"));
esImpar(numeroUno);

// * ------------------------------------------------------------------- * //

alert("¿ES POSITIVO?");

function esPositivo(numero) {
//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
    let mensaje; 

    if (numero > 0) {
        mensaje = console.log(`El número ${numero}: Es positivo`);
    } else if (numero < 0) {
        mensaje = console.log(`El número ${numero}: Es negativo`);   
    } else {
        mensaje = console.log(false);
    }

    return mensaje;

}

numeroUno = Number(prompt("Escribe un número"));
esPositivo(numeroUno);

// * ------------------------------------------------------------------- * //

alert("EXCLAMACIÓN");

function agregarSimboloExclamacion(str) {
// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:

    let signoAñadido = `${str}!`;

    return console.log(signoAñadido);

}

valorUno = prompt("Ingresa algúnd dato");
agregarSimboloExclamacion(valorUno);

// * ------------------------------------------------------------------- * //

alert("NOMBRE Y APELLIDO");

function combinarNombres(nombre, apellido) {
// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "devJump" -> "Soy devJump"
// Tu código:

    let nombreCompleto = `${nombre} ${apellido}`;

    return console.log(nombreCompleto);

}

let nombreUsuario = prompt("Ingresa tu nombre");
let apellidoUsuario = prompt("Ingresa tu apellido");
combinarNombres(nombreUsuario, apellidoUsuario)


// * ------------------------------------------------------------------- * //

alert("SALUDO");

function obtenerSaludo(nombre) {
// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:

    let saludo = `Hola ${nombre}`;

    return console.log(saludo);
}

nombreUsuario = prompt("Ingresa tu nombre");
obtenerSaludo(nombreUsuario);

// * ------------------------------------------------------------------- * //

alert("AREA DEL RECTANGULO");

function obtenerAreaRectangulo(alto, ancho) {
// Retornar el area de un rectangulo teniendo su altura y ancho
// Tu código:

    let resultado = `El área del rectangulo que informas es de: ${alto * ancho}cm²`;

    return console.log(resultado);
}

let altoRectangulo = Number(prompt("Ingresa el alto del rectangulo en CM"));
let anchoRectangulo = Number(prompt("Ingresa el ancho del rectangulo en CM"));
obtenerAreaRectangulo(altoRectangulo, anchoRectangulo);


// * ------------------------------------------------------------------- * //

alert("PERIMETRO");

function retornarPerimetro(lado){
//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.

    let perimetro = lado * 4;

    return console.log(`El perimetro del cuadrado es: ${perimetro}`);

}

let perimetroCuadrado = Number(prompt("Ingrese el lado del cuadrado en CM"));
retornarPerimetro(perimetroCuadrado);

// * ------------------------------------------------------------------- * //

alert("AREA DEL TRIANGULO")

function areaDelTriangulo(base, altura){
//Desarrolle una función que calcule el área de un triángulo.
//Escribe tu código aquí

    let areaTriangulo = (base*altura)/2;

    return console.log(`El área del triangulo que compartes es: ${areaTriangulo}cm`);

}

let baseTriangulo = Number(prompt("Ingresa la base del triangulo en CM"));
let alturaTriangulo = Number(prompt("Ingresa la altura del triangulo en CM"));
areaDelTriangulo(baseTriangulo, alturaTriangulo);


// * ------------------------------------------------------------------- * //

alert("EURO A DOLAR")

function deEuroAdolar(euro){
//Supongamos que 1 euro equivale a 1.20 dólares. 
//Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí

    let conversion, dolar;
    dolar = 1.20;
    conversion = euro * dolar;

    return console.log(`${euro}EURO/S equivalen a ${conversion}DOLARES`);

}

let euroUsuario = Number(prompt("Ingrese la cantidad de EUROS que desea convertir"));
deEuroAdolar(euroUsuario);


// * ------------------------------------------------------------------- * //

alert("¿ES VOCAL?");

function esVocal(letra){
//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí

    let letraMinuscula = letra.toLowerCase()
    let validacion = ((letraMinuscula == "a")||(letraMinuscula == "e")||(letraMinuscula == "i")||(letraMinuscula == "o")||(letraMinuscula == "u"));

    if (letra.length == 1) {
        if (validacion) {
            console.log(`La '${letraMinuscula}'es vocal.`);
        } else {
            console.log(`La '${letraMinuscula}'no es vocal.`);
        }
    } else {
        console.log("Dato incorrecto");
    }

}

let vocalUsuario = prompt("Escribe una letra");
esVocal(vocalUsuario);

// * ------------------------------------------------------------------- * //

alert("NÚMERO MAYOR");

function obtenerMayor(x, y) {
// "x" e "y" son números enteros (int).
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:

    x > y ? console.log(`El número mayor entre ${x} y ${y} es: ${x}`) : console.log(`El número mayor entre ${x} y ${y} es: ${y}`);
    
}

numeroUno = Number(prompt("Ingrese un número"));
numeroDos = Number(prompt("Ingrese otro número"));
obtenerMayor(numeroUno, numeroDos);


// * ------------------------------------------------------------------- * //

alert("¿ERES MAYOR?");

function mayoriaDeEdad(edad) {
//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"

    edad >= 18 ? console.log("Allowed") : console.log("Not allowed");

}

let edadUsuario = Number(prompt("Ingresa tu edad"));
mayoriaDeEdad(edadUsuario);

// * ------------------------------------------------------------------- * //

alert("STATUS DEL USUARIO");

function conection(status) {
//Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.

    switch (status) {
        case 1:
            console.log("Online");
            break;
        case 2:
            console.log("Away");
            break;
        default:
            console.log("Offline");
            break;
    }

}

let estadoUsuario = Number(prompt("Ingresa el estado en el que te encuentras"));
conection(estadoUsuario);

// * ------------------------------------------------------------------- * //

alert("IDIOMAS");

function saludo(idioma) {
// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:

    let idiomaLower = idioma.toLowerCase();

    switch (idiomaLower) {
        case "aleman":
            console.log("Guten Tag!");
            break;
        case "mandarin":
            console.log("Ni Hao!");
            break;
        case "ingles":
            console.log("Hello!");
            break;
        default:
            console.log("Hola!");
            break;
    }

}

let idiomaParaSaludar = prompt("Escribe el idioma en el que deseas ser saludado: Aleman, mandarin, ingles");
saludo(idiomaParaSaludar);


// * ------------------------------------------------------------------- * //

alert("COLORES");

function colors(color) {
//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuleve --> "This is blue"
//En caso que el color recibido sea "red", devuleve --> "This is red"
//En caso que el color recibido sea "green", devuleve --> "This is green"
//En caso que el color recibido sea "orange", devuleve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.

    let colorLower = color.toLowerCase();

    switch (colorLower) {
        case "blue":
            console.log("This is blue");
            break;
        case "red":
            console.log("This is red");
            break;
        case "green":
            console.log("This is green");
            break;
        case "orange":
            console.log("This is orange");
            break;
        default:
            console.log("Color not found");
            break;
    }

}

let colorUsuario = prompt("Escribe alguno de estos colores en inglés: Blue, Red, Green, Orange");
colors(colorUsuario);

// * ------------------------------------------------------------------- * //

alert("DIEZ O CINCO");

function esDiezOCinco(numero) {
// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
// Tu código:

    let validacion = (numero == 10) || (numero == 5);

    return console.log(`¿El número que ingresaste es 10 o 5? = ${validacion}`);
}

numeroUno = Number(prompt("Ingresa algún número"));
esDiezOCinco(numeroUno);

// * ------------------------------------------------------------------- * //

alert("NÚMERO EN RANGO");

function estaEnRango(numero) {
// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
// Tu código:

    let rango = (numero > 20) && (numero < 50);

    return console.log(`¿El número se encuentre entre 20 y 50?: ${rango}`);

}

numeroUno = Number(prompt("Ingresa algún número"));
estaEnRango(numeroUno);

// * ------------------------------------------------------------------- * //

alert("FIZzBUZz");

function fizzBuzz(numero) {
// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero

    for (let i = 0; i < numero; i++) {
        if (i % 15 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }

}

valorUno = Number(prompt("¿Hasta qué número deseas contar?"));
fizzBuzz(valorUno);

// * ------------------------------------------------------------------- * //

alert("VALIDACIÓN SUPREMA");

function operadoresLogicos(num1, num2, num3) {
//La función recibe tres números distintos. 
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

}

// * ------------------------------------------------------------------- * //

function esVerdadero(valor) {
//Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí

}

// * ------------------------------------------------------------------- * //

function doWhile(numero) {
//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.
//Usar el bucle do ... while.

}

// * ------------------------------------------------------------------- * //

function diaDeLaSemana(numeroDeDia) {
//Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
//Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
//Escribe tu código aquí   


} 

// * ------------------------------------------------------------------- * //

function nuevoUsuario(nombre, email, password) {
// Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
// Devuelve el objeto
// Tu código:

}

// * ------------------------------------------------------------------- * //


function tieneEmail(usuario) {
// Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
// De lo contratio, devuelve "false"
// Tu código:

}

// * ------------------------------------------------------------------- * //

function verificarPassword(usuario, password) {
// Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
// Devuelve "true" si coinciden
// De lo contrario, devuelve "false"
// Tu código:

}

// * ------------------------------------------------------------------- * //