
Algoritmo operadores
	
	Definir sum1, sum2, suma, minuendo, sustraendo, resta, factor, factor2, producto, dividendo, divisor, cociente, base, exponente, potencia, dividendoMod, divisorMod, resto Como Real
	
	//SUMA
	Escribir "OPERACI�N: SUMA"
	Escribir "Ingrese el sumando #1: "
	Leer sum1
	Escribir "Ingrese el sumando #2: "
	Leer sum2
	
	suma = sum1 + sum2
	Mostrar "Entonces: ", sum1, " + ", sum2, " = ", suma
	
	//RESTA
	Escribir "OPERACI�N: RESTA"
	Escribir "Ingrese el n�mero al que se le restar�: "
	Leer minuendo
	Escribir "Ingrese el n�mero a restar: "
	Leer sustraendo
	
	resta = minuendo - sustraendo
	Mostrar "Entonces: ", minuendo, " - ", sustraendo, " = ", resta
	
	//MULTIPLICACI�N
	Escribir "OPERACI�N: MULTIPLICACI�N"
	Escribir "Ingrese el factor #1: "
	Leer factor1
	Escribir "Ingrese el factor #2: "
	Leer factor2
	
	producto = factor1 * factor2
	Mostrar "Entonces: ", factor1, " * ", factor2, " = ", producto
	
	//DIVISI�N
	Escribir "OPERACI�N: DIVISI�N"
	Escribir "Ingrese el n�mero a dividir: "
	Leer dividendo
	Escribir "Ingrese el n�mero por el que se va a dividir: "
	Leer divisor
	
	cociente = dividendo / divisor
	Mostrar "Entonces: ", dividendo, " / ", divisor, " = ", cociente
	
	//POTENCIACI�N
	Escribir "OPERACI�N: POTENCIACI�N"
	Escribir "Ingrese la base de la potencia: "
	Leer base
	Escribir "Ingrese el exponente de la potencia: "
	Leer exponente
	
	potencia = base ^ exponente
	Mostrar "Entonces: ", base, " ^ ", exponente, " = ", potencia
	
	//MODULO - RESTO DE LA DIVISI�N
	Escribir "OPERACI�N: MODULO/RESTO"
	Escribir "Ingrese el n�mero a dividir: "
	Leer dividendoMod
	Escribir "Ingrese el n�mero por el que se va a dividir: "
	Leer divisorMod
	
	resto = dividendoMod MOD divisorMod
	Mostrar "Entonces: ", dividendoMod, " % ", divisorMod, " = ", resto
	
FinAlgoritmo