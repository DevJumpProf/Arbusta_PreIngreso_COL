
//Realizar una funci�n (no recibe argumentos) que realice una operaci�n matem�tica y utilizarla 

//Defino funciones
Funcion suma()
	Definir num1, num2 Como Real
	Escribir "Indique el n�mero #1: "
	Leer num1
	Escribir "Indique el n�mero #2: "
	Leer num2
	Mostrar "El total es: ", num1 + num2
FinFuncion

Funcion resta()
	Definir minuendo, sustraendo Como Real
	Escribir "Indique el n�mero al que se le restar�: "
	Leer minuendo
	Escribir "Indique el n�mero que desea restar: "
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
	Escribir "Indique el n�mero que se va a dividir: "
	Leer dividendo
	Escribir "Indique el n�mero por el cual se va a dividir: "
	Leer divisor
	Mostrar "El cociente es: ", dividendo / divisor
FinFuncion

//Algoritmo
Algoritmo ejercicio11_FuncionSinArgumento
	
	Definir operacion Como Entero
	Escribir "Indique el n�mero de la operaci�n que desea realizar"
	Escribir "1. Suma"
	Escribir "2. Resta"
	Escribir "3. Multiplicaci�n"
	Escribir "4. Divisi�n"
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
			Escribir "Opci�n no v�lida, elija un n�mero entre 1 y 4"
	FinSegun
	
FinAlgoritmo
