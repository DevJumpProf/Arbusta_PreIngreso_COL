Algoritmo switch
	//Ejercicio: Codigo: Crear un programa que pida un numero y le recomiende a la persona un libro-pelicula o juego según la opción indicada
	
	Escribir "Recomendaciones"
	Escribir "1. Lectura"
	Escribir "2. Pelicula"
	Escribir "3. Juego"
	
	Escribir "Elija una opción para realizar la recomendación"
	Leer opcionElegida
	
	Segun opcionElegida Hacer
		1: 
			Escribir "Lectura recomendada: "
			Escribir " El Psicoanalista"
		2: 
			Escribir "Película recomendada: "
			Escribir " Divergente"
		3:
			Escribir "Juego recomendado: "
			Escribir " Crash"
		De Otro Modo:
			Escribir "Su opción no es válida, elija un número entre 1 y 3"
	FinSegun
FinAlgoritmo
