Algoritmo switch
	
	//Diagrama en la pagina 18
	//Ejercicio: Codigo: Crear un programa que pida un numero y le recomiende a la persona un libro-pelicula o juego según la opción indicada
	
	Escribir "Selecciona una opción para recibir una recomendación"
	Escribir "1 Para libros, 2 para películas y 3 para juegos"
	Leer opcionElegida
	Segun opcionElegida Hacer
		1:
			Mostrar "El Principito"
		2:
			Mostrar "Matrix"
		3:
			Mostrar "NFS"
		De Otro Modo:
			Mostrar "Opcion incorrecta"
	Fin Segun
FinAlgoritmo