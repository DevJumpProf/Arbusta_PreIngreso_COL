
Algoritmo operadores
	
	Definir sum1, sum2, suma, minuendo, sustraendo, resta, factor, factor2, producto, dividendo, divisor, cociente, base, exponente, potencia, dividendoMod, divisorMod, resto Como Real
	
	//SUMA
	Escribir "OPERACIÓN: SUMA"
	Escribir "Ingrese el sumando #1: "
	Leer sum1
	Escribir "Ingrese el sumando #2: "
	Leer sum2
	
	suma = sum1 + sum2
	Mostrar "Entonces: ", sum1, " + ", sum2, " = ", suma
	
	//RESTA
	Escribir "OPERACIÓN: RESTA"
	Escribir "Ingrese el número al que se le restará: "
	Leer minuendo
	Escribir "Ingrese el número a restar: "
	Leer sustraendo
	
	resta = minuendo - sustraendo
	Mostrar "Entonces: ", minuendo, " - ", sustraendo, " = ", resta
	
	//MULTIPLICACIÓN
	Escribir "OPERACIÓN: MULTIPLICACIÓN"
	Escribir "Ingrese el factor #1: "
	Leer factor1
	Escribir "Ingrese el factor #2: "
	Leer factor2
	
	producto = factor1 * factor2
	Mostrar "Entonces: ", factor1, " * ", factor2, " = ", producto
	
	//DIVISIÓN
	Escribir "OPERACIÓN: DIVISIÓN"
	Escribir "Ingrese el número a dividir: "
	Leer dividendo
	Escribir "Ingrese el número por el que se va a dividir: "
	Leer divisor
	
	cociente = dividendo / divisor
	Mostrar "Entonces: ", dividendo, " / ", divisor, " = ", cociente
	
	//POTENCIACIÓN
	Escribir "OPERACIÓN: POTENCIACIÓN"
	Escribir "Ingrese la base de la potencia: "
	Leer base
	Escribir "Ingrese el exponente de la potencia: "
	Leer exponente
	
	potencia = base ^ exponente
	Mostrar "Entonces: ", base, " ^ ", exponente, " = ", potencia
	
	//MODULO - RESTO DE LA DIVISIÓN
	Escribir "OPERACIÓN: MODULO/RESTO"
	Escribir "Ingrese el número a dividir: "
	Leer dividendoMod
	Escribir "Ingrese el número por el que se va a dividir: "
	Leer divisorMod
	
	resto = dividendoMod MOD divisorMod
	Mostrar "Entonces: ", dividendoMod, " % ", divisorMod, " = ", resto
	
FinAlgoritmo