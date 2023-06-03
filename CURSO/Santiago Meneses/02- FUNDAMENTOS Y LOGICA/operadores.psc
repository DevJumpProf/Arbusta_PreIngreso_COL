Proceso operadores
	
	Definir suma, resta, multiplicacion, division, potencia Como Entero;
	Definir modulo Como Real;
	
	suma = 2 + 2;
	resta = 10 - 5;
	multiplicacion = 2 * 2;
	division = 21 / 3;
	
	potencia  = 10 ^ 2;
	
	
	Escribir "El resultado de la Suma es: ", suma;
	Escribir "El resultado de la Resta es: ", resta;
	Escribir "El resultado de la Multiplicacion es: ", multiplicacion;
	Escribir "El resultado de la Division es: ", division;
	Escribir "El resultado de la Potenciación: ", potencia;
	Escribir " ";
	Escribir "Aplicando el modulo para comparar pares e impares.";
	Escribir Sin Saltar "¿Qué número deseas saber si es par o impar?";
	Leer modulo; 
	
	Si (modulo % 2 == 0) Entonces
		Escribir "El número ", modulo , " es par";
	SiNo
		Escribir "El número ", modulo , " es impar";
	FinSi
	
FinProceso
