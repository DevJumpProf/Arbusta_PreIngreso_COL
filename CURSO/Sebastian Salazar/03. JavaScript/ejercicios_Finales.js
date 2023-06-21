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

function devolverString(str) {
  return str;
}

console.log(devolverString("Hello")); // Output: Hello

function suma(x, y) {
  return x + y;
}

console.log(suma(5, 3)); // Output: 8

function resta(x, y) {
  return x - y;
}

console.log(resta(10, 4)); // Output: 6

function multiplica(x, y) {
  return x * y;
}

console.log(multiplica(7, 6)); // Output: 42

function divide(x, y) {
  return x / y;
}

console.log(divide(15, 3)); // Output: 5

function sonIguales(x, y) {
  return x === y;
}

console.log(sonIguales(5, 5)); // Output: true

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}

console.log(tienenMismaLongitud("hello", "world")); // Output: true

function menosQueNoventa(num) {
  return num < 90;
}

console.log(menosQueNoventa(80)); // Output: true

function mayorQueCincuenta(num) {
  return num > 50;
}

console.log(mayorQueCincuenta(60)); // Output: true

function obtenerResto(x, y) {
  return x % y;
}

console.log(obtenerResto(10, 3)); // Output: 1

function esPar(num) {
  return num % 2 === 0;
}

console.log(esPar(4)); // Output: true

function esImpar(num) {
  return num % 2 !== 0;
}

console.log(esImpar(3)); // Output: true

function esPositivo(numero) {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

console.log(esPositivo(10)); // Output: "Es positivo"

function agregarSimboloExclamacion(str) {
  return str + "!";
}

console.log(agregarSimboloExclamacion("Hello")); // Output: "Hello!"

function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido;
}

console.log(combinarNombres("John", "Doe")); // Output: "John Doe"

function obtenerSaludo(nombre) {
  return "Hola " + nombre + "!";
}

console.log(obtenerSaludo("Alice")); // Output: "Hola Alice!"

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

console.log(obtenerAreaRectangulo(5, 8)); // Output: 40

function retornarPerimetro(lado) {
  return lado * 4;
}

console.log(retornarPerimetro(5)); // Output: 20

function areaDelTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(areaDelTriangulo(6, 4)); // Output: 12

function deEuroAdolar(euro) {
  return euro * 1.2;
}

console.log(deEuroAdolar(10)); // Output: 12

function esVocal(letra) {
  if (letra.length !== 1) {
    return "Dato incorrecto";
  }

  letra = letra.toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

console.log(esVocal("a")); // Output: "Es vocal"

function obtenerMayor(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(obtenerMayor(8, 12)); // Output: 12

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}

console.log(mayoriaDeEdad(20)); // Output: "Allowed"

function conection(status) {
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
}

console.log(conection(2)); // Output: "Away"

function saludo(idioma) {
  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }
}

console.log(saludo("ingles")); // Output: "Hello!"

function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}

console.log(colors("red")); // Output: "This is red"

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

console.log(esDiezOCinco(10)); // Output: true

function estaEnRango(numero) {
  return numero < 50 && numero > 20;
}

console.log(estaEnRango(30)); // Output: true

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
}

console.log(fizzBuzz(15)); // Output: "fizzbuzz"

function operadoresLogicos(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
}

console.log(operadoresLogicos(5, 8, 10)); // Output: 11

function esVerdadero(valor) {
  if (valor) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

console.log(esVerdadero(true)); // Output: "Soy verdadero"

function doWhile(numero) {
  var resultado = numero;
  var contador = 0;

  do {
    resultado += 5;
    contador++;
  } while (contador < 8);

  return resultado;
}

console.log(doWhile(3)); // Output: 38

function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es día laboral";
  }
}

console.log(diaDeLaSemana(1)); // Output: "Es fin de semana"

var usuario = nuevoUsuario("John Doe", "john@example.com", "password");
console.log(tieneEmail(usuario)); // Output: true

console.log(verificarPassword(usuario, "password")); // Output: true