
Algoritmo switch
	
	//Diagrama en la pagina 18
	//Ejercicio: Codigo: Crear un programa que pida un n�mero y le recomiende a la persona un libro-pelicula o juego seg�n la opci�n indicada
	
	Escribir "Programa de recomendaciones"
	Escribir "1. Lectura"
	Escribir "2. Pel�cula"
	Escribir "3. Juego"
	Escribir "Elija el n�mero de la opci�n en la que desea la recomendaci�n"
	Leer opcionElegida
	
	Segun opcionElegida Hacer
		1: 
			Escribir "Lectura recomendada: "
			Escribir "* Principito"
		2:
			Escribir "Pel�cula recomendada: "
			Escribir "* Matrix"
		3:
			Escribir "Juego recomendado: "
			Escribir "* NFS"
		De Otro Modo:
			Escribir "Opci�n no v�lida, elija un n�mero entre 1 y 3"
	FinSegun
	
FinAlgoritmo