
// Realizar y ejecutar una funcion que reciba un nombre como argumento 
// y en la ejecuci�n realiza un saludo Utilizando ese nombre

//Defino funciones
Funcion saludar(nombre) 
	Mostrar "Hola, ", nombre, "! "
FinFuncion

//Algoritmo
Algoritmo ejercicio11_FuncionConArgumento
	
	Definir nombre Como Caracter
	Escribir "�Cu�l es tu nombre?"
	Leer nombre  		//Capturo el nombre y lo entrego como argumento
	saludar(nombre)
	
FinAlgoritmo
