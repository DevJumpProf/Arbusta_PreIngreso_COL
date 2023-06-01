
//for in  -->  Método para recorrer objetos

let persona = {
    nombre:"Jhonatan",
    apellido: "Toro",
    edad: 25
}

for (var i in persona){
console.log(i,persona[i])
}

//for Of  --> Método para recorrer arrays - arreglos

let musicos = ["Chris Martin","Arjona","Feid"]

for (let musico of musicos){
    console.log(musico)
}
