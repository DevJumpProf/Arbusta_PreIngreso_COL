Algoritmo switch
	//Ejercicio: Codigo: Crear un programa que pida un numero y le recomiende a la persona un libro-pelicula o juego seg�n la opci�n indicada
	
	Escribir "Recomendaciones"
	Escribir "1. Lectura"
	Escribir "2. Pelicula"
	Escribir "3. Juego"
	
	Escribir "Elija una opci�n para realizar la recomendaci�n"
	Leer opcionElegida
	
	Segun opcionElegida Hacer
		1: 
			Escribir "Lectura recomendada: "
			Escribir " El Psicoanalista"
		2: 
			Escribir "Pel�cula recomendada: "
			Escribir " Divergente"
		3:
			Escribir "Juego recomendado: "
			Escribir " Crash"
		De Otro Modo:
			Escribir "Su opci�n no es v�lida, elija un n�mero entre 1 y 3"
	FinSegun
FinAlgoritmo
