Algoritmo switch
	
	///Diagrama en la pagina 18
	
	///Ejercicio: Codigo: 
	///Crear un programa que pida un numero y le recomiende a la persona un libro-pelicula o juego seg�n la opci�n indicada.
	Definir opcionElegida Como Entero;
	
	Escribir "Bienvenido al recomendador 3000 mil"; 
	Escribir "";
	Escribir "�Qu� gustar�a que te recomendar� el d�a de hoy?";
	Escribir "1. Libro";
	Escribir "2. Pel�cula";
	Escribir "3. Juego";
	Leer opcionElegida;
	
	Segun opcionElegida Hacer
		1:
			Escribir "�Te gusta la fantas�a y ver el mundo de una manera distinta?";
			Escribir "Te recomendamos leer: EL PRINCIPITO";
		2:
			Escribir "�Te gusta la ciencia ficci�n y los movimientos en c�mara lenta?";
			Escribir "Te recomendamos ver: MATRIX";
		3:
			Escribir "�Te gusta la velocidad y los veh�culos de 4 ruedas?";
			Escribir "Te recomendamos jugar: Need for Speed: Most Wanted";
			
		De Otro Modo:
			Escribir "Ingrese un valor valido por favor.";
	FinSegun
	
FinAlgoritmo