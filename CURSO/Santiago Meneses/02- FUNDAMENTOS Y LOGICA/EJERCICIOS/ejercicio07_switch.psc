Algoritmo switch
	
	///Diagrama en la pagina 18
	
	///Ejercicio: Codigo: 
	///Crear un programa que pida un numero y le recomiende a la persona un libro-pelicula o juego según la opción indicada.
	Definir opcionElegida Como Entero;
	
	Escribir "Bienvenido al recomendador 3000 mil"; 
	Escribir "";
	Escribir "¿Qué gustaría que te recomendará el día de hoy?";
	Escribir "1. Libro";
	Escribir "2. Película";
	Escribir "3. Juego";
	Leer opcionElegida;
	
	Segun opcionElegida Hacer
		1:
			Escribir "¿Te gusta la fantasía y ver el mundo de una manera distinta?";
			Escribir "Te recomendamos leer: EL PRINCIPITO";
		2:
			Escribir "¿Te gusta la ciencia ficción y los movimientos en cámara lenta?";
			Escribir "Te recomendamos ver: MATRIX";
		3:
			Escribir "¿Te gusta la velocidad y los vehículos de 4 ruedas?";
			Escribir "Te recomendamos jugar: Need for Speed: Most Wanted";
			
		De Otro Modo:
			Escribir "Ingrese un valor valido por favor.";
	FinSegun
	
FinAlgoritmo