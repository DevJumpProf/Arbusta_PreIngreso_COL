//funciones
//bloque de codigo que se puede reutilizar

function sumar(a, b) {
    console.log(a + b);
}

sumar(2, 3);

//funciones declaradas
//las funciones declaradas son aquellas que se declaran con la palabra reservada function
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar('Esteban'));

//funciones expresadas
//las funciones expresadas son funciones que se asignan a una variable
const hacerTorilla = function (cantidad) {
    return 'Torilla hecha '.repeat(cantidad);
}
console.log(hacerTorilla(3));

