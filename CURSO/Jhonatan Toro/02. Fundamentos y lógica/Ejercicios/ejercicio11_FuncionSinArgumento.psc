
//Realizar una función (no recibe argumentos) que realice una operación matemática y utilizarla 

//Defino funciones
Funcion suma()
	Definir num1, num2 Como Real
	Escribir "Indique el número #1: "
	Leer num1
	Escribir "Indique el número #2: "
	Leer num2
	Mostrar "El total es: ", num1 + num2
FinFuncion

Funcion resta()
	Definir minuendo, sustraendo Como Real
	Escribir "Indique el número al que se le restará: "
	Leer minuendo
	Escribir "Indique el número que desea restar: "
	Leer sustraendo
	Mostrar "La diferencia es: ", minuendo - sustraendo
FinFuncion

Funcion multiplicacion()
	Definir factor1, factor2 Como Real
	Escribir "Indique el factor #1: "
	Leer factor1
	Escribir "Indique el factor #2: "
	Leer factor2
	Mostrar "El producto es: ", factor1 * factor2
FinFuncion

Funcion division()
	Definir dividendo, divisor Como Real
	Escribir "Indique el número que se va a dividir: "
	Leer dividendo
	Escribir "Indique el número por el cual se va a dividir: "
	Leer divisor
	Mostrar "El cociente es: ", dividendo / divisor
FinFuncion

//Algoritmo
Algoritmo ejercicio11_FuncionSinArgumento
	
	Definir operacion Como Entero
	Escribir "Indique el número de la operación que desea realizar"
	Escribir "1. Suma"
	Escribir "2. Resta"
	Escribir "3. Multiplicación"
	Escribir "4. División"
	Leer operacion
	
	Segun operacion Hacer
		1: 
			suma()
		2:
			resta()
		3: 
			multiplicacion()
		4:
			division()
		De Otro Modo:
			Escribir "Opción no válida, elija un número entre 1 y 4"
	FinSegun
	
FinAlgoritmo
