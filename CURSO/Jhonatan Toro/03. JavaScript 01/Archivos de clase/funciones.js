
//Funciones -- Bloque específico de tareas que puedo invocar siempre que desee

function sumar(num1, num2) {
    console.log(num1 + num2)
}

sumar(5, 10);

//Funciones declaradas -- Se cargan antes de que el código se ejecute

function hacerHelado(cantidad) {
    return "Helado ".repeat(cantidad)
}

console.log(hacerHelado(6))

//Funciones expresadas -- Se asignan como valor a una variable

let hacerTortas = function(cantidad) {
    return "Tortas ".repeat(cantidad)
}

console.log(hacerTortas(3))

//Scope local 

function hola() {
    let saludo = "Hola, ¿cómo estás?"
    return saludo
}

//console.log(saludo); //Error - saludo no está definido 

//Scope global

let saludo = "Hola, ¿cómo estás?"
function hola() {
    return saludo
}

console.log(saludo);


