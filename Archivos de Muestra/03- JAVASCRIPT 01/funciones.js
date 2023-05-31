/* function sumar (num1,num2){
return(num1+num2)
 }
console.log(sumar(10,20))

//funciones declaradas
function hacerHelado(cantidad){
    return "Helado ".repeat(cantidad)
}
console.log(hacerHelado(6))

//funcion expresada
let hacerTortas = function (cantidad){
    return "Tortas ".repeat(cantidad)
}

console.log(hacerTortas(5))
let resultado = (hacerTortas(5))
console.log(resultado)
 */
/* 
function saludar (nombre="nombrepordefecto",apellido="apellidopordefecto"){
    return "Hola "+nombre+" "+ apellido
}
 */
/* console.log(saludar("Amilcar", "Brusa")) */

// SCOPE
let saludo = "hola que tal"
function hola () {

    return saludo
}
 console.log (hola())


