Proceso instrucciones
	
	///////// PARTE 1
	Escribir "///////// PARTE 1";
	Definir num Como Entero;
	Definir text Como Cadena;
	num = 10;
	//Escribir "Hola Mundo mi número es el: ", num;
	text = "Hola Mundo mi número es el: ";
	
	Escribir text + ConvertirATexto(num);
	
	//NOTA: Cuando las variables no sean del mismo tipo de dato se puede concatenar con una coma.
	Escribir text , num;
	Escribir " ";
	
	
	///////// PARTE 2
	Escribir "///////// PARTE 2";
	Definir  nombre Como Cadena;
	Definir num1, num2, resultado Como Entero;
	
	Escribir Sin Saltar "Ingresa tu nombre"; 
	Leer nombre;
	
	Escribir "Hola ", nombre, " escribe un número para sumar";
	Leer num1;
	Escribir nombre, " escribe otro número para sumar";
	Leer num2;
	
	resultado = num1 + num2;
	
	Escribir nombre, " el resultado de la suma es: ", resultado;
	
	
	
FinProceso
