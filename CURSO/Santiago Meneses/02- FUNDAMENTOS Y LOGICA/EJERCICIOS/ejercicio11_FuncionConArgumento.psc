Funcion saludo <- saludoPersona ( nombre )
	
	Escribir "Hola ", nombre, " �C�mo est�s?";
	
Fin Funcion



Proceso funcionConArgumento
	// realizar y ejecutar una funcion que reciba un nombre como argumento y en la ejecucion realiza un saludo Utilizando ese nombre
	Escribir "�Cu�l es tu nombre?";
	Leer nombre;
	
	saludo  = saludoPersona (nombre);
	
	
	
FinProceso
