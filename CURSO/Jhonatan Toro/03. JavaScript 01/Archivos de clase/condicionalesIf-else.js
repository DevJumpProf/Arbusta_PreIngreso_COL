
let condicion = true;
let condicion2 = false;

//Condicional simple

if (condicion) {
    //Código a ejecutar si la condicion es verdadera
}

//Condicional con bloque else 

if (condicion) {
    //Código a ejecutar si la condicion es verdadera
} else {
    //Código a ejecutar si la condicion es falsa
}

//Condicional con bloque else if

if (condicion) {
    //Código a ejecutar si la condicion es verdadera
} else if (condicion2) {
    //Código a ejecutar si la condicion2 es verdadera
} else {
    //Código a ejecutar si la condicion2 es falsa
}

let clima = "Nublado"
let dia = "Lunes"

if ((clima == "Soleado") && (dia == "Domingo")) {
    console.log("Voy a la pileta")
} else if (clima == "Soleado" && dia == "Lunes") {
    console.log("Bueh, voy a la pileta igual")
} else {
    console.log("Me quedo en casa mirando una peli")
}