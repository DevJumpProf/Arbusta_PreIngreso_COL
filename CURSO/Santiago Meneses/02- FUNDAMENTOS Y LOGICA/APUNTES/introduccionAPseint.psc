Proceso Introduccion
	
	// TIPOS DE DATOS EN PSEINT:
	
	// ENTEROS (INT): S�lo n�meros enteros;
	Definir numeroEntero Como Entero;
	numeroEntero = 10; 
	
	// REAL(FLOAT): N�meros con cifras decimales. Para separar decimales se utiliza el punto.
	Definir numeroReal Como Real;
	numeroReal = 10.5;
	
	// Car�cter (CHAR): cuando queremos guardar un car�cter. 
	//Los Caracteres se encierran entre comillas simples. un car�cter (unidimensional): 'a','A'.
	Definir unSoloCaracter Como Caracter;
	unSoloCaracter = 'a';
	
	//L�gico (BOOL): cuando necesitamos guardar una expresi�n l�gica (verdadero o falso)
	Definir comparacion Como Logico;
	comparacion = numeroEntero < numeroReal; // Esto es verdadero
	Escribir comparacion;
	
	//Cadena (STRING): cuando queremos guardar cadenas de caracteres. Las Cadenas se encierran entre comillas dobles.	
	Definir string como caracteres; //o tambi�n como cadena;
	string = "Hola mundo"; 
	Escribir string;
	
	////////////////////////////////////////////////////////////
	
	// TIPOS DE INSTRUCCIONES:
	
	// INSTRUCCIONES DE INICIO/FIN: son utilizadas para delimitar bloques de c�digo. 
	//Por ejemplo, Algoritmo y FinAlgoritmo O Proceso  y FinProceso.	

	// INSTRUCCIONES DE ESCRITURA O SALIDA: 
	//Se utilizan para escribir o mostrar mensajes o contenidos de las variable en un dispositivo de salida.
	Escribir "Instrucci�n de salida";

	//INSTRUCCIONES DE LECTURA O ENTRADA:
	//Esta entrada se conoce como operaci�n de lectura (leer). 
	//Los datos de entrada se introducen al procesador mediante dispositivos de entrada 
	//(teclado, tarjetas perforadas, unidades de disco, etc.).
	Definir nombreParaSaludar Como Cadena;
	Escribir "Escriba su nombre para el ejemplo de lectura";
	Leer nombreParaSaludar;
	Escribir nombreParaSaludar;
	
	
FinProceso
