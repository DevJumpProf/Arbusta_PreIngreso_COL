
Algoritmo ejercicio01
	
	// Vamos a poner en pr�ctica lo que acabamos de ver, vamos a crear en PseInt, una variable de cada tipo de dato posible. 
	//Palabras Reservadas :Palabras que dentro del lenguaje significan la ejecuci�n de una instrucci�n determinada, 
	//por lo que no pueden ser utilizadas con otro fin. EnPseudocodigo, las palabras reservas aparecen de color azul.
	//Por ejemplo, la palabra Algoritmo y FinAlgoritmo.
	
	
	//Voy a recrear las variables adaptadas a una situaci�n cotidiana (Perfil personal)
	Definir nombre Como Caracter
	Definir edad Como Entero
	Definir peso Como Real
	Definir estadoCivil Como Logico
	
	Escribir "Datos personales"
	Escribir "�Cu�l es su nombre?"
	Leer nombre
	Escribir "�Cu�ntos a�os tiene?"
	Leer edad
	Escribir "�Cu�l es su peso en kg?"
	Leer peso
	Escribir "�Est� casado (V/v para verdadero, F/f para falso)?"
	Leer estadoCivil

	Borrar Pantalla
	
	Mostrar "Resumen perfil personal"
	Mostrar "Nombre: ", nombre
	Mostrar "Edad: ", edad
	Mostrar "Peso: ", peso, " kg"
	Mostrar "Casado: ", estadoCivil
	
FinAlgoritmo