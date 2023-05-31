
let persona = {
     nombre: "Jhonatan",
     apellido: "Toro"
}

console.log(persona.nombre)
console.log(persona.apellido)
 
//Función constructora

function Celular (marca, modelo) {
    this.marca = marca;
    this.modelo = modelo
}

//Intancio el objeto

let celular1 = new Celular ("Iphone", "12 pro");
console.log(celular1);