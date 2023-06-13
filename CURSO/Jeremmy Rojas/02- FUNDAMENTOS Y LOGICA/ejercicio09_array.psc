Algoritmo array
	
	// realizar el ejercicio de la pagina 6 con tus propios datos
	//Para realizar un arreglo básico podemos, nosotros mismos, definir el rango y los elementos del arreglo de la siguiente forma.
	Escribir "ARREGLO SENCILLO"
	Escribir ""
	Dimension juegos[5]
	
	juegos[1] = "God of war"
	juegos[2] = "Devil may cry"
	juegos[3] = "Genshin Impact"
	juegos[4] = "Honkai star rail"
	juegos[5] = "Bioshock"
	
	Mostrar "Videojuego1: " juegos[1]
	Mostrar "Videojuego2: " juegos[2]
	Mostrar "Videojuego3: " juegos[3]
	Mostrar "Videojuego4: " juegos[4]
	Mostrar "Videojuego5: " juegos[5]
	
	Escribir ""
	
	//Para realizar un arreglo en el que el usuario pueda definir el rango y su contenido, lo podemos hacer de la siguiente manera.
	Escribir "ARREGLO CON INGRESO DE DATOS POR EL USUARIO"
	Escribir ""
	n = 1
	Escribir "Por favor defina el tamaño del arreglo"
	Leer tamaño
	Dimension videoJuegos[tamaño]
	
	Mientras n<=tamaño Hacer
		Escribir "Por favor llene el arreglo con los videojuegos que quiera recomendar"
		leer videoJuego
		videoJuegos[n] = videoJuego
		n = n+1
	Fin Mientras
	
	n = 1 
	Escribir ""
	Mientras n<=tamaño Hacer
		Mostrar "Videojuego",n, ": ", videoJuegos[n]
		n = n+1
	Fin Mientras
	
FinAlgoritmo


