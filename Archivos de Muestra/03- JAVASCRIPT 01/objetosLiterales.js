let persona = {
    nombre : "Jose",
    apellido: "San Martin",
    saludar:function(){
        return "Hola me llamo " + this.nombre;
    }
}

/* console.log(persona.saludar()) */
/* console.log(persona.nombre)
console.log(persona.apellido) */

// construccion de un objeto
function Celular (marca,modelo){
this.marca = marca;
this.modelo=modelo;
};

// instanciar un objeto
let celular1 = new Celular ("Motorola","A71")
let celular2= new Celular("Nokia",1100)

console.log (celular2.modelo)




