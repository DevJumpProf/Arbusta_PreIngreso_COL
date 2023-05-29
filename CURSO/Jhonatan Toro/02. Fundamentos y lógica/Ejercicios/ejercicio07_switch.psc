
Algoritmo switch
	
	//Diagrama en la pagina 18
	//Ejercicio: Codigo: Crear un programa que pida un número y le recomiende a la persona un libro-pelicula o juego según la opción indicada
	
	Escribir "Programa de recomendaciones"
	Escribir "1. Lectura"
	Escribir "2. Película"
	Escribir "3. Juego"
	Escribir "Elija el número de la opción en la que desea la recomendación"
	Leer opcionElegida
	
	Segun opcionElegida Hacer
		1: 
			Escribir "Lectura recomendada: "
			Escribir "* Principito"
		2:
			Escribir "Película recomendada: "
			Escribir "* Matrix"
		3:
			Escribir "Juego recomendado: "
			Escribir "* NFS"
		De Otro Modo:
			Escribir "Opción no válida, elija un número entre 1 y 3"
	FinSegun
	
FinAlgoritmo